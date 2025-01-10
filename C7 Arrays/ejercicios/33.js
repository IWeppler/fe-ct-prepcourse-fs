function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  let result = '';
  let maxLength = Math.max(str1.length, str2.length, str3.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < str1.length) result += str1[i]; // Si hay un caracter en str1, añadirlo
    if (i < str2.length) result += str2[i]; // Si hay un caracter en str2, añadirlo
    if (i < str3.length) result += str3[i]; // Si hay un caracter en str3, añadirlo
  }
  return result;
}

console.log(combine("abc", "", "123")); // "a1b2c3"
console.log(combine("abc", "12345", "")); // "a1b2c345"
console.log(combine("abc", "12345", "67")); // "a16b27c345"

module.exports = combine;