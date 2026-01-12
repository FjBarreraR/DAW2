import { useState } from "react";

function Formulario() {
    const [texto, setTexto] = useState("");
    const [enviado, setEnviado] = useState("");

    const controlarEnvio = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        setEnviado(texto);
    };

    return (
        <div>
            <h1>Ejercicio 9</h1>
            <h2>Formulario</h2>

            <form onSubmit={controlarEnvio}>
                <input
                    type="text"
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    placeholder="Escribe algo..."
                />
                <button type="submit">Enviar</button>
            </form>

            <p>Texto enviado: {enviado}</p>
        </div>
    );
}

export default Formulario;