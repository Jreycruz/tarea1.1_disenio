function obtenerUsuario(identificador) {
  return new Promise((resolver) => {
    setTimeout(() => {
      const nombresDisponibles = {
        1: "Juan",
        2: "María"
      };

      const nombreEncontrado = nombresDisponibles[identificador] || "Desconocido";
      resolver({ id: identificador, nombre: nombreEncontrado });
    }, 1000);
  });
}

async function cargarUsuarios() {
  const Usuario1 = await obtenerUsuario(1);
  const Usuario2 = await obtenerUsuario(2);

  console.log(`Usuarios cargados: ${Usuario1.nombre} y ${Usuario2.nombre}`);
}

cargarUsuarios();
