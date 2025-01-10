function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   return list.sort((a, b) => {
      if (a[sortBy] > b[sortBy]){
         return -1; // Si a es mayor, colocamos a antes de b (descendente)
      } else if (a[sortBy] < b[sortBy]){ // si b > a, se devuelve 1, haceidno que b se coloque antes que a
         return 1;
      } else {
         return 0; // si los valores son iguales, no cambian su orden
      }
   });
}

module.exports = sort;
