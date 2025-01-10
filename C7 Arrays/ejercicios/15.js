function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let mayor = 0;
  for (i = 1; i < array.length; i++) {
    if (array[i] > array[mayor]) {
      mayor = i; // Actualizamos el índice si encontramos un número mayor
    }
  }
  return mayor;
}

// código de prueba
console.log(encontrarIndiceMayor([1, 2, 3])); // 2
console.log(encontrarIndiceMayor([1, 2, 3, 10, 5])); // 3
console.log(encontrarIndiceMayor([1, 2, 10, 3, 5])); // 2

// TIP: Utiliza el método reduce para recorrer el array y encontrar el índice del número más grande. Luego, solo necesitas devolver el índice.
// TIP: Puedes utilizar el método Math.max() para encontrar el número más grande de un array.

/*
1- Crear una variable que guarde el valor más grande del array.
2- Crear una variable que guarde el índice del valor más grande del array.
3- Recorrer el array con un ciclo for.
4- En cada iteración, comparar el valor actual con el valor más grande.
5- Si el valor actual es mayor que el valor más grande, actualizar el valor más grande y el índice.
6- Devolver el índice del valor más grande.

Otras soluciones:
2. Utilizando el método reduce:
let mayor = Math.max(...array);
  return array.indexOf(mayor);


3. Utilizando el método reduce con un ciclo for:
function encontrarIndiceMayor(array) {
  let mayor = Math.max(...array);
  let indice = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === mayor) {
      indice = i;
    }
  }

  return indice;
}
*/

module.exports = encontrarIndiceMayor;
