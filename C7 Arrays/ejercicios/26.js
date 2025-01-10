function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let resultado = undefined;
  for(let i = 0;  i < secuencia.length; i++) {
  if (secuencia[i] % n === 0) {
    resultado = secuencia[i];
    break;
  }
}
  return resultado;
}

console.log(encontrarPrimerMultiploDeN( 3, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(encontrarPrimerMultiploDeN(3, [1, 4, 5, 6, 7, 9])); // Resultado esperado: 6
console.log(encontrarPrimerMultiploDeN(5, [2, 3, 7, 9]));       // Resultado esperado: null
console.log(encontrarPrimerMultiploDeN(2, [10, 3, 7, 9]));      // Resultado esperado: 10

module.exports = encontrarPrimerMultiploDeN;