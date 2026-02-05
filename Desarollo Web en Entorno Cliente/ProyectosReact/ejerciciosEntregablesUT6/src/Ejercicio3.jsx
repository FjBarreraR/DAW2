import React, { useEffect, useState } from 'react';

const Ejercicio3 = () => {
    const [reactBg, setReactBg] = useState('bg-white');
    const [reactText, setReactText] = useState('');

    const handleReactMouseEnter = () => {
        setReactBg('bg-purple-100');
    };

    const handleReactMouseLeave = () => {
        setReactBg('bg-white');
    };

    const handleReactInput = (e) => {
        setReactText(e.target.value);
    };

    useEffect(() => {
        const btnNativo = document.getElementById('btn-nativo');
        const inputNativo = document.getElementById('input-nativo');
        const resultadoNativo = document.getElementById('resultado-texto-nativo');
        const cajaNativa = document.getElementById('caja-nativa');

        const onMouseEnterNativo = () => {
            cajaNativa.style.backgroundColor = '#dbeafe'; // azul claro (blue-100)
        };

        const onMouseLeaveNativo = () => {
            cajaNativa.style.backgroundColor = '#ffffff';
        }

        const onInputNativo = (evento) => {
            resultadoNativo.textContent = evento.target.value;
        };

        if (btnNativo) {
            btnNativo.addEventListener('mouseenter', onMouseEnterNativo);
            btnNativo.addEventListener('mouseleave', onMouseLeaveNativo);
        }

        if (inputNativo) {
            inputNativo.addEventListener('input', onInputNativo);
        }

        return () => {
            if (btnNativo) {
                btnNativo.removeEventListener('mouseenter', onMouseEnterNativo);
                btnNativo.removeEventListener('mouseleave', onMouseLeaveNativo);
            }
            if (inputNativo) {
                inputNativo.removeEventListener('input', onInputNativo);
            }
        };
    }, []);

    return (
        <div className="p-6 max-w-4xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-8 text-center border-b pb-4">
                Ejercicio 3
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div id="caja-nativa" className="border-2 border-blue-500 rounded p-6 shadow-md transition-colors duration-300">
                    <h2 className="text-xl font-bold text-blue-700 mb-4">1. Método Nativo (DOM)</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Lógica implementada dentro de <code>useEffect</code> con <code>addEventListener</code>.
                    </p>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Evento Ratón (mouseenter):</p>
                        <button
                            id="btn-nativo"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Pasa el ratón aquí
                        </button>
                        <p className="text-xs text-gray-400 mt-1">
                            (Debería cambiar el color de fondo de esta caja)
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Evento Formulario (input):</p>
                        <input
                            type="text"
                            id="input-nativo"
                            placeholder="Escribe algo..."
                            className="border border-gray-300 p-2 w-full rounded focus:outline-blue-500"
                        />
                        <p className="mt-2 text-gray-700">
                            Resultado: <span id="resultado-texto-nativo" className="font-mono font-bold text-blue-600"></span>
                        </p>
                    </div>
                </div>

                <div className={`border-2 border-purple-500 rounded p-6 shadow-md transition-colors duration-300 ${reactBg}`}>
                    <h2 className="text-xl font-bold text-purple-700 mb-4">2. Método React</h2>
                    <p className="text-sm text-gray-500 mb-4">
                        Lógica implementada con <code>useState</code> y props de eventos (<code>onMouseEnter</code>, <code>onChange</code>).
                    </p>

                    <div className="mb-6">
                        <p className="font-semibold mb-1">Evento Ratón (onMouseEnter):</p>
                        <button
                            onMouseEnter={handleReactMouseEnter}
                            onMouseLeave={handleReactMouseLeave}
                            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                        >
                            Pasa el ratón aquí
                        </button>
                        <p className="text-xs text-gray-400 mt-1">
                            (Debería cambiar el color de fondo de esta caja)
                        </p>
                    </div>

                    <div>
                        <p className="font-semibold mb-1">Evento Formulario (onChange):</p>
                        <input
                            type="text"
                            placeholder="Escribe algo..."
                            className="border border-gray-300 p-2 w-full rounded focus:outline-purple-500"
                            onChange={handleReactInput}
                            value={reactText}
                        />
                        <p className="mt-2 text-gray-700">
                            Resultado: <span className="font-mono font-bold text-purple-600">{reactText}</span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ejercicio3;