import {useState} from "react";

function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div>
            <h1>Ejercicio 6</h1>
            <p>Contador: {numero}</p>
            <p>El número que está actualmente es: {numero}</p>
            <div style={{textAlign: "center", display: "flex", justifyContent: "center"}}>
                <button onClick={() => setNumero(numero + 1)}>
                    Sumar 1
                </button>
                <button onClick={() => setNumero(numero - 1)}>
                    Restar 1
                </button>
                <button onClick={() => setNumero( 0)}>
                    Volver a 0
                </button>
            </div>
        </div>
    );
}

export default Contador;