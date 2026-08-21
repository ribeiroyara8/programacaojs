// Atividade 3
let prompt = require("prompt-sync")()

let altura = prompt("Digite sua altura:")
let peso = prompt("Digite seu peso:")


let imc = peso / (altura * altura)
if(imc < 25){
    console.log("Voce esta com o peso ideal")
} else {
    console.log("Voce esta sobrepeso")
}

