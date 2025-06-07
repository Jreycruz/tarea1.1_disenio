function crearCopia(persona, nuevoNombre) {
  return {
    ...persona,
    nombre: nuevoNombre,
    edad: persona.edad + 1
  };
}

const persona = { nombre: "Luis", edad: 30 };

const copia = crearCopia(persona, "Carlos");

console.log(persona);
console.log(copia);
