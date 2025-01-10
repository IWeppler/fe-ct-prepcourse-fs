function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let contador = 0;
  for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 1) { // Si el número es impar...
      continue;
  }
  contador++;
  }
  return contador; // Devolvemos la cantidad total de pares.

}

//test
console.log(contarParesConContinue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5
console.log(contarParesConContinue([1, 3, 5, 7, 9])); // 0
console.log(contarParesConContinue([2, 4, 6, 8, 10])); // 5

// Agregar la solución al archivo

// El ejercicio pide contar la cantidad de números pares que hay en un array de números.
// Se debe evitar los impares utilizando continue.
// Para resolverlo, se puede iterar sobre el array y verificar si el número es par.

module.exports = contarParesConContinue;