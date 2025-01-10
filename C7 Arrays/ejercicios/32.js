function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let limpio = string.replace(/\s+/g, '').toLowerCase();
  let reverse = limpio.split('').reverse().join('');

if( limpio === reverse) {
  return true;
} else {
  return false;
}

}

// Test
console.log(esPalindromo('Anita lava la tina')); // true
console.log(esPalindromo('Hola Mundo')); // false
console.log(esPalindromo('Madam')); // true


module.exports = esPalindromo;