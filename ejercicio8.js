const productos = [
  { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
  { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
  { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];

const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);
// Resultado esperado: [{ nombre: 'Camisa', categoria: 'ropa', stock: 10 }]

function filtrarDisponibles(listaProductos, categoriaBuscada) {
  return listaProductos.filter(producto =>
    producto.categoria === categoriaBuscada && producto.stock > 0
  );
}
