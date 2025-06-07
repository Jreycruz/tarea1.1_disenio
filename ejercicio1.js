const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verduras', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verduras', nombre: 'lechuga' }
]

const agrupar = datos.reduce((acumulador, datos) => {
    const categoria = datos.categoria;
    if (!acumulador[categoria]) {
        acumulador[categoria] = [];
    }
    acumulador[categoria].push(datos.nombre);
    return acumulador;
}, []);

console.log(agrupar);