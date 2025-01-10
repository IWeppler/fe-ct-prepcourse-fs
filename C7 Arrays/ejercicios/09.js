function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   return array[Math.floor(Math.random() * array.length)];
}


// código de prueba
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5])); // 3
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5])); // 5
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5])); // 1
console.log(obtenerElementoAleatorio([1, 2, 3, 4, 5])); // 5

// Para obtener un elemento aleatorio de un arreglo, se puede usar Math.floor(Math.random() * array.length).
// Math.floor(Math.random() * array.length) devuelve un número entero entre 0 y la longitud del arreglo array.
// array[Math.floor(Math.random() * array.length)] devuelve un elemento aleatorio del arreglo array.


module.exports = obtenerElementoAleatorio;
