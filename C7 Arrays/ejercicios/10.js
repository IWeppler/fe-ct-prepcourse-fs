function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  return array.find((element) => element.length >= 5);
}

// código de prueba
console.log(obtenerPrimerStringLargo(['caracter', 'mundo', 'como', 'estas'])); // 'mundo'
console.log(obtenerPrimerStringLargo(['hola', 'mundo', 'omniverso'])); // 'mundo'
console.log(obtenerPrimerStringLargo(['hola', 'mundo', 'estás', 'increible'])); // 'mundo'
console.log(obtenerPrimerStringLargo(['bariloche', 'mundo', 'estás', 'bien', 'gracias'])); // 'mundo'


// Para resolverlo, podemos utilizar un ciclo for para recorrer el array y, por cada string, verificar si su longitud es mayor a 5. 
// Si encontramos un string que cumpla con esa condición, retornamos ese string. Si no encontramos ningún string que cumpla con la condición, retornamos undefined.


module.exports = obtenerPrimerStringLargo;
