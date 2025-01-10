function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  return arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

//cuando es una funcion de una sola linea se puede evitar el return y las llaves

// El siguiente código debería retornar 10
console.log(agregarNumeros([1, 2, 3, 4]));

// El siguiente código debería retornar 24
console.log(agregarNumeros([1, 2, 3, 4, 7, 7]));

// El siguiente código debería retornar 12
console.log(agregarNumeros([1, 2, 3, 6]));

/*
El objetivo del ejercicio es sumar todos los elementos de un array de números. Para ello, podemos utilizar el método reduce de los arrays. 
Este método recibe una función como argumento que se ejecutará por cada elemento del array, y un valor inicial que se irá acumulando en cada iteración.

Pasos:
1. Definimos la función agregarNumeros que recibe un array de números arrayOfNums.
2. Utilizamos el método reduce sobre arrayOfNums, que recibe una función como argumento.
3. La función que pasamos al método reduce recibe dos argumentos: el acumulador y el elemento actual del array.
4. En cada iteración, sumamos el acumulador con el elemento actual y retornamos el resultado.
5. Finalmente, retornamos el resultado de la suma de todos los elementos del array.


Otra forma de hacerlo:

  let suma = 0;
  for (let i = 0; i < arrayOfNums.length; i++) {
    suma += arrayOfNums[i];
  }
  return suma;

*/

module.exports = agregarNumeros;
