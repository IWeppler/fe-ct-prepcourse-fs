function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  return array.filter((num) => num % 2 === 0);
}

//Test
console.log(filtrarNumerosPares([1, 2, 3, 4, 5])); // [2, 4]
console.log(filtrarNumerosPares([1, 3, 5])); // []

// Solución: Utilizamos el método filter para recorrer el array y devolver solo los números pares. 
// Para saber si un número es par, utilizamos el operador módulo (%) para dividirlo por 2 y ver si el resto es 0. Si es así, lo agregamos al nuevo array.

// Nota: El método filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

module.exports = filtrarNumerosPares;