import React from 'react';

const Ejercicio2 = () => {

    const handleGetElementById = () => {
        const titulo = document.getElementById('titulo-principal');

        if (titulo) {
            titulo.textContent = '¡Título Modificado por ID!';
            titulo.classList.add('bg-yellow-200', 'text-red-600', 'p-2');
        }
    };

    const handleGetByClassName = () => {
        const parrafos = document.getElementsByClassName('parrafo-comun');

        Array.from(parrafos).forEach((p, index) => {
            p.textContent = `Párrafo ${index + 1} actualizado (Clase detectada)`;
            p.classList.add('font-bold', 'text-blue-600', 'border-l-4', 'border-blue-600', 'pl-2');
        });
    };

    const handleQuerySelector = () => {
        const contenedor = document.querySelector('#contenedor-dinamico section');

        if (contenedor) {
            contenedor.classList.add('bg-green-50', 'border', 'border-green-400');

            const nuevoElemento = document.createElement('div');
            nuevoElemento.textContent = `Nuevo hijo añadido a las ${new Date().toLocaleTimeString()}`;
            nuevoElemento.className = 'mt-2 p-2 bg-white shadow-sm text-green-700 rounded';

            contenedor.appendChild(nuevoElemento);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-6 border-b pb-2">Ejercicio 2</h1>

            <div className="flex flex-wrap gap-4 mb-8 p-4 bg-gray-100 rounded-lg">
                <button
                    onClick={handleGetElementById}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition"
                >
                    1. Usar getElementById
                </button>

                <button
                    onClick={handleGetByClassName}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition"
                >
                    2. Usar getElementsByClassName
                </button>

                <button
                    onClick={handleQuerySelector}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
                >
                    3. Usar querySelector (Añadir Hijo)
                </button>
            </div>

            <main className="space-y-6">

                <section className="border p-4 rounded">
                    <h2 id="titulo-principal" className="text-xl transition-all duration-300">
                        Título Original (ID)
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">Este título cambiará con el botón 1.</p>
                </section>

                <section className="border p-4 rounded">
                    <h3 className="text-lg font-semibold mb-2">Grupo de Párrafos (Class)</h3>
                    <p className="parrafo-comun mb-2 transition-all">Soy el párrafo común número A.</p>
                    <p className="parrafo-comun mb-2 transition-all">Soy el párrafo común número B.</p>
                    <p className="parrafo-comun mb-2 transition-all">Soy el párrafo común número C.</p>
                </section>

                <div id="contenedor-dinamico">
                    <section className="border p-4 rounded min-h-[100px] transition-all">
                        <h3 className="text-lg font-semibold mb-2">Contenedor Dinámico (QuerySelector)</h3>
                        <p className="text-gray-500 text-sm">Pulsa el botón 3 para inyectar elementos aquí dentro.</p>
                    </section>
                </div>

            </main>
        </div>
    );
};

export default Ejercicio2;