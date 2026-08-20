// Atividade 3
let prompt = require("prompt-sync")()

let altura = prompt("Digite sua altura:")
let peso = prompt("Digite seu peso:")


let imc = peso / (altura * altura)
console.log("Seu imc é:"+imc)

