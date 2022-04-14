let interes12Cuotas = 0.20;
let interes6Cuotas = 0.15;
let interes3Cuotas = 0.10;


const cuotas3 = (valor, interes3Cuotas) => valor = (valor + (valor * interes3Cuotas))/3;
const cuotas6 = (valor, interes6Cuotas) => valor = (valor + (valor * interes6Cuotas))/6;
const cuotas12 = (valor, interes12Cuotas) => valor = (valor + (valor * interes12Cuotas))/12;

let valor = parseFloat(prompt("Ingrese valor a calcular"))


console.log(`El valor en 3 cuotas es: ${cuotas3(valor, interes3Cuotas)}`);
console.log(`El valor en 6 cuotas es: ${cuotas6(valor, interes6Cuotas)}`);
console.log(`El valor en 12 cuotas es: ${cuotas12(valor, interes12Cuotas)}`);