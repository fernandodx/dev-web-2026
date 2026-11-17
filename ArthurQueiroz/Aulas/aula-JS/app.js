var ola = "Ola Mundo JS";

console.log(ola);
console.info(ola);
console.error(ola);

function log(valor) {
    console.info(valor);
}

//Tipor de variaveis

var valor = 10;
log(typeof valor);

var palavra = "oi";
log(typeof palavra);

var meuObj = {};
log(typeof meuObj);

var meuArray = [];
log(typeof meuArray);

var  nulo = null;
log(typeof nulo);

var indefinido;
log(typeof indefinido);


//Operações simples
const n1 = 1;
const n2 = 5;
const valorNumericoSr = "5";

log(n1 + n2);
log(n1 * n2);
log(n1 / n2);

//Operações Logicas

log(n1 == n2);
log(n2 == valorNumericoSr);
log(n2 === valorNumericoSr);

log ( (n2 > n1 || n1 > n2 ) && 1 > 2);

const instituicao = "CEUB";
switch (instituicao) {
    case "CEM10";
        log("ESCOLA")
        break;
    case "CEUB";
        log("FACULDADE")  
        break;
    case "CIL";
        log("ESCOLA DE LINGUAS");
        break;
}
