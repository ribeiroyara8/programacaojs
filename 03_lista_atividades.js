/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/

console.log(" _____ ")
console.log("|     |")
console.log("|     |")
console.log("|     |")
console.log("|_____|")

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/
let cidade = "SÃO CARLOS"
let estado = "SÃO PAULO"
console.log("Eu moro em "+cidade+" no estado de "+estado)
/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/
let numero1 = 345
let numero2 = 647
let soma = numero1 + numero2
console.log("O resultado da soma é de: "+soma)

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/
let idade = 18
let daqui_10 = 10
let soma2 = idade + daqui_10
console.log("Olá, voce tem "+idade+ " e daqui a 10 anos terá "+soma2)
/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/
let numero = 50
let dobro = 2
let triplo = 3
let soma_dobro = numero * dobro
let soma_triplo = numero * triplo
console.log("O dobro de "+numero+ " é "+soma_dobro+ " e o triplo é "+soma_triplo )

/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/
let produto1 = "Camiseta"
let produto2 = "Calça"
let preco1 = 15.00
let preco2 = 10.00
let valor_total = preco1 + preco2
console.log("O preço da "+produto1+ " é de R$"+preco1)
console.log("O preço da "+produto2+ " é de R$"+preco2)
console.log("A soma total dos produtos é: R$"+valor_total)
/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/
let salario = 1000
let aumento = 500
let desconto_inss = 250
let soma_salario = salario + aumento
let salario_total = soma_salario - desconto_inss
console.log("Voce receberá um aumento de R$"+aumento+" Seu salário era de R$"+salario+" com o aumento ele ficou "+soma_salario+ " e com o desconto do INSS de R$"+desconto_inss)
console.log("O valor total do seu salário vai ser de R$"+salario_total)
/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/
let mesada = 100
let gastou = 35
let valor_gasto = mesada - gastou
let sobrou = 65
console.log("João recebe R$"+mesada+" de mesada, ele gastou R$"+gastou+" sobrou R$"+valor_gasto+" No final João ficou com R$"+sobrou )
/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/
let base = 5
let altura = 3
let multiplicacao = base * altura
console.log("A base do retangulo é "+base+ " a altura é "+altura+" a área do retangulo é "+multiplicacao)
  
/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/
let celsius = 20
let Fahrenheit = celsius * ("1.8")
let Fahrenheit2 = Fahrenheit + 32
console.log("O valor de Fahrenheit "+Fahrenheit2)

let celsius2 = 20
let kelvin = celsius + 273.15
console.log("O valor do Kevin é "+kelvin)
/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/
let horas = 1
let minutos = 1 * 60
console.log("tem "+minutos+ " minutos "+"em " +horas+ " horas")

let horas2 = 1
let segundos = 60 * 80
console.log("tem "+segundos+ " segundos em "+horas2+ " horas")
/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

