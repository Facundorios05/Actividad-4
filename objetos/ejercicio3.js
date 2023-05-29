// Definir la función "esMayorEdad" que toma un objeto persona como parámetro
function esMayorEdad(persona) {
    if (persona.edad >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  // Crear un objeto persona
  let persona = {
    nombre: "Juan",
    edad: 20
  };
  
  // Llamar a la función "esMayorEdad" pasando el objeto persona como argumento
  let resultado = esMayorEdad(persona);
  
  console.log(resultado); // Mostrar el resultado en la consola
  