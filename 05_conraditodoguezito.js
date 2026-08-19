// Atividade 
let prompt = require("prompt-sync")()

console.log("=======================================")
console.log("CADASTRO DE PREÇOS-Conradito Doguezito" )
console.log("=======================================")

let preco1 = parseFloat(prompt("Digite o preço do pão: R$") )
let preco2 = parseFloat(prompt("Digite o preço da salsicha: R$ ") )
let preco3 = parseFloat(prompt("Digite o preço do pure de batada: R$ ") )
let preco4 = parseFloat(prompt("Digite o preço do queijo: R$ ") )
let preco5 = parseFloat(prompt("Digite o preço do bacon: R$ ") ) 

let porcentagem_de_lucro = parseFloat(prompt("Digite a porcentagem de lucro: ") )
porcentagem_de_lucro = porcentagem_de_lucro /100
let preco_de_tudo = preco1 + preco2 + preco3 + preco4 + preco5
let total = preco_de_tudo * porcentagem_de_lucro
let total_com_porcentagem = preco_de_tudo - total
console.log(total_com_porcentagem)