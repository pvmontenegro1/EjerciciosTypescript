//Diferentes tipos de variables
var nombre = "Steven";
var edad = 40;
var esPar = true;
//variable any permite cualquier guardar cualquier valor
var var1 = 30;
var var2 = "Hola mundo";
var var3 = false;
//tipos personalizados (enums, tuples)
var Numero;
(function (Numero) {
    Numero[Numero["uno"] = 0] = "uno";
    Numero[Numero["dos"] = 1] = "dos";
    Numero[Numero["tres"] = 2] = "tres";
})(Numero || (Numero = {}));
var numero = Numero.uno;
//Tuples
var empleado = ["Joffre", 56];

console.log(nombre);
console.log(edad);
console.log(var1);
console.log(var2);
console.log(var3);
console.log(numero);
console.log(empleado);
