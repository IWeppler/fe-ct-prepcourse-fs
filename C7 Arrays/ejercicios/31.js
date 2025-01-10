function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  return texto.split('').reverse().join('');
}

console.log(invertirTexto('hola'));  // Resultado esperado: 'aloh'
console.log(invertirTexto('mundo')); // Resultado esperado: 'odnum'
console.log(invertirTexto('JavaScript')); // Resultado esperado: 'tpircSavaJ'


module.exports = invertirTexto;