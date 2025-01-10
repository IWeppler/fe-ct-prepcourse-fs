function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;
  for (let i = a; i <= b; i++) {
    producto = producto * i;
  }
  return Math.abs(producto);
}

// Test

 console.log(productoEntreNúmeros(1, 5));  //120 (2 * 3 * 4 * 5)
 console.log(productoEntreNúmeros(2, 4));   //24
 console.log(productoEntreNúmeros(5, 5));   //5
 console.log(productoEntreNúmeros(0, 10));  //0
 console.log(productoEntreNúmeros(-5, 5));  //0


module.exports = productoEntreNúmeros;