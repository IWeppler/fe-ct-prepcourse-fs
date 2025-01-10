function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x > y) {
    return x;
  }else if (x < y) {
    return y;
  } else {
    return x;
  }
}

// La función recibe dos números y retorna el mayor de ellos.
// Si los números son iguales, retorna cualquiera de ellos.
// Por ejemplo

// obtenerMayor(5, 10) debe retornar 10
// obtenerMayor(8, 8) debe retornar 8
// obtenerMayor(-5, -10) debe retornar -5

module.exports = obtenerMayor;
