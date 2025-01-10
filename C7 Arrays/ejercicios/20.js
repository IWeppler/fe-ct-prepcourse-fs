function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[0]) return false;
  }
  return true;
}

//test:
console.log(todosIguales([1, 1, 1, 1])); // true
console.log(todosIguales([1, 1, 1, 2])); // false
console.log(todosIguales([1, 1, 1, 2, 1])); // false

// El ejercicio consiste en recorrer el arreglo y comparar si todos los elementos son iguales.
// Si todos los elementos son iguales, retornar true. Caso contrario, retornar false.
// Puedes usar un ciclo for para recorrer el arreglo y comparar los elementos.


module.exports = todosIguales;

