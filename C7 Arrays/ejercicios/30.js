function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < i; j++) {
      // Si el número en la posición i es igual al número en la posición j, es repetido
      if (numeros[i] === numeros[j]) {
        return numeros[i]; // Retorna el primer número repetido
      }
    }
  }
  return undefined; // Si no encontramos un número repetido, devolvemos null
}

console.log(encontrarElementoRepetido([1, 2, 3, 3, 4, 5])); // Resultado esperado: 3
console.log(encontrarElementoRepetido([1, 2, 3, 4, 5])); // Resultado esperado: null
console.log(encontrarElementoRepetido([5, 6, 5, 7])); // Resultado esperado: 5

module.exports = encontrarElementoRepetido;

/*
let encontrados = [];

for (let i = 0; i < numeros.length; i++) {
  // Si el número ya está en el array de encontrados, es un número repetido
  if (encontrados.includes(numeros[i])) {
    return numeros[i];  // Retornamos el primer número repetido
  }
     // Si no está, lo agregamos al array de encontrados
     encontrados.push(numeros[i]);
    }
  return null;
  */
