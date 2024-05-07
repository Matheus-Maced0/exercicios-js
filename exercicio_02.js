// 2 - Verificar se um número é Par ou Ímpar:
// Escreva uma função em JavaScript que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar.

function parouimpar(num){
    if(num%2 == 0){
        return console.log("o valor é um numero par")
    }else{
        return console.log("o valor é um numero impar")
    }
}

parouimpar(7)