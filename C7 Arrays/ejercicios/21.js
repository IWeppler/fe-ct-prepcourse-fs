function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  const month = ["Enero", "Marzo", "Noviembre"];
  const mesesEncontrados = [];

  for (let i = 0; i < month.length; i++) {
    if (array.includes(month[i])) {
      mesesEncontrados.push(month[i]);
    }
  }

  if (mesesEncontrados.length < 3) {
    return "No se encontraron los meses pedidos";
  }

  // Ordenar los meses encontrados para que siempre estén en el orden correcto
  return month.filter(mes => mesesEncontrados.includes(mes));
}


/*
 * => Recorrer un array con meses desordenados para encontrar: enero, marzo, noviembre.
 * => Guardarlos en un nuevo array y return
 * => Si alguno de los meses no esta, retornar No se encontraron los meses..
 */

// includes() es un método que te permite saber si un array contiene un elemento específico.
// push() es un método que te permite agregar un elemento al final de un array.

module.exports = mesesDelAño;
