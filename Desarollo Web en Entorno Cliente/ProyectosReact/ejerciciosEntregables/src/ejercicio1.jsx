import { useState } from "react";

function Ejercicio1() {
    const [logs, setLogs] = useState([]);

    const addLog = (tipo, elemento, info = "") => {
        setLogs((prevLogs) => [
            ...prevLogs,
            {
                tipo,
                elemento,
                info,
                hora: new Date().toLocaleTimeString(),
            },
        ]);
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Ejercicio 1</h2>

            <button
                onClick={() => addLog("click", "Botón")}
                onMouseOver={() => addLog("mouseover", "Botón")}
            >
                Botón
            </button>

            <input
                type="text"
                placeholder="Escribe algo..."
                onKeyDown={(e) =>
                    addLog("keydown", "Input", `Tecla pulsada: ${e.key}`)
                }
                onInput={(e) =>
                    addLog("input", "Input", `Valor actual: ${e.target.value}`)
                }
                onMouseOver={() => addLog("mouseover", "Input")}
            />

            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    addLog("click", "Enlace");
                }}
                onMouseOver={() => addLog("mouseover", "Enlace")}
            >
                Enlace de ejemplo
            </a>

            <div
                style={{
                    border: "2px solid black",
                    height: "100px",
                    width: "300px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={(e) =>
                    addLog(
                        "click",
                        "Zona interactiva",
                        `Coordenadas: (${e.clientX}, ${e.clientY})`
                    )
                }
                onMouseOver={() => addLog("mouseover", "Zona interactiva")}
            >
                Zona interactiva
            </div>

            <hr />

            <h3>Panel de registro</h3>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>
                        [{log.hora}] Evento: <b>{log.tipo}</b> | Elemento:{" "}
                        <b>{log.elemento}</b>
                        {log.info && ` | Info: ${log.info}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Ejercicio1;