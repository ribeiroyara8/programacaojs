// Aula 05: Condições
let prompt = require("prompt-sync")()

console.log("Ben-Vindo ao DETRAN!")
let idade = prompt("Digite a sua idade: " )

//Comparadores
// > maior
// < menor
// == igual
// >= maior ou igual
// <= menor ou igual
// != diferente

if(idade >= 18){
    console.log("Voce já tem idade para tirar a CNH")
} else {
    console.log("Voce ainda não pode tirar CNH, volte depois...")
}
