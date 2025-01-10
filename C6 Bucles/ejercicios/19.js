function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var suma = 0;
  for (let i = 1; i <= n; i++) {
    suma = suma + i;
  }
  return suma;
}

// Ejemplo:
// sumarHastaN(3); // 6 (1 + 2 + 3)
// sumarHastaN(4); // 10 (1 + 2 + 3 + 4)

module.exports = sumarHastaN;
