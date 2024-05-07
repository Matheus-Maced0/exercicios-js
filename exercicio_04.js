// 4 - Reverter uma String:
// Escreva uma função em JavaScript que receba uma string como parâmetro e retorne a string invertida.

function invertendo(str){
    var reversed = ""
    for (let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
        
    }       
    console.log(reversed)
    }
    
    invertendo("chato")