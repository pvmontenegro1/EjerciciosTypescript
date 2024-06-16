//Diferentes tipos de variables
let nombre: string ="Steven";
let edad: number=40;
let esPar: boolean =true;
//variable any permite cualquier guardar cualquier valor

let var1:any= 30;
let var2: any="Hola mundo";
let var3: any= false;

//tipos personalizados (enums, tuples)

enum Numero{
    uno,
    dos,
    tres
}
let numero: Numero=Numero.uno;
 //Tuples
 let empleado:[string, number]=["Joffre",56];
  console.log(nombre);
  console.log(edad);
  console.log(var1);
  
  console.log(var2);
  console.log(var3);
  console.log(numero);
  console.log(empleado);