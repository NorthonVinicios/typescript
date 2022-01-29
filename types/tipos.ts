let nome = 'northon'
console.log('nome: ', typeof(nome), '\n')

let num:number = 8
console.log('num: ',typeof(num), '\n')

const truth:boolean = true
console.log('truth: ',typeof(truth), '\n')

const numbers: number[] = [1, 2]
console.log('numbers: ',typeof numbers, '\n')

//tuplas
const variado: [string, number] = ['Kensie Agarie', 555]
console.log('variado:',typeof variado,'\n')

const tudo = []

function dividir (numA: number, numB: number): number {
  return numA / numB
}

function multiplicar(numA: number, numB: number): number {
  return numA * numB
}

function potencia(numA: number, numB: number): number {
  return Math.pow(numA, numB)
}

function helloWorld (){
  return('Hello Dare')
}

let calculo: (numA: number, numB: number) => number
calculo = dividir
console.log('divisão: ',calculo(6,2))

calculo = multiplicar
console.log('multiplicação: ',calculo(6,2))

calculo = potencia
console.log('potencia: ',calculo(6,2))


let hamburger: { breed: string, burger: string}

hamburger = {breed:'francês', burger:'Carne Moida'}

let funcionario: { supervisores: string[], hora: (numA: number) => string }

funcionario = {
  supervisores: ['beatriz', 'angelo'],
  hora: (numA: number) => {
    if(numA < 8 && numA > 0){
     return('no ponto')
    }else if(numA >= 8 && numA <= 24){
      return('fora do ponto')
    }else{
      return('WTF')
    }
}}

console.log(funcionario.supervisores)

type northon = {
  mundo: string,
  namoradas: string[],
  empregos:string[],
  empregado: boolean,
  health: string,
  wealth: string,
  happiness: boolean
}

let zoado: northon = {
  empregado: false,
  mundo: 'prime',
  empregos: ['programador'],
  wealth: 'zero',
  health: 'bad',
  happiness: true,
  namoradas: []
}

let gabi: number | northon = 1







console.log('hamburger: ', hamburger)

//enums
enum Cor{  
  Amarelo, 
  Verde,
  Roxo,
  Azul
}

const amarelo:Cor = Cor.Amarelo
console.log('enum: ',amarelo)

tudo.push(nome, num, truth, numbers, variado)

console.log('\n','tudo: ', tudo)