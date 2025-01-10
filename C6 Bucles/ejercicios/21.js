function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  if (numero <= 0) {
    return true;
  }
  while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    }
    numero = numero / 2;
  }
  return true;
}

// Ejemplo:
// esPotenciaDeDos(16); // true (16 es 2^4)
// esPotenciaDeDos(64); // true (64 es 2^6)
// esPotenciaDeDos(12); // false

module.exports = esPotenciaDeDos;
