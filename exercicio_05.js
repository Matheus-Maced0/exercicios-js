// 5 - Calcular Média de um Array:
// Escreva uma função em JavaScript que receba um array de números como parâmetro e retorne a média dos números no array.

function media(){
    let somar = [...arguments]
    let somaarray = 0;
    for (let i = 0; i < somar.length; i++){
        somaarray += somar[i];
        
    }
    mediaarray = somaarray/somar.length;
    console.log(mediaarray);
}

media(10,20,30)