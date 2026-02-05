import React, { useEffect } from 'react';

const Ejercicio4 = () => {

    useEffect(() => {
        const contenedorMalo = document.getElementById('zona-obsoleta');

        if (contenedorMalo) {
            contenedorMalo.innerHTML = `
        <h4 style="color: red;">Elemento inyectado con innerHTML</h4>
        <p id="texto-malo">Texto original</p>
        <button id="btn-malo" style="border: 1px solid red; padding: 5px;">Botón Antiguo (.onclick)</button>
      `;

            const textoMalo = document.getElementById('texto-malo');
            if (textoMalo) {
                textoMalo.innerText = "Texto modificado usando innerText (Provoca Reflow)";
            }

            const btnMalo = document.getElementById('btn-malo');
            if (btnMalo) {
                btnMalo.onclick = function() {
                    alert('Evento disparado con .onclick (Antiguo)');
                };

            }
        }

        const contenedorBueno = document.getElementById('zona-actualizada');

        if (contenedorBueno) {

            const tituloBueno = document.createElement('h4');
            const parrafoBueno = document.createElement('p');
            const btnBueno = document.createElement('button');

            tituloBueno.textContent = "Elemento creado con createElement";
            tituloBueno.className = "text-green-700 font-bold";

            parrafoBueno.textContent = "Texto insertado usando textContent (Estándar y Rápido)";

            btnBueno.textContent = "Botón Moderno (addEventListener)";
            btnBueno.className = "border border-green-600 px-2 py-1 bg-green-50 rounded text-green-800 hover:bg-green-100 transition";

            btnBueno.addEventListener('click', () => {
                alert('Evento disparado con addEventListener (Estándar)');
            });

            btnBueno.addEventListener('click', () => {
                console.log('Segundo listener ejecutado correctamente.');
            });

            contenedorBueno.appendChild(tituloBueno);
            contenedorBueno.appendChild(parrafoBueno);
            contenedorBueno.appendChild(btnBueno);
        }

    }, []);

    return (
        <div className="p-8 max-w-4xl mx-auto font-sans">
            <h1 className="text-2xl font-bold mb-6 text-center">
                Ejercicio 4
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="border-2 border-red-300 bg-red-50 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-red-800 mb-2 border-b border-red-200 pb-2">
                        Sección "Obsoleta"
                    </h2>
                    <ul className="text-sm text-red-700 mb-4 list-disc pl-5 space-y-1">
                        <li>Uso de <code>innerHTML</code> (Inseguro).</li>
                        <li>Uso de <code>innerText</code> (No estándar/Lento).</li>
                        <li>Eventos mediante propiedad <code>.onclick</code>.</li>
                    </ul>

                    <div id="zona-obsoleta" className="space-y-3"></div>
                </div>

                <div className="border-2 border-green-300 bg-green-50 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-green-800 mb-2 border-b border-green-200 pb-2">
                        Sección Actualizada
                    </h2>
                    <ul className="text-sm text-green-700 mb-4 list-disc pl-5 space-y-1">
                        <li>Uso de <code>createElement</code> y <code>appendChild</code>.</li>
                        <li>Uso de <code>textContent</code> (Estándar W3C).</li>
                        <li>Eventos mediante <code>addEventListener</code>.</li>
                    </ul>

                    <div id="zona-actualizada" className="space-y-3"></div>
                </div>

            </div>
        </div>
    );
};

export default Ejercicio4;