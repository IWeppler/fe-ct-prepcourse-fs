function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (!numeros || numeros.length === 0) {
    return null; // Devuelve null si el array es vacío o nulo
  }

  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] - numeros[i] !== 1) { // Verifica si la diferencia entre números consecutivos es 1
      return numeros[i] + 1; // Si no es 1, el número faltante es el siguiente al actual
    }
  }
  return null; // Devuelve null si no hay números faltantes
}


// Puedes iterar sobre el array y verificar si hay alguna diferencia mayor a 1 entre dos números consecutivos, lo cual indicaría que un número falta en esa posición.

// Test
console.log(encontrarNumeroFaltante([1, 3, 4, 5]));  // Resultado esperado: 2
console.log(encontrarNumeroFaltante([2, 3, 4, 5, 6]));  // Resultado esperado: null
console.log(encontrarNumeroFaltante([10, 12, 13, 14]));  // Resultado esperado: 11


module.exports = encontrarNumeroFaltante;