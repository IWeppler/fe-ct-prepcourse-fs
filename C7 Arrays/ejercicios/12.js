function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  return array.map((elemento) => {
      return elemento.toUpperCase();
  });
}

// código de prueba
console.log(convertirStringAMayusculas(['hola', 'como', 'estas'])); // ['HOLA', 'COMO', 'ESTAS']


/*
 El ejercicio consiste en convertir a mayúsculas todos los strings de un array y retornar el arreglo resultante. 
 Para resolverlo, podemos utilizar el método map() para recorrer el array y aplicar la función toUpperCase() a cada uno de los elementos.


 Otra forma de resolverlo:
function convertirStringAMayusculas(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string') {
      resultado.push(array[i].toUpperCase());
    } else {
      resultado.push(array[i]);
    }
  }
  return resultado;
}


Otra forma de resolverlo:
return array.map((string) => {
    if (typeof string === 'string') {
        return string.toUpperCase();  // Solo se aplica toUpperCase si el elemento es un string
    } else {
        return string;  // Si no es un string, lo retorna tal cual
    }
});
*/

module.exports = convertirStringAMayusculas;