// var numeros = [1, 3, 5, 7, 9];
// var organizados = [];

// function maxMinNumbers() {
//     for(var j=0;j<numeros.length;j++){
//         for(var i=0;i<numeros.length;i++){
//                 if(numeros[i] < numeros[i+1]){
//                     var temp = numeros[i];
//                     numeros[i] = numeros[i+1];
//                     numeros[i+1] = temp;
//                 }
//             }
//     }
//     var maior = numeros[1];
//     var menor = numeros[numeros.length - 2]
//     var resultado = [];
//     if(maior === menor) {
//         resultado.push(maior)
//     } else {
//         resultado.push(maior)
//         resultado.push(menor)
//     }
//     return resultado
// }
// console.log(maxMinNumbers(numeros));

const imprimirCombinacoes = string => {
    let possibilidades = [];

// tri - tir tri rit rti itr irt
// tri - tr ti rt ri it ir
// tri - t r i 

    for(let i = 0; i < string.length; i++) {
      let letra = string[i];
      let letras = string.split(letra);
      for(let j = 0; j < letras.length; j++) {
        let possibilidade = letra + letras[j];
        possibilidades.push(possibilidade);
      }
    }
    return possibilidades;
  }
  
  console.log(imprimirCombinacoes("tri"));