function obtenerSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  let numeros = [1, 2, 3, 4, 5];
  let sumaTotal = obtenerSuma(numeros);
  console.log(sumaTotal); // Imprime 15, que es la suma de los números del arreglo
  
  