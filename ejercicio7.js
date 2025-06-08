const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];

function contarPalabras(lista) {
  const conteo = {};

  for (let actual of lista) {
    if (conteo[actual]) {
      conteo[actual]++;
    } else {
      conteo[actual] = 1;
    }
  }

  return conteo;
}

const resultado = contarPalabras(palabras);
console.log(resultado);
// Resultado esperado: { hola: 3, adiós: 1, gracias: 2 }
