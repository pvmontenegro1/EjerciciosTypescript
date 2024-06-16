function dividir(a, b) {
    return a / b; // Devuelve la suma de los dos números.
}
var result = dividir(10, 2);
console.log("La divisi\u00F3n de los dos numeros es:".concat(result));
function restarDecimales(decimales) {
    return decimales.filter(function (numero) { return numero % 2 === 0; }).reduce(function (a, b) { return a - b; }, 0);
}
var decimales = [13.4, 20.4, 3, 4, 5, 60.4, 7, 8, 90.3, 1000]; // Numeros Pares:-4-8-1000=-1012
var resp = restarDecimales(decimales); //
console.log("La resta de numeros es : ".concat(resp));
