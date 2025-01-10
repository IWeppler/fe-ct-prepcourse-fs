function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i = 0;
  do {
    num += 5;
    i++;
  } while (i < 8);
  return num;
}

// Ejemplo:
// doWhile(5); // 45 (5 + 5 + 5 + 5 + 5 + 5 + 5 + 5)
// doWhile(0); // 40 (0 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5)
// doWhile(-10); // 30 (-10 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5 + 5)

module.exports = doWhile;