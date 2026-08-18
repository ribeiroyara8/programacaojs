// Aula 04: Input
// prompt- me permite a inserir dados
let prompt = require("prompt-sync")()

let nome = prompt("Olá, digite o seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let idade = prompt("Digite sua idade: ")
let nome_completo =nome + "" +sobrenome
console.log("Seja bem-vindo(a) "+nome_completo+" voce tem "+idade+" anos XD")

console.log("\n\n")

let produto1 =prompt("Digite o nome do produto:")
let preco1 = prompt("Digite o preço de "+produto1+":R$")
let produto2 = prompt("Digite o nome de outro produto: ")
let preco2 = prompt("Digite o preço de "+produto2+":R$")
console.log("-----RELATORIO-----")
console.log(produto1+" - R$"+preco1)
console.log(produto2+" -R$"+preco2 )
