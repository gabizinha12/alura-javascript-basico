console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio De Janeiro`);

const idadeComprador = 18;
listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Minas Gerais`);

const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:  " + listaDeDestinos[1], listaDeDestinos[0]);
if (idadeComprador >= 18 || estaAcompanhada == true) { // OU UMA OU OUTRA TEM QUE SER VERDADEIRA
  console.log("Boa viagem");
  listaDeDestinos.splice(2, 1);
} else {
  console.log("Menor de idade, não posso vender");
}



console.log("Embarque: \n \n ");
if(idadeComprador >= 18 && temPassagemComprada) {
console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}




// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);
