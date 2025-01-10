function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:
   return cb( num1, num2) ;
}

// Definir los callbacks
const sumar = (a, b) => a + b; // Suma
const restar = (a, b) => a - b; // Resta

// Llamar a operacionMatematica con callbacks válidos
console.log(operacionMatematica(5, 3, sumar)); // 8
console.log(operacionMatematica(10, 4, restar)); // 6


module.exports = operacionMatematica;