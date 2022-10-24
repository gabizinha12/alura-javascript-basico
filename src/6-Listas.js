console.log("Trabalhando com listas");
// const salvador = `Salvador`;
// const saoPaulo = `SaoPaulo`;
// const rioDeJaneiro = `RioDeJaneiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio De Janeiro`
);


listaDeDestinos.push(`Curitiba`);
listaDeDestinos.push(`Minas Gerais`);
listaDeDestinos.splice(1,1);
console.log("Destinos possíveis:  " + listaDeDestinos[1]);