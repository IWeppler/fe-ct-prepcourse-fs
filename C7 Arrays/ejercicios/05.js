function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.unshift(elemento);
  return array;
}

// código de prueba
console.log(agregarItemAlComienzoDelArray([5, 12, 8, 130, 44], 10)); // [10, 5, 12, 8, 130, 44]


module.exports = agregarItemAlComienzoDelArray;
