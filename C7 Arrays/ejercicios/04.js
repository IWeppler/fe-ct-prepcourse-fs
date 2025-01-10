function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento);
  return array;
}

// código de prueba
console.log(agregarItemAlFinalDelArray([5, 12, 8, 130, 44], 10)); // [5, 12, 8, 130, 44, 10]

module.exports = agregarItemAlFinalDelArray;
