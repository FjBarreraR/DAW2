import { useState } from "react";

function ListaNombres() {
    const [nombre, setNombre] = useState("");
    const [lista, setLista] = useState([]);

    const controlarEnvio = (e) => {
        e.preventDefault();

        if (nombre.trim() !== "") {
            setLista([...lista, nombre]);
            setNombre("");
        }
    };

    const eliminarNombre = (indexEliminar) => {
        const nuevaLista = lista.filter(
            (item, index) => index !== indexEliminar
        );
        setLista(nuevaLista);
    };

    return (
        <div>
            <h2>Lista de nombres</h2>

            <form onSubmit={controlarEnvio}>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Introduce un nombre"
                />
                <button type="submit">Añadir</button>
            </form>

            <ul>
                {lista.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => eliminarNombre(index)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaNombres;