"use strict";
var nome = 'northon';
console.log('nome: ', typeof (nome), '\n');
var num = 8;
console.log('num: ', typeof (num), '\n');
var truth = true;
console.log('truth: ', typeof (truth), '\n');
var numbers = [1, 2];
console.log('numbers: ', typeof numbers, '\n');
//tuplas
var variado = ['Kensie Agarie', 555];
console.log('variado:', typeof variado, '\n');
var tudo = [];
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
var calculo;
calculo = dividir;
console.log('divisão: ', calculo(6, 2));
calculo = multiplicar;
console.log('multiplicação: ', calculo(6, 2));
calculo = potencia;
console.log('potencia: ', calculo(6, 2));
var hamburger;
hamburger = { breed: 'francês', burger: 'Carne Moida' };
var funcionario;
funcionario = {
    supervisores: ['beatriz', 'angelo'],
    hora: function (numA) {
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
var zoado = {
    empregado: false,
    mundo: 'prime',
    empregos: ['programador'],
    wealth: 'zero',
    health: 'bad',
    happiness: true,
    namoradas: []
};
var gabi = 1;
console.log('hamburger: ', hamburger);
//enums
var Cor;
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Roxo"] = 2] = "Roxo";
    Cor[Cor["Azul"] = 3] = "Azul";
})(Cor || (Cor = {}));
var amarelo = Cor.Amarelo;
console.log('enum: ', amarelo);
tudo.push(nome, num, truth, numbers, variado);
console.log('\n', 'tudo: ', tudo);
