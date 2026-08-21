// Atividade 2
let prompt = require("prompt-sync")()

let numero1 = prompt("Digite um número: ")
let numero2 = prompt("Digite outro número:")
if(numero1 > numero2) {
    console.log("O primeiro número é maior")
} else {
    console.log("O segundo número é maior")
}
