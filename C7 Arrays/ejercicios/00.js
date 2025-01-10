// 1. funcion declarada => devuelve division
// function division(a, b) {
    // return a / b;
// };
// console.log(division(3,3))

// 2. funcion expresada => cuadrado de un numero
// const cuadrado = function(a) {
//     return a * a;
// }
//console.log(cuadrado(5))

// 3. funcion flecha => mayor de dos num
//const mayor = (a, b) => Math.max(a, b);
//console.log(mayor(50, 30));



let intervalo = setInterval(() => {
    console.log('intervalo')
}, 500);

setTimeout(() => {
    clearInterval(intervalo);
    console.log("Termino el intervalo") 
}, 5000);
