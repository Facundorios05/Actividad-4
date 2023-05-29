// Crear el objeto "persona"
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
  };
  
  // Definir la función "presentarPersona" que toma un objeto persona como parámetro
  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
  }
  
  // Llamar a la función "presentarPersona" pasando el objeto "persona" como argumento
  presentarPersona(persona);
  