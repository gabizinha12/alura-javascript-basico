console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(`Salvador`, `Sao Paulo`, `Rio De Janeiro`);

const idadeComprador = 18;
listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Minas Gerais`);

const estaAcompanhada = false;
let temPassagemComprada = true;
const destino = "Curitiba";

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);
if(podeComprar)  { // OU UMA OU OUTRA TEM QUE SER VERDADEIRA
  console.log("Boa viagem");
  listaDeDestinos.splice(2, 1);
  temPassagemComprada = true;
} else {
  console.log("Menor de idade, não posso vender");
  temPassagemComprada = false;
}
let contador = 0;
let destinoExiste = false;
while(contador < 5) {
    if(listaDeDestinos[contador] == destino) {
        console.log("Destino existe")
        destinoExiste = true;
        break;
    }
    contador++;
}


if(podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe, tivemos um erro");
}

for(let cont = 0; cont < 5;cont++) {
  if(listaDeDestinos[contador] == destino) {
      console.log("Destino existe")
      destinoExiste = true;
      break;
  }
}

console.log("Destino existe:  ", destinoExiste);
