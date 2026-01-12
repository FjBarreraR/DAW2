function listaAlumnos() {
    const alumnos = ["Ángela", "Fran", "Chino", "Iván", "Sebas", "Aaron"];

    return (
        <div>
            <h1>Ejercicio 7</h1>
            <h3>Lista de Alumnos</h3>
            <ul>
                {alumnos.map((alumno, index) => (
                    <li key={index}>{alumno}</li>
                ))}
            </ul>
        </div>
    );
}

export default listaAlumnos;