// Aula 05 - EXEMPLOS DE CONDIÇÕES
let prompt = require("prompt-sync")()

let usuario = prompt("Digite o seu usuário: ")
if( usuario == "Yara" ){
    console.log("Acesso concedido!")
} else{
    console.log("Acesso negado...")
}

let idade = parseInt( prompt("Digite sua idade: ") )
if( idade > 99 ){
    console.log("Idade inválida! Tente novamente...")
}
if( idade <= ){
    console.log("")
}

console.log("A idade dgitada foi: "+idade)