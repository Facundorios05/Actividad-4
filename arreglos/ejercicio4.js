function obtenerMaximo(arreglo) {
    let maximo = arreglo[0]; // Asignamos el primer elemento del arreglo como máximo inicial
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > maximo) {
        maximo = arreglo[i]; // Actualizamos el máximo si encontramos un número mayor
      }
    }
  
    return maximo;
  }
  