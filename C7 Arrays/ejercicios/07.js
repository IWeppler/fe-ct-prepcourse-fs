function ordenarArray(array) {
  // Ordena los elementos del array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    }
    return 0;
  });
}

// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. Ejemplo:

// const array1 = [1, 30, 4, 21, 100];
// console.log(array1.sort());
// expected output: Array [1, 100, 21, 30, 4]

// const array2 = [1, 30, 4, 21, 100];
// console.log(array2.sort((a, b) => a - b));
// // expected output: Array [1, 4, 21, 30, 100]

// const array3 = [1, 30, 4, 21, 100];
// console.log(array3.sort((a, b) => b - a));
// // expected output: Array [100, 30, 21, 4, 1]

module.exports = ordenarArray;
