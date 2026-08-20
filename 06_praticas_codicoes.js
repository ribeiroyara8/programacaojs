// AULA 06: PRÁTICAS COM CONDIÇÕES
let prompt = require("prompt-sync")()

let preco1 = 125.00
let preco2 = 68.90
let preco_do_seguro = 42.50
let total = 0

console.log("Escolha o seu destino")
console.log("1 - São Paulo por R$"+preco1)
console.log("2 - Araraquara por R$"+preco2)
let reposta = prompt("Digite uma opção: " )

if(reposta == "1"){
    total = preco1
} else{
    total = preco2
}


let seguro = prompt("Deseja adicionar um segura por mais R$ "+preco_do_seguro+" ? :")
if(seguro =="Sim"){
    total = total + preco_do_seguro
}

let cupom = prompt("Digite seu cupom de desconto: ")

if(cupom =="Conradito10"){
    console.log("Cupom de 10% aplicado!")
    let desconto = total * 0.10
    total = total - desconto
} else{
    console.log("Este cupom não existe.....")
}

let email = prompt("Voce gostaria de receber promoções no seu email? ")

if(email == "Sim"){
    console.log("Obrigado por se registrar, voce receberá novos e-mails em breve ")
} else{
    console.log("Ok, voce não receberá e-mails ")
}

console.log("\n O total da viagem é de: R$" +total)

console.log("Formas de pagamento")
console.log("1 - Cartão de crédito (acréscimo de 5%)")
console.log("2 - Pix (desconto de 5%)")
reposta = prompt("Escolha uma opção: ")

if( reposta == "1"){
    total = total * 1.05
    //let desconto = total * 0.05
    //total = total + desconto
} else{
    total = total * 0.95
    //let desconto = total * 0.05
    //total = total - desconto
}

console.log("\nTotal a pagar: R$"+total)
console.log("Obrigado, volte sempre")