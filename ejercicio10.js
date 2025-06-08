const edades = [19, 25, 32, 17];
const resultado = verificarMayoresDeEdad(edades);
console.log(resultado);
// Resultado esperado: false

function verificarMayoresDeEdad(lista) {
  return lista.every(function(edad) {
    return edad >= 18;
  });
}

//const edades2 = [19, 25, 32];
//const resultado2 = verificarMayoresDeEdad(edades2);
//console.log(resultado2);