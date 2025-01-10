function sumarHastaNConBreak(n) {
  // La función recibe un numero n por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Si la suma supera a 100, detén el bucle usando break.
  // Tu código:
let suma = 0;
 for (let i = 0; i <= n; i++) {
   suma +=i;
   if (suma > 100) break;
  }
return suma;
}

//La logica que estaba usando estaba bien, pero el problema es que en cada bucle estaba redifiniendo suma y no realizaba la suma del loop de los numeros
// yo estaba haciendo suma = n + i => el resultado de esto es sumar el ultimo numero pasado por argumento mas el largo de la iteracion es decir:
//en el primer console, que tiene 5 de argumento y 5 el largo = 10
//en el segundo console, que tiene 7 de argumento y 7 el largo = 14
// NO ACUMULABA COMO ESTA HACIENDO suma += i, porque vas acumulando el valor de i en la variable suma


console.log(sumarHastaNConBreak(5)); //5
// 1 + 2 + 3 + 4 + 5  =  15
console.log(sumarHastaNConBreak(7)); //28
// 1 + 2 + 3 + 4 + 5 + 6 + 7  =  28
console.log(sumarHastaNConBreak(10)); //55
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 =  55
console.log(sumarHastaNConBreak(15)); //105
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 (con +14 ya llega a 105 por esto + 15 no se suma) + 15 = 105
console.log(sumarHastaNConBreak(20)); //105

module.exports = sumarHastaNConBreak;