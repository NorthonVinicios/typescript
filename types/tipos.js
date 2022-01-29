"use strict";
let nome = 'northon';
console.log('nome: ', typeof (nome), '\n');
let num = 8;
console.log('num: ', typeof (num), '\n');
const truth = true;
console.log('truth: ', typeof (truth), '\n');
const numbers = [1, 2];
console.log('numbers: ', typeof numbers, '\n');
//tuplas
const variado = ['Kensie Agarie', 555];
console.log('variado:', typeof variado, '\n');
const tudo = [];
function dividir(numA, numB) {
    return numA / numB;
}
function multiplicar(numA, numB) {
    return numA * numB;
}
function potencia(numA, numB) {
    return Math.pow(numA, numB);
}
function helloWorld() {
    return ('Hello Dare');
}
let calculo;
calculo = dividir;
console.log('divisão: ', calculo(6, 2));
calculo = multiplicar;
console.log('multiplicação: ', calculo(6, 2));
calculo = potencia;
console.log('potencia: ', calculo(6, 2));
let hamburger;
hamburger = { breed: 'francês', burger: 'Carne Moida' };
let funcionario;
funcionario = {
    supervisores: ['beatriz', 'angelo'],
    hora: (numA) => {
        if (numA < 8 && numA > 0) {
            return ('no ponto');
        }
        else if (numA >= 8 && numA <= 24) {
            return ('fora do ponto');
        }
        else {
            return ('WTF');
        }
    }
};
console.log(funcionario.supervisores);
let zoado = {
    empregado: false,
    mundo: 'prime',
    empregos: ['programador'],
    wealth: 'zero',
    health: 'bad',
    happiness: true,
    namoradas: []
};
let gabi = 1;
console.log('hamburger: ', hamburger);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Roxo"] = 2] = "Roxo";
    Cor[Cor["Azul"] = 3] = "Azul";
})(Cor || (Cor = {}));
const amarelo = Cor.Amarelo;
console.log('enum: ', amarelo);
tudo.push(nome, num, truth, numbers, variado);
console.log('\n', 'tudo: ', tudo);
