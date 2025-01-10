function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      if (array[i] === num) {
         return i;
      }
   }
   return -1;
}

// código de prueba
console.log(encontrarElemento(12, [5, 12, 8, 130, 44])); // En el primer caso, el número 12 se encuentra en el índice 1 del array.
console.log(encontrarElemento(1, [5, 12, 8, 130, 44])); //  En el segundo caso, el número 1 no se encuentra en el array.
console.log(encontrarElemento(8, [5, 12, 8, 130, 44])); //  En el tercer caso, el número 8 se encuentra en el índice 2 del array.

// explicacion: 
// recorremos el array con un for y comparamos si el numero que pasamos por parametro es igual a alguno de los elementos del array, 
// si es asi retornamos el indice en el que se encuentra, si no se encuentra retornamos -1.
module.exports = encontrarElemento;
