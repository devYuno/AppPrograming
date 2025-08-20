let variavel1 = 5 // escopo local (de função)
var variavel2 = 10 // escopo global
const variavel3 = 15 // constante, não pode ser alterado

var nome = "Kessyane";
console.log("O seu nome é " + nome);

let meninas = ["Thayná", "Joyce", "Fernanda", "Kessyane"];
console.log("A primeira menina da ordem é " + meninas[0]);

const obj = {
    nome: "Kessyane",
    idade: 19,
    trabalho: "Bosch",
    familia: {
        mae: "Kessy",
        vo: "Sebastiao",
        namorada: "Laysla"
    }
}
console.log(obj);

function soma(a, b){
    return a + b;
}
const somar = function (a, b) {
    return a + b;
}
const somaar = (a, b) => a + b;