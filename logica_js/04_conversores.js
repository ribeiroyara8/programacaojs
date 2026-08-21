// Aula 04: Converter variaveis
 let prompt = require("prompt-sync")()


let numero1 = prompt("Digite um numero: ")
numero1 = parseInt(numero1) // jeito 1

let numero2 = parseInt( prompt("Digite outro numero: ") ) //jeito 2

let soma = numero1 + numero2
console.log("O resultado é: "+soma) 

//-----------------------------------------------------------------------

// Atividade 1

let data = prompt("Digite o ano em que nasceu: ")
let ano_autal =prompt("Digite o ano em que estamos: ")
let idade = ano_autal- data
console.log("Voce tem "+idade+" anos de idade")

// Atividade 2

let nota1 = parseFloat(prompt("Nota 1: "))
let nota2 = parseFloat(prompt("Nota 2: "))
let nota3 = parseFloat(prompt("Nota 3: "))
let media = (nota1+nota2+nota3) /3
console.log ("Nota final: "+media)

// Atividade 3

let nome_produto = parseFloat(prompt("Digite o nome do produto: ") )
let preco = parseFloat(prompt("Digite o preço do produto: R$ ") )
let quantidade = parseInt(prompt("Digite a quantidade do produto ") )
let fatura = (preco + quantidade)
console.log("Fatura:" +fatura)