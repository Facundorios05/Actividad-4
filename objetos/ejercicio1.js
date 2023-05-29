// Crear el objeto "producto"
let producto = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 2
  };
  
  // Definir la función "calcularTotal" que toma un objeto producto como parámetro
  function calcularTotal(producto) {
    let total = producto.precio * producto.cantidad; // Calcular el total a pagar
  
    return total; // Devolver el total
  }
  
  // Llamar a la función "calcularTotal" pasando el objeto "producto" como argumento
  let totalPagar = calcularTotal(producto);
  
  console.log(totalPagar); // Imprimir el total a pagar
  