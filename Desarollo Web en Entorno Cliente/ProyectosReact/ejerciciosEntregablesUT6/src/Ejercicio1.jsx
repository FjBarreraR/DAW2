import React, { useEffect, useState } from 'react';

const ejercicio1 = () => {
    const [analisis, setAnalisis] = useState([]);

    useEffect(() => {

        const nodoRaiz = document.getElementById('root-ejercicio');

        const nodoPadre = document.getElementById('seccion-padre');
        const nodoHijo = document.getElementById('parrafo-hijo');

        const nodoTexto = nodoHijo ? nodoHijo.firstChild : null;

        const nodosAAnalizar = [
            { etiqueta: 'Nodo Raíz (Div)', nodo: nodoRaiz },
            { etiqueta: 'Nodo Padre (Section)', nodo: nodoPadre },
            { etiqueta: 'Nodo Hijo (P)', nodo: nodoHijo },
            { etiqueta: 'Nodo de Texto (Dentro del P)', nodo: nodoTexto }
        ];

        const resultados = nodosAAnalizar.map((item) => {
            if (!item.nodo) return null;

            return {
                descripcion: item.etiqueta,
                nodeType: item.nodo.nodeType,
                nodeName: item.nodo.nodeName,
                textContent: item.nodo.textContent
            };
        }).filter(Boolean);

        setAnalisis(resultados);

    }, []);

    return (
        <div id="root-ejercicio" className="p-5 font-sans">

            <header className="bg-blue-600 text-white p-4 mb-4 rounded">
                <h1 className="text-2xl font-bold">Ejercicio 1</h1>
            </header>

            <main className="border p-4 bg-gray-50">
                <section id="seccion-padre" className="border-2 border-dashed border-blue-400 p-4 m-2">
                    <h2 className="text-xl mb-2">Sección Padre</h2>

                    <img
                        src="https://via.placeholder.com/150"
                        alt="Ejemplo visual"
                        className="mb-4 rounded shadow"
                    />

                    <p id="parrafo-hijo" className="text-gray-800 bg-white p-2 shadow-sm">
                        Este es un nodo de texto dentro de un párrafo hijo.
                    </p>
                </section>
            </main>

            <hr className="my-8 border-gray-300" />

            <section>
                <h3 className="text-xl font-bold mb-4">Resultados del Script de Análisis:</h3>
                <table className="min-w-full bg-white border border-gray-300 shadow-md">
                    <thead className="bg-gray-100">
                    <tr>
                        <th className="p-3 border">Elemento Recorrido</th>
                        <th className="p-3 border">nodeType (Tipo)</th>
                        <th className="p-3 border">nodeName (Nombre)</th>
                        <th className="p-3 border">textContent (Propiedad Relevante)</th>
                    </tr>
                    </thead>
                    <tbody>
                    {analisis.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="p-3 border font-medium">{item.descripcion}</td>
                            <td className="p-3 border text-center">{item.nodeType}</td>
                            <td className="p-3 border text-center font-mono text-blue-600">{item.nodeName}</td>
                            <td className="p-3 border italic text-gray-600">
                                {item.textContent.length > 50
                                    ? item.textContent.substring(0, 50) + '...'
                                    : item.textContent}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div className="mt-4 text-sm text-gray-600 bg-yellow-50 p-3 rounded border border-yellow-200">
                    <strong>Nota:</strong>
                    <ul className="list-disc ml-5 mt-1">
                        <li><strong>nodeType 1:</strong> ELEMENT_NODE (Etiquetas HTML como div, p, section).</li>
                        <li><strong>nodeType 3:</strong> TEXT_NODE (El texto real dentro de las etiquetas).</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ejercicio1;