function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
  }
  
  let numero = generarNumeroAleatorio();
console.log(numero); // Imprime un número aleatorio entre 1 y 10