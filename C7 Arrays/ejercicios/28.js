function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
    if(Array.isArray(arr) && arr.length > 0) {
      return true;
    }
    return false;
  }

  console.log(esArrayNoVacio([1, 2, 3])); // true, es un array no vacío
  console.log(esArrayNoVacio([])); // false, es un array vacío
  console.log(esArrayNoVacio('no es un array')); // false, no es un array
  console.log(esArrayNoVacio([undefined])); // true, es un array con un elemento (undefined)

module.exports = esArrayNoVacio;