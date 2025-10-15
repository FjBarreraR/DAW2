function ejercicio1(){
    // Coger la cadena del HTML
    let fraseUsuario = document.getElementById('frase').value.trim();
    
    // Verificar la longitud de la cadena
    const contarPalabras = fraseUsuario.split(/\s+/);
    if (contarPalabras.length < 5) {
        alert("La frase debe tener 5 palabras como minimo");
        return;
    }

    // Quitar los espacios 
    let fraseUsuarioSinEspacio = fraseUsuario.replace(/\s/g, '');

    // Sustituir las vocales por "*"
    const vocales = /[aeiouáéíóú]/gi;
    const vocalesReemplazadas = fraseUsuario.replace(vocales, "*");

    // Sustituir cada elemento par por "_"
    let contador = 0;
    let fraseUsuarioParReemplazados = "";
    for (let i = 0; i < fraseUsuario.length; i++){
        const caracter = fraseUsuario[i];

        if(caracter !== " "){
            contador++

            if (contador % 2 === 0) {
                fraseUsuarioParReemplazados += "_";
            } else {
                fraseUsuarioParReemplazados += caracter;
            }
        } else {
            fraseUsuarioParReemplazados += " "
        }
    }

    // Imprimirlo por consola
    console.log("La cadena tiene " + fraseUsuarioSinEspacio.length + " caracteres");
    console.log(vocalesReemplazadas);
    console.log(fraseUsuarioParReemplazados);
}       

function ejercicio2(){
    // Coger la cadena del HTML
    const palabras = document.getElementById('palabras').value.trim();
    const palabrasBien = palabras.split(/\s+/);

    // Comprobar que son 7 palabras
    if (palabrasBien.length !== 7) {
        alert("Tienes que escribir 7 palabras como minimo");
        return;
    }

    // Filtramos las palabras que tengan mas de 4 letras
    let palabrasFiltradas = palabrasBien.filter(p => p.length > 4);
    
    // Ordenamos alfabeticamente ignorando mayusculas y minusculas
    palabrasFiltradas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'es', { sensitivity: 'base' }));
    
    // Mostramos las palabras ordenadas en el HTML
    document.getElementById("palabrasOrdenadas").textContent = palabrasFiltradas.join(", ");

    // Pedir una palabra adicional
    const palabraNueva = prompt("Introduce una palabra adicional:");

    // Verificar si existe en el listado actual y sino agregarla
    if (palabraNueva) {
        const existe = palabrasFiltradas.some(p => p.toLowerCase() === palabraNueva.toLowerCase());

        if (existe) {
            console.log("La palabra si esta en el listado");
        } else {
            palabrasFiltradas.push(palabraNueva);
            palabrasFiltradas.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase(), 'es', { sensitivity: 'base' }));
            document.getElementById("palabrasOrdenadas").textContent = palabrasFiltradas.join(", ");
        }
    } 
}

// EJERCICIO 3
// VARIABLES DE LOS ALUMNOS CON SUS NOTAS
let alumnos = new Map();
alumnos.set("Angela", 10);
alumnos.set("Fran", 10);
alumnos.set("Ivan", 8);
alumnos.set("Aaron", 4);
function ejercicio3() {
    // Mostramos los estudiantes
    console.log("=== Listado inicial de alumnos y notas ===");
    for (let nombre in alumnos) {
        console.log(`${nombre}: ${alumnos[nombre].toFixed(2)}`);
    }

    // Pedimos al usuario que introduzca su nombre
    let usuario = prompt("Introduce tu nombre de usuario:");

    // Normalizamos el formato (primera letra mayúscula, resto minúsculas)
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

    // Paso 3: Verificamos si está registrado
        if (alumnos.hasOwnProperty(nombre)) {
            alert(`${nombre} ya está registrado con una nota de ${alumnos[nombre].toFixed(2)}.`);
        } else {
            alert(`El estudiante ${nombre} no estaba registrado.`);

            // Pedimos una nota válida entre 0 y 10
            let nota;
            do {
                nota = parseFloat(prompt(`Introduce la nota de ${nombre} (0-10):`));
                if (isNaN(nota) || nota < 0 || nota > 10) {
                    alert("❌ Error: la nota debe estar entre 0 y 10.");
                }
            } while (isNaN(nota) || nota < 0 || nota > 10);

            alumnos[nombre] = parseFloat(nota.toFixed(2));
            alert(`${nombre} ha sido añadido con una nota de ${nota.toFixed(2)}.`);
        }

    // Paso 4: Calculamos la nota media
        let totalNotas = 0;
        let cantidad = 0;

        for (let nombre in alumnos) {
            totalNotas += alumnos[nombre];
            cantidad++;
        }

        let media = totalNotas / cantidad;
        console.info(`La nota media de la clase es: ${media.toFixed(2)}`);

    // Paso 5: Mostramos los nombres ordenados alfabéticamente
        let nombresOrdenados = Object.keys(alumnos).sort();

        console.log("=== Alumnos ordenados alfabéticamente ===");
        for (let n of nombresOrdenados) {
            console.log(`${n}: ${alumnos[n].toFixed(2)}`);
        }
}

let multiplos2 = new Set();
let multiplos3 = new Set();

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) multiplos2.add(i);
    if (i % 3 === 0) multiplos3.add(i);
}

// Mostramos mensaje en pantalla
alert("Mira el log para ver el resultado");

function ejercicio4(){
    // --- 1) Unión de ambos conjuntos ---
    let union = new Set([...multiplos2, ...multiplos3]);

// --- 2) Intersección de ambos conjuntos ---
    let interseccion = new Set([...multiplos2].filter(x => multiplos3.has(x)));

// --- 3) Diferencia del primero menos el segundo ---
    let diferencia1 = new Set([...multiplos2].filter(x => !multiplos3.has(x)));

// --- 4) Diferencia del segundo menos el primero ---
    let diferencia2 = new Set([...multiplos3].filter(x => !multiplos2.has(x)));

// --- 5) Exclusión (elementos que pertenecen a uno u otro, pero no a ambos) ---
    let exclusion = new Set([...union].filter(x => !interseccion.has(x)));

// --- Mostrar resultados en consola ---
    console.log("%c1) Unión:", "color: blue; font-weight: bold;");
    console.log([...union].sort((a, b) => a - b));

    console.log("%c2) Intersección:", "color: green; font-weight: bold;");
    console.log([...interseccion].sort((a, b) => a - b));

    console.log("%c3) Diferencia (múltiplos de 2 - múltiplos de 3):", "color: purple; font-weight: bold;");
    console.log([...diferencia1].sort((a, b) => a - b));

    console.log("%c4) Diferencia (múltiplos de 3 - múltiplos de 2):", "color: orange; font-weight: bold;");
    console.log([...diferencia2].sort((a, b) => a - b));

    console.log("%c5) Exclusión (solo en uno de los dos conjuntos):", "color: red; font-weight: bold;");
    console.log([...exclusion].sort((a, b) => a - b));
}


let numerosValidos = false;
let numeros = [];

function ejercicio5(){
    // Pedimos al usuario una serie de números separados por comas
    while (!numerosValidos) {
        let entrada = prompt("Introduce una serie de números separados por comas (ejemplo: 3,5,2,3,8):");

        if (!entrada) {
            alert("❌ No has introducido ningún valor. Intenta de nuevo.");
            continue;
        }

        // Convertimos la entrada en un array de números
        let partes = entrada.split(",").map(x => x.trim());
        numeros = partes.map(x => Number(x));

        // Verificamos si todos los valores son numéricos
        if (numeros.every(x => !isNaN(x))) {
            numerosValidos = true;
        } else {
            alert("❌ Error: todos los valores deben ser numéricos. Intenta de nuevo.");
        }
    }

// Calculamos los valores únicos (que aparecen solo una vez)
    let unicos = numeros.filter((num, _, arr) => arr.indexOf(num) === arr.lastIndexOf(num));

// Calculamos la media de los valores únicos
    let media = unicos.reduce((a, b) => a + b, 0) / unicos.length;

// Mostramos los resultados
    alert("Mira la consola para ver los resultados.");

    console.log("%c=== Resultados ===", "color: blue; font-weight: bold;");
    console.log("Valores introducidos:", numeros);
    console.log("Valores que aparecen solo una vez:", unicos);
    console.log(`Media de los valores únicos: ${media.toFixed(2)}`);
}

