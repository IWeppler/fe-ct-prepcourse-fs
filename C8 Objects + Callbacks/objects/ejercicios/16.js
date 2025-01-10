function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return (
    objetoUsuario.hasOwnProperty("password") &&
    objetoUsuario.password === password
  );
}

// test
let objetoUsuario = {
  password: "1234",
};
let password = "1234";

console.log(verificarPassword(objetoUsuario, password)); // true

password = "5678";
console.log(verificarPassword(objetoUsuario, password)); // false

password = "password";
console.log(verificarPassword(objetoUsuario, password)); // false

module.exports = verificarPassword;
