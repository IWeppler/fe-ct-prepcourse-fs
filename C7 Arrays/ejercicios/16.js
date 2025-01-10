function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  return array.map((element, index) => {
    return element * index;
  });
}

/*
1- Utilizar el método map para recorrer el array.
2- En cada iteración, multiplicar el elemento por su índice.
3- Devolver el nuevo array con los resultados.

Otras soluciones:
let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * i);
  }
  return newArray;
*/

//Test
console.log(multiplicarElementosPorIndice([1, 2, 3, 4, 5])); // [0, 2, 6, 12, 20]
console.log(multiplicarElementosPorIndice([5, 10, 15, 20])); // [0, 10, 30, 60]


module.exports = multiplicarElementosPorIndice;
