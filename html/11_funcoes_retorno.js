// Aula 11 : Funções com retorno


somar(9,4)

// Funções com retorno e parametros
function somar(n1, n2){
    let soma = n1 + n2 
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)
}



// Funções vazias (void)
function somarNumeros(){
    let n1 = 5
    let n2 = 7
    let soma = n1 + n2 
    console.log(`A soma de ${n1} e ${n2} é ${soma}`)
}

function numeroPositivo(){
    let n1 = 4
    let resposta = "negativo"

    if(n1 >= 0){
        resposta = "positivo"
    } 

    console.log(`O numero ${n1} é ${resposta}`)
}