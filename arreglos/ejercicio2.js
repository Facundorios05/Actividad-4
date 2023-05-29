function obtenerPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
      }
    }
    return pares;
  }

  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = obtenerPares(numeros);
console.log(pares); // Imprime [2, 4, 6, 8, 10], que son los números pares del arreglo original