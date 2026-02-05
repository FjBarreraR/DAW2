import React from 'react';

const PlayerTable = ({ players, onEdit, onDelete, onSort }) => {
    return (
        <div className="table-container">
            <table className="player-table">
                <thead>
                <tr>
                    <th>
                        Dorsal
                        <button className="sort-btn" onClick={() => onSort('asc')}>↑</button>
                        <button className="sort-btn" onClick={() => onSort('desc')}>↓</button>
                    </th>
                    <th>Nombre</th>
                    <th>Posición</th>
                    <th>Altura (cm)</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {players.length === 0 ? (
                    <tr>
                        <td colSpan="5" style={{ textAlign: 'center', color: '#888' }}>
                            No hay jugadores en el equipo.
                        </td>
                    </tr>
                ) : (
                    players.map((player) => (
                        <tr
                            key={player.id}
                            className={`row-${player.posicion}`}
                        >
                            <td><strong>{player.dorsal}</strong></td>
                            <td>{player.nombre}</td>
                            <td>{player.posicion}</td>
                            <td>{player.altura} cm</td>
                            <td style={{ display: 'flex', gap: '5px' }}>
                                <button
                                    className="btn btn-edit"
                                    onClick={() => onEdit(player)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => onDelete(player)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerTable;