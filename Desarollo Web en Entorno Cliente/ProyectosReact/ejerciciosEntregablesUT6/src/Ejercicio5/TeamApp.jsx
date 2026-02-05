import React, { useState } from 'react';
import PlayerForm from './PlayerForm';
import PlayerTable from './PlayerTable';
import './estilosEjercicio5.css';

const INITIAL_PLAYERS = [
    { id: 1, nombre: 'Haikyuu Hinata', dorsal: 10, posicion: 'Central', altura: 164 },
    { id: 2, nombre: 'Kageyama Tobio', dorsal: 9, posicion: 'Colocador', altura: 181 },
    { id: 3, nombre: 'Nishinoya Yuu', dorsal: 4, posicion: 'Líbero', altura: 160 },
];

const TeamApp = () => {
    const [players, setPlayers] = useState(INITIAL_PLAYERS);
    const [editingPlayer, setEditingPlayer] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [playerToDelete, setPlayerToDelete] = useState(null);

    const addPlayer = (player) => {
        const newPlayer = { ...player, id: Date.now() };
        setPlayers([...players, newPlayer]);
    };

    const updatePlayer = (updatedPlayer) => {
        const updatedList = players.map(p =>
            p.id === updatedPlayer.id ? updatedPlayer : p
        );
        setPlayers(updatedList);
        setEditingPlayer(null);
    };

    const handleEditClick = (player) => {
        setEditingPlayer(player);
    };

    const cancelEdit = () => {
        setEditingPlayer(null);
    };

    const handleDeleteClick = (player) => {
        setPlayerToDelete(player);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        setPlayers(players.filter(p => p.id !== playerToDelete.id));
        setIsModalOpen(false);
        setPlayerToDelete(null);
        if (editingPlayer && editingPlayer.id === playerToDelete.id) {
            setEditingPlayer(null);
        }
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
        setPlayerToDelete(null);
    };

    const handleSort = (order) => {
        const sortedPlayers = [...players].sort((a, b) => {
            return order === 'asc' ? a.dorsal - b.dorsal : b.dorsal - a.dorsal;
        });
        setPlayers(sortedPlayers);
    };

    return (
        <div className="team-container">
            <h1 className="app-title">Gestión Equipo de Voleibol</h1>

            <PlayerForm
                onAddPlayer={addPlayer}
                onUpdatePlayer={updatePlayer}
                editingPlayer={editingPlayer}
                onCancelEdit={cancelEdit}
                players={players}
            />

            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #ddd' }}/>

            <PlayerTable
                players={players}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
                onSort={handleSort}
            />

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>¿Eliminar jugador?</h3>
                        <p>
                            Estás a punto de eliminar a <strong>{playerToDelete?.nombre}</strong>.
                            <br/>Esta acción no se puede deshacer.
                        </p>
                        <div className="modal-actions">
                            <button className="btn btn-secondary" onClick={cancelDelete}>Cancelar</button>
                            <button className="btn btn-danger" onClick={confirmDelete}>Confirmar Eliminación</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TeamApp;