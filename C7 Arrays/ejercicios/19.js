function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  if (arguments.length < 1) return 0;
  let producto = 1;
  for (let i = 0; i < arguments.length; i++) {
    producto = producto * arguments[i];
  }
  return producto;
}

//test:
console.log(multiplicarArgumentos(2, 3, 4)); // 24
console.log(multiplicarArgumentos(2, 3, 4, 5)); // 120
console.log(multiplicarArgumentos(2, 3, 4, 5, 6)); // 720

/*

Otra forma de hacerlo
function multiplicarArgumentos() {
  if (arguments.length < 1) return 0;
  return Array.from(arguments).reduce((a, b) => a * b);
}
*/

module.exports = multiplicarArgumentos;
