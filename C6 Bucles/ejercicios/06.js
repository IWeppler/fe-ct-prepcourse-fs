function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if ((num >= 100 && num <= 999) || (num <= -100 && num >= -999)) {
    return true;
  } else {
    return false;
  }
}

// Ejemplo:
// tieneTresDigitos(100); // true
// tieneTresDigitos(999); // true
// tieneTresDigitos(1000); // false
// tieneTresDigitos(99); // false

module.exports = tieneTresDigitos;
