function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let array = [];
  let i = 0;
  while (i < 10) {
    i++;
    if (i === 5) {
      continue;
    }
    num += 2;
    array.push(num);
  }
  return array;
}

/* Logica
se crea una variable con un array vacio para ir pusheando cada numero que se reciba por argumento
se crea otra variable " i " que sera la que recorra el array hasta 10 veces, pero como aparece en el if unicamente cuando i === 5 loop, se salteara este

El problema que estaba teniendo, es que tenia i++; que avanzaba en la iteracion, pero abajo tambien tenia num +=2 que lo que provocaba era que en el 5to loop, sumara el valor igualmente.
entonces la solucion fue ponerlo debajo del if que unicamente aparece cuando llega el 5to loop
*/

module.exports = continueStatement;