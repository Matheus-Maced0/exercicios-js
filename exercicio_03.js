// 3 - Maior de Dois Números:
// Escreva uma função em JavaScript que receba dois números como parâmetros e retorne o maior deles.

function maiordetodos(a,b){
    if(a>b){
        return console.log(`o valor de ${a} é maior que o valor de ${b}`)
    }if(a<b){
        return console.log(`o valor de ${b} é maior que o valor de ${a}`)
    }else{
        return console.log(`o valor de ${a} é igual ao valor de ${b}`)
    }
}

maiordetodos(7,6)