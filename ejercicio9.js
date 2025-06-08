function cargarDatos() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Cara completa");
    }, 2000);
  });
}

cargarDatos().then(function(mensaje) {
  console.log(mensaje);
});
