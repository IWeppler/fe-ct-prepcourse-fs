function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   const suma = arrayOfNumbers.reduce((acc, elemento) => {
      return acc + elemento // Aquí retornamos la suma al acumulador
   }, 0);
   cb(suma); // Pasamos la suma al callback
}

module.exports = sumarArray;
