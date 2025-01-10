function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const suma = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento);
  return suma / resultadosTest.length;
}

// El siguiente código debería retornar 7
console.log(promedioResultadosTest([10, 5, 7, 8, 3]));

// El siguiente código debería retornar 10
console.log(promedioResultadosTest([10, 10, 10, 10, 10]));

/*

 Pasos:
 1. Definimos la función promedioResultadosTest que recibe un array de números resultadosTest.
 2. Utilizamos el método reduce sobre resultadosTest, que recibe una función como argumento.
 3. La función que pasamos al método reduce recibe dos argumentos: el acumulador y el elemento actual del array.
 4. En cada iteración, sumamos el acumulador con el elemento actual y retornamos el resultado.
 5. Finalmente, retornamos el resultado de la suma de todos los elementos del array dividido por la cantidad de elementos del array.

 for:
 function promedioResultadosTest(resultadosTest) {
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
     suma = suma + resultadosTest[i];
   }
   return suma / resultadosTest.length;
 }

*/
module.exports = promedioResultadosTest;
