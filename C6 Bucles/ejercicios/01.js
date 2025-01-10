function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  if (a === b && a < 0 && b < 0) {
    return true;
  } else {
    return false;
  }
}

// código de prueba
console.log(esIgualYNegativo(-3, -3)); // true
console.log(esIgualYNegativo(3, -3)); // false
console.log(esIgualYNegativo(-3, 3)); // false
console.log(esIgualYNegativo(3, 3)); // false


module.exports = esIgualYNegativo;