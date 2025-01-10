function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  return palabras.join(" ");
}


console.log(dePalabrasAFrase(['Hello', 'world!'])); // Resultado esperado: "Hello world!"
console.log(dePalabrasAFrase(['JavaScript', 'es', 'genial'])); // Resultado esperado: "JavaScript es genial"
console.log(dePalabrasAFrase(['Henry', 'es', 'el', 'mejor'])); // Resultado esperado: "Henry es el mejor"


// Usa reduce para concatenar las palabras con un espacio
// return palabras.reduce((frase, palabra) => frase + ' ' + palabra);

module.exports = dePalabrasAFrase;