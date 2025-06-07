const personas = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
  { id: 3, nombre: "Ana" },
  { id: 4, nombre: "Carlos" }
];

function eliminarDuplicados(duplicado, propiedad) {
  const vistos = new Set();
  return duplicado.filter(obj => {
    const valor = obj[propiedad];
    if (vistos.has(valor)) {
      return false;
    }
    vistos.add(valor);
    return true;
  });
}


const resultado = eliminarDuplicados(personas, "nombre");

console.log(resultado);
