import { useState } from "react";

function Ejercicio3() {
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        edad: "",
    });

    const [errors, setErrors] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validarNombre = (nombre) => {
        if (!nombre.trim()) return "El nombre es obligatorio";

        const excepciones = ["de", "del", "la", "las", "los"];

        const palabras = nombre.split(" ");

        for (let palabra of palabras) {
            if (excepciones.includes(palabra)) {
                if (palabra !== palabra.toLowerCase()) {
                    return "Las palabras 'de, del, la, las, los' deben ir en minúsculas";
                }
            } else {
                if (!/^[A-Z][a-z]+$/.test(palabra)) {
                    return "Cada palabra debe empezar en mayúscula y seguir en minúsculas";
                }
            }
        }
        return "";
    };

    const validarEmail = (email) => {
        if (!email.trim()) return "El email es obligatorio";

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email)) {
            return "Formato de email incorrecto";
        }
        return "";
    };

    const validarEdad = (edad) => {
        if (!edad) return "La edad es obligatoria";

        const numero = Number(edad);
        if (isNaN(numero) || numero <= 0 || numero >= 100) {
            return "La edad debe ser un número positivo menor que 100";
        }
        return "";
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleBlur = (e) => {
        let error = "";

        if (e.target.name === "nombre") {
            error = validarNombre(form.nombre);
        } else if (e.target.name === "email") {
            error = validarEmail(form.email);
        } else if (e.target.name === "edad") {
            error = validarEdad(form.edad);
        }

        setErrors({ ...errors, [e.target.name]: error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuevosErrores = {
            nombre: validarNombre(form.nombre),
            email: validarEmail(form.email),
            edad: validarEdad(form.edad),
        };

        setErrors(nuevosErrores);

        const hayErrores = Object.values(nuevosErrores).some(
            (error) => error !== ""
        );

        if (!hayErrores) {
            setEnviado(true);
        } else {
            setEnviado(false);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "400px" }}>
            <h2>Ejercicio 3</h2>

            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Nombre</label><br />
                    <input
                        type="text"
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                            border: errors.nombre ? "2px solid red" : "1px solid #ccc",
                        }}
                    />
                    {errors.nombre && (
                        <p style={{ color: "red" }}>{errors.nombre}</p>
                    )}
                </div>

                <br />

                <div>
                    <label>Email</label><br />
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                            border: errors.email ? "2px solid red" : "1px solid #ccc",
                        }}
                    />
                    {errors.email && (
                        <p style={{ color: "red" }}>{errors.email}</p>
                    )}
                </div>

                <br />

                <div>
                    <label>Edad</label><br />
                    <input
                        type="number"
                        name="edad"
                        value={form.edad}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                            border: errors.edad ? "2px solid red" : "1px solid #ccc",
                        }}
                    />
                    {errors.edad && (
                        <p style={{ color: "red" }}>{errors.edad}</p>
                    )}
                </div>

                <br />

                <button type="submit">Enviar</button>
            </form>

            {enviado && (
                <div
                    style={{
                        marginTop: "20px",
                        padding: "15px",
                        border: "2px solid green",
                        backgroundColor: "#f0fff0",
                        borderRadius: "8px",
                        color: "black",
                    }}
                >
                    <h3>Resumen de datos</h3>
                    <p><b>Nombre:</b> {form.nombre}</p>
                    <p><b>Email:</b> {form.email}</p>
                    <p><b>Edad:</b> {form.edad}</p>
                </div>
            )}
        </div>
    );
}

export default Ejercicio3;