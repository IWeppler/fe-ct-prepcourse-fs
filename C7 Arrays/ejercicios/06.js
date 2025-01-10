function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let arrayInvertido = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
  }
  return arrayInvertido;
}

// código de prueba
console.log(invertirArray([5, 12, 8, 130, 44])); // [44, 130, 8, 12, 5]

module.exports = invertirArray;