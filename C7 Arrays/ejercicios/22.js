function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let tabla = [];
  let num = 0;
  for (let i = 0; i <= 10; i++) {
    tabla.push(6 * i);
  }
  return tabla;
}

// test
console.log(tablaDelSeis()); // [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]


// Para este caso debemos utilizar un bucle for para recorrer los números del 0 al 10 y multiplicarlos por 6.
module.exports = tablaDelSeis;