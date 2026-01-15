import { useState } from "react";

function Ejercicio2() {
    const [logs, setLogs] = useState([]);
    const [detenerPropagacion, setDetenerPropagacion] = useState(false);

    const addLog = (mensaje) => {
        setLogs((prevLogs) => [...prevLogs, mensaje]);
    };

    const handleContenedorClick = () => {
        addLog("Click en CONTENEDOR");
    };

    const handleSubcontenedorClick = () => {
        addLog("Click en SUBCONTENEDOR");
    };

    const handleBotonClick = (e) => {
        addLog("Click en BOTÓN");

        if (detenerPropagacion) {
            e.stopPropagation();
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Ejercicio 2</h2>

            <label>
                <input
                    type="checkbox"
                    checked={detenerPropagacion}
                    onChange={(e) => setDetenerPropagacion(e.target.checked)}
                />
                Detener propagación en el botón
            </label>

            <br /><br />

            <div
                onClick={handleContenedorClick}
                style={{
                    border: "2px solid blue",
                    padding: "20px",
                }}
            >
                Contenedor

                <div
                    onClick={handleSubcontenedorClick}
                    style={{
                        border: "2px solid green",
                        padding: "20px",
                        marginTop: "10px",
                    }}
                >
                    Subcontenedor

                    <br /><br />

                    <button onClick={handleBotonClick}>
                        Botón interno
                    </button>
                </div>
            </div>

            <hr />

            <h3>Log de eventos</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
}

export default Ejercicio2;