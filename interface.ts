interface Usuario {
    id: string;
    nombre: string;
    email: string;
    age: number;
}

function informar(person: Usuario) {
    return {
        id: "ID: " + person.id,
        nombre: "Nombre: " + person.nombre,
        email: "Email: " + person.email,
        age: "Edad: " + person.age
    };
}

// Crear un objeto que cumpla con la interfaz Usuario
const usuarioEjemplo: Usuario = {
    id: "12345",
    nombre: "Pamela Montenegro",
    email: "pamela@example.com",
    age: 30
};

// Llamar a la función informar y mostrar el resultado en la consola
console.log(informar(usuarioEjemplo));
