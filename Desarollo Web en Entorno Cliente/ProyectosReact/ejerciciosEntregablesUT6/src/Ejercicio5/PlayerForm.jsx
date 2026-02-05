import React, { useState, useEffect } from 'react';

const INITIAL_STATE = {
    nombre: '',
    dorsal: '',
    posicion: 'Receptor',
    altura: ''
};

const PlayerForm = ({ onAddPlayer, onUpdatePlayer, editingPlayer, onCancelEdit, players }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (editingPlayer) {
            setFormData(editingPlayer);
        } else {
            setFormData(INITIAL_STATE);
        }
        setErrors({});
    }, [editingPlayer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const newErrors = {};
        const { nombre, dorsal, altura, id } = formData;

        if (!nombre || nombre.trim().length < 3) {
            newErrors.nombre = "El nombre es obligatorio y debe tener al menos 3 caracteres.";
        }

        if (!dorsal || dorsal < 1 || dorsal > 99) {
            newErrors.dorsal = "El dorsal debe ser un número entre 1 y 99.";
        } else {
            const dorsalDuplicado = players.some(
                p => p.dorsal === parseInt(dorsal) && p.id !== id
            );
            if (dorsalDuplicado) {
                newErrors.dorsal = "Este dorsal ya está ocupado por otro jugador.";
            }
        }

        if (!altura || altura < 140 || altura > 230) {
            newErrors.altura = "La altura debe estar entre 140 y 230 cm.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const playerToSave = {
            ...formData,
            dorsal: parseInt(formData.dorsal),
            altura: parseInt(formData.altura)
        };

        if (editingPlayer) {
            onUpdatePlayer(playerToSave);
        } else {
            onAddPlayer(playerToSave);
            setFormData(INITIAL_STATE);
        }
    };

    return (
        <form className="player-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`form-input ${errors.nombre ? 'error-input' : ''}`}
                    placeholder="Ej: Juan Pérez"
                />
                {errors.nombre && <span className="error-msg">{errors.nombre}</span>}
            </div>

            <div className="form-group">
                <label>Dorsal (1-99):</label>
                <input
                    type="number"
                    name="dorsal"
                    value={formData.dorsal}
                    onChange={handleChange}
                    className={`form-input ${errors.dorsal ? 'error-input' : ''}`}
                />
                {errors.dorsal && <span className="error-msg">{errors.dorsal}</span>}
            </div>

            <div className="form-group">
                <label>Posición:</label>
                <select
                    name="posicion"
                    value={formData.posicion}
                    onChange={handleChange}
                    className="form-input"
                >
                    <option value="Colocador">Colocador</option>
                    <option value="Opuesto">Opuesto</option>
                    <option value="Receptor">Receptor</option>
                    <option value="Central">Central</option>
                    <option value="Líbero">Líbero</option>
                </select>
            </div>

            <div className="form-group">
                <label>Altura (cm):</label>
                <input
                    type="number"
                    name="altura"
                    value={formData.altura}
                    onChange={handleChange}
                    className={`form-input ${errors.altura ? 'error-input' : ''}`}
                />
                {errors.altura && <span className="error-msg">{errors.altura}</span>}
            </div>

            <div className="form-actions">
                {editingPlayer && (
                    <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
                        Cancelar
                    </button>
                )}
                <button type="submit" className="btn btn-primary">
                    {editingPlayer ? 'Guardar Cambios' : 'Añadir Jugador'}
                </button>
            </div>
        </form>
    );
};

export default PlayerForm;