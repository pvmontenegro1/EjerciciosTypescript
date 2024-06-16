class Persona {
    public nombre: string;
    public edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Buenas tardes mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona1 = new Persona('Guillermo', 30); // Se crea un objeto de la clase Persona

persona1.saludar();

class Empleado extends Persona {
    private salario: number;

    constructor(nombre: string, edad: number, salario: number) {
        super(nombre, edad);
        this.salario = salario;
    }

trabajar() {
console.log(`${this.nombre} está atendiendo a los clientes y su salario
     es ${this.salario}`);
}
}

let empleado1 = new Empleado('Pedro', 35, 2000);

empleado1.trabajar(); // Pedro está trabajando.