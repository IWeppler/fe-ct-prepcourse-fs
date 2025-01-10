function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let array = [];
  let suma = num;

  for (let i = 0; i < 10; i++) {
    suma += 2;
    if (suma === i) { // Condición para interrumpir el bucle
      return "Se interrumpió la ejecución";
    }
    array.push(suma);
  }
  return array; // Mostramos el resultado
}

// test
console.log(breakStatement(5)); // [7, 9, 11, 13, 15, 17, 19, 21, 23, 25]
console.log(breakStatement(8)); // "Se interrumpió la ejecución"


// En este caso debemos utilizar un bucle for para recorrer los números del 0 al 10
// aumentando en 2 el número num recibido hasta un límite de 10 veces.
module.exports = breakStatement;