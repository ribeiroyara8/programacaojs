// Atividade 
let prompt = require("prompt-sync")()

console.log("=======================================")
console.log("CADASTRO DE PREÇOS-Conradito Doguezito" )
console.log("=======================================")

let preco1 = parseFloat(prompt("Digite o preço do pão: R$ ") )
let preco2 = parseFloat(prompt("Digite o preço da salsicha: R$ ") )
let preco3 = parseFloat(prompt("Digite o preço do pure de batada: R$ ") )
let preco4 = parseFloat(prompt("Digite o preço do queijo: R$ ") )
let preco5 = parseFloat(prompt("Digite o preço do bacon: R$ ") ) 
let porcentagem_de_lucro = parseFloat(prompt("Digite a porcentagem de lucro: ") )

let preco_de_tudo = preco1 + preco2 + preco3 + preco4 + preco5

console.log("O lucro aplicado é: "+porcentagem_de_lucro+"%")
porcentagem_de_lucro = porcentagem_de_lucro /100

console.log("\n====MENU====")

console.log("\n==== CACHORRO-QUENTE com purê ====")
console.log("Pão,salsicha,purê DE batata,queijo,bacon")
let produto1 = preco1 + preco2 + preco3 + preco5
console.log("Preço de custo: R$"+produto1)
let ingrediente_lucro = produto1 * porcentagem_de_lucro +produto1
console.log("O preço de venda é: R$"+ingrediente_lucro)

console.log("\n==== Cachorro-quente cremoso ====")
console.log("Pão,2 salsicha,1 queijo")
let produto2 = preco1 + preco2 + preco4 + preco2
console.log("Preço de custo: R$"+produto1)
let ingrediente_lucro2 = produto2 * porcentagem_de_lucro +produto2
console.log("O preço de venda é: R$"+ingrediente_lucro2)

console.log("\n==== Cachorro-quente especial ====")
console.log("Pão, 1 salsicha,1 purê de batata,1 queijo,1 bacon")
let produto3 = preco1 + preco2 + preco3 + preco4 + preco5
console.log("Preço de custo: R$"+produto1)
let ingrediente_lucro3 = produto3 * porcentagem_de_lucro +produto3
console.log("O preço de venda é: R$"+ingrediente_lucro3)

console.log("\n==== Cachorro-quente combo ====")
console.log("1 Cachorro-quente com pure, 1 Cachorro-quente cremoso, 1 Cachorro-quente especial")
let produto4 = produto1 + produto2 + produto3 
console.log("Preço de custo: R$"+produto4)
let ingrediente_lucro4 = produto4 * porcentagem_de_lucro +produto4
console.log("O preço de venda é: R$"+ingrediente_lucro4)