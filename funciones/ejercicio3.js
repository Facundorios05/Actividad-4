let cadena = prompt('Ingrese una palabra');

function esPalindromo(cadena) {
  let cadenaSinEspacios = cadena.toLowerCase();
  let cadenaInvertida = cadenaSinEspacios.split('').reverse().join('');
    if (cadenaSinEspacios === cadenaInvertida) {
    console.log (true); // Es un palíndromo
  } else {
    console.log (false); // No es un palíndromo
  }
}

esPalindromo(cadena);
