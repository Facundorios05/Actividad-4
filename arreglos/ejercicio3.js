function obtenerPromedioPonderado(notas, pesos) {
    let sumaNotas = 0;
    let sumaPesos = 0;
    
    for (let i = 0; i < notas.length; i++) {
      sumaNotas += notas[i] * pesos[i];
      sumaPesos += pesos[i];
    }
    
    let promedioPonderado = sumaNotas / sumaPesos;
    return promedioPonderado;
  }