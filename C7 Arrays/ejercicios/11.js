function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  return array.map((elemento) => {
    return elemento * 2;
  });
}
// Explicación:
// Recorremos el array con map y multiplicamos cada elemento por 2.
// map() devuelve un nuevo array con los elementos modificados.
// En este caso, cada elemento multiplicado por 2.

// código de prueba
console.log(duplicarElementos([1, 2, 3])); // [2, 4, 6]
console.log(duplicarElementos([5, 7, 9])); // [10, 14, 18]
console.log(duplicarElementos([2, 2, 2])); // [4, 4, 4]


/* Otra forma de resolverlo:
function duplicarElementos(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(array[i] * 2);
  }
  return resultado;
*/


module.exports = duplicarElementos;