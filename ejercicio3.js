const notas
 = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

function promedioPonderado(notas) {
  let sumaPonderada = 0;
  let sumaPesos = 0;

  for (const item of notas) {
    sumaPonderada += item.valor * item.peso;
    sumaPesos += item.peso;
  }

  return sumaPesos !== 0 ? (sumaPonderada / sumaPesos) : 0;
}

const resultado = promedioPonderado(notas);
console.log("Promedio ponderado:", resultado.toFixed(2));

