console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio De Janeiro`);

const idadeComprador = 14;
listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Minas Gerais`);

const estaAcompanhada = true;

console.log("Destinos possíveis:  " + listaDeDestinos[1], listaDeDestinos[0]);
if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1);
} else {
  if (estaAcompanhada) {
    console.log("Comprador esta acompanhado");
    listaDeDestinos.splice(1, 1);
  } else {
    console.log("Menor de idade, não posso vender");
  }
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
