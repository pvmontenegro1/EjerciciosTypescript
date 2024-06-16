function dividir(a: number, b: number): number {
    return a / b; // Devuelve la suma de los dos números.
}
const result=dividir(10,2);
console.log(`La división de los dos numeros es:${result}`);

function restarDecimales(decimales: number[]): number {
    return decimales.filter(numero => numero % 2 === 0).reduce((a, b) => a - b, 0);
}

let decimales = [13.4, 20.4, 3, 4, 5, 60.4, 7, 8, 90.3, 1000]; // Numeros Pares:-4-8-1000=-1012
let resp = restarDecimales(decimales); //

console.log(`La resta de numeros es : ${resp}`);