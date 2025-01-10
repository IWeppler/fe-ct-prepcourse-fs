function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.filter((elemento) => {
    return elemento > 10;
  }).length;

}

//Test
console.log(contarElementosMayoresA10([1, 2, 3, 11, 12, 13])); // 3
console.log(contarElementosMayoresA10([10, 2, 3, 4, 5])); // 0

// TIP: Utiliza el método filter para recorrer el array y devolver solo los números mayores a 10. Luego, solo necesitas devolver la longitud del nuevo array.


module.exports = contarElementosMayoresA10;
