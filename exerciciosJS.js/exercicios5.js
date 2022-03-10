// 1) Crie uma função que recebe como parâmetros um caracter e um array de 
// 	caracteres e que remova todas as ocorrências daquele caracter no array; 
//    // ex. funcaoRemoveCaracterDoArray('a', [ 'c', 'a', 'texto', 'a' ] )
//    => deve retornar o array: [ 'c', 'texto' ] (pois removeu todos 'a');


function removerCaractere (caractere, arrayPrincipal){
    for(let i=0; i<arrayPrincipal.length; i++){
        let variavelCaractere = arrayPrincipal.indexOf(caractere)
        if(variavelCaractere !== -1){
            arrayPrincipal.splice(variavelCaractere, 1);
        }
    }
    return arrayPrincipal;
}

console.log(removerCaractere('a', [ 'c', 'a', 'texto', 'a' ])) 


// 2) Crie uma função que receba como parâmetro um array de números e retorne
//  	um array ordenado (NÃO pode usar a função array.sort());
//    // ex. funcaoOrdenaArray( [4, 5, 7, 3, 0, 5, 2, 2] ) ===> retorna o array [ 0, 2, 2, 3, 4, 5, 5, 7 ] 

function ordenarArray(arrayNumeros) {
    for(let i=0; i<arrayNumeros.length; i++){
        for(let j= i + 1; j<arrayNumeros.length; j++){
            if(arrayNumeros[i] > arrayNumeros[j]){
                let novoArrayAuxiliar = arrayNumeros[i];
                arrayNumeros[i] = arrayNumeros[j]
                arrayNumeros[j] = novoArrayAuxiliar;
            }
        }
    }
    return arrayNumeros;
}

console.log(ordenarArray( [4, 5, 7, 3, 0, 5, 2, 2] ))

// 3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam)
// 	e retorne uma concatenação destes 2 arrays;

function concatenarArray(array1, array2) {
    return array1.concat(array2);
}

console.log(concatenarArray([1, 2, 3], [4, 5, 6]));

// 4a) Tendo uma lista vazia [], crie uma função que recebe um elemento 
// 	 qualquer como parâmetro e que adiciona esse elemento à lista;

let arrayVazia = [];

function adicionarElemento(elemento) {
    arrayVazia.push(elemento);
}

adicionarElemento('fruta');
adicionarElemento('fruta');

console.log(arrayVazia)

// 4b) Crie duas funções, uma para remover o último elemento da lista e outra para remover o primeiro elemento da lista;
let arrayCheia = [1, 2, 3, 4, 5,];
function removeUltimoElemento () {
    return arrayCheia.pop();
}
function removePrimeiroElemento(){
    return arrayCheia.shift();
}

removeUltimoElemento();
removePrimeiroElemento();

console.log(arrayCheia);

// 4c) Crie uma função para remover um elemento específico da lista;
// 	 // ex: Imagine que temos a lista [ 'a', 4, 'Tiago', 187 ]
// 	 // e chamamos a função  removeElemento('Tiago')
// 	 // deve remover o elemento 'Tiago' da lista, fazendo com que fique [ 'a', 4, 187 ]
// 	 Obs: caso o elemento passado não exista na lista mostrar uma mensagem para o usuário informando.

let listaEspecifica = [ 'a', 4, 'Tiago', 187 ];
let variavelTeste = 4;

function removeElementoEspecifico (elemento) {
    let variavelAuxiliar = listaEspecifica.indexOf(elemento)
    if(variavelAuxiliar !== -1){
        listaEspecifica.splice(variavelAuxiliar, 1);
    } else {
        console.log('Elemento não existe na lista')
    }
}
removeElementoEspecifico(variavelTeste)
console.log(listaEspecifica)

// 5) Crie uma função que gera um número aleátorio entre 0 e 100;
function funcaoNumeroAleatorio() {
    return Math.round(Math.random() * 100);
}
console.log(funcaoNumeroAleatorio())

// 5b) Crie uma lista vazia [] e vá adicionando números aleatórios nesta lista até que a lista tenha 10 números inseridos nela;
//     OBS: só podem ser adicionados a esta lista os seguintes números:
//     - números ímpares que estão entre 14 e 50;
//     - números múltiplos de 12;

let listaVaziaRandom = [];

function mathRandomMelhorada (){
    let testeAleatorio = Math.round(Math.random() * 100);
    if(testeAleatorio%2 !== 0 && testeAleatorio > 14 && testeAleatorio < 50){
        listaVaziaRandom.push(testeAleatorio); 
    } else if(testeAleatorio%12 === 0){
        listaVaziaRandom.push(testeAleatorio);
    }
}

while(listaVaziaRandom.length < 10){
    mathRandomMelhorada();
}

console.log(listaVaziaRandom)