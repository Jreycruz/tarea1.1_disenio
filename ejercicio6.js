const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera','uva','manzana','sandia'];

function unirSinDuplicados(elemento1, elemento2) {
  const resultado = [];
  const combinado = elemento1.concat(elemento2);

  for (let i = 0; i < combinado.length; i++) {
    if (!resultado.includes(combinado[i])) {
      resultado.push(combinado[i]);
    }
  }

  return resultado;
}


const resultado = unirSinDuplicados(lista1, lista2);
console.log(resultado); 
