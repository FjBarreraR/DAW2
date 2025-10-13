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
alumnos.set("Ivan", 10);
alumnos.set("Aaron", 10);
function ejercicio3(){
    // Pedimos al usuario que introduzca su nombre
    const usuario = prompt("Introduce tu nombre de usuario:");

    // Comprobamos si esta registrado y sino lo agregamos
    document.getElementById("alumno1").textContent = "Nombre: " + Fran;
    document.getElementById("alumno2").textContent = "Nombre: " + Fran;
    document.getElementById("alumno3").textContent = "Nombre: " + Fran;
    document.getElementById("alumno4").textContent = "Nombre: " + Fran;
}