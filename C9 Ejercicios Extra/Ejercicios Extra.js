/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]]) {
      obj[string[i]]++; // si el caracter ya existe en el objeto, le suma 1
    } else {
      obj[string[i]] = 1; // si no existe, lo agrega al objeto con valor 1
    }
  }

  let sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      // .sort ordena las claves del objeto en orden alf
      sortedObj[key] = obj[key]; // .forEach recorre cada clave y la agrega al objeto sortedObj
    });
  return sortedObj;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let mayus = "";
  let minus = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      // si el caracter es igual a su version en mayuscula
      mayus += string[i]; // lo agrega a la variable mayus
    } else {
      // si no
      minus += string[i]; // lo agrega a la variable minus
    }
  }
  return mayus + minus; // retorna la concatenacion de mayus y minus
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let palabras = frase.split(" "); // ['The', 'Henry', 'Challenge', 'is', 'close!']
  let palabrasInvertidas = palabras.map((word) => {
    const palabraNormal = word.replace(/[^\w\s]/g, '');
    return word.split("").reverse().join("");
  }); // .map, recorre cada palabra, y en cada palabra aplica el split, reverse y join: ['ehT', 'yrneH', 'egnellahC', 'si', '!esolc']
  return palabrasInvertidas.join(" "); // .join una vez mas une el array en una sola oracion/frase: 'ehT yrneH egnellahC si !esolc'
}

console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let num = numero.toString(); // convierte el numero a string porque no se puede invertir un numero
  let numInv = num.split("").reverse().join(""); // invierte el string
  if (num === numInv) {
    // si el string es igual a su version invertida
    return "Es capicua"; // retorna 'Es capicua'
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  // Convertimos el string en un arreglo de caracteres para manipularlo fácilmente
  let resultado = string
    .split("") // Divide el string en un array de caracteres
    .filter(
      (caracter) => caracter !== "a" && caracter !== "b" && caracter !== "c"
    ) // Filtra las letras "a", "b" y "c"
    .join(""); // Une el array nuevamente en un string

  return resultado; // Retorna el string sin "a", "b" y "c"
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  let orderedArray = arrayOfStrings.sort((a, b) => a.length - b.length);
  return orderedArray;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let comunes = []; // Arreglo para almacenar los elementos en común

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        // Si el elemento de array1 es igual al elemento de array2
        if (!comunes.includes(array1[i])) {
          // Verificar si el elemento ya está en el arreglo 'comunes'
          comunes.push(array1[i]); // Agregar al arreglo de elementos comunes
        }
      }
    }
  }

  return comunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
