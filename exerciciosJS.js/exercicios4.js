// 1) Crie uma função que recebe como parâmetro uma lista com os valores [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;

let listaValoresAleatorios = [1, 'Olá', undefined, 99999, 'Texto qualquer'];

function imprimirCadaValor(){
    for(valorLista of listaValoresAleatorios){
    console.log(valorLista)
    }
}

imprimirCadaValor(valorLista)

// 2) Crie uma função que receba uma string e retorne esta string sem nenhum espaço em branco no início e no fim 
//    e todos caracteres em maiúsculo;
//    // ex: minhaFuncao('      Oi, essa é uma   string   qualquer   ') => deve retornar a string: 'OI, ESSA É UMA   STRING   QUALQUER'
   
function imprimirSemEspacos(message) {
    return message.trim().toUpperCase();
}

console.log(imprimirSemEspacos('      Oi, essa é uma   string   qualquer   '))

// 2a) Crie uma função que, baseada no retorno da função da questão anterior, remova também os caractéres entre as palavras 
// 	(porém mantenha ao menos um para continuar com as palavras separadas)
// 	// ex: minhaFuncao('Oi,    essa    é    uma   string    qualquer') => deve retornar a string: 'Oi, essa é uma string qualquer'

function imprimirComEspacos(message) {
    let mensagemRecebida = imprimirSemEspacos(message).split(' ');
    let mensagemCompleta = [];
    for(let i=0; i<mensagemRecebida.length; i++){
        if(mensagemRecebida[i] !== '') {
            mensagemCompleta.push(mensagemRecebida[i])
        }
    }
    let mensagemCertinha = mensagemCompleta.join(' ');
    return `${mensagemCertinha.charAt(0)}${mensagemCertinha.slice(1).toLowerCase()}`
}

console.log(imprimirComEspacos('Oi,    essa    é      uma   string    qualquer'))

// 3) Crie uma função de soma que recebe como parâmetro 2 números (imprime no console a soma deles) e uma callback function que seja 
//    chamada caso algum dos números informados seja inválido.
//    Esta função de Callback exibe somente a msg no console 'Algum número digitado foi inválido';

function somaNumeros(numero1, numero2) {
    let num1 = parseInt(numero1);
    let num2 = parseInt(numero2)
    if(isNaN(num1) || isNaN(num2)){
        return numeroInvalido();
    } else {
        return num1 + num2;
    }
}

function numeroInvalido() {
     return 'Algum número digitado foi inválido';
}

console.log(somaNumeros('teste', 3))

// 4) Crie uma função de busca, que recebe 2 parâmetros (um array e um elemento) e retorna uma mensagem dizendo se aquele elemento
//    existe no array e também qual a posição dele (índice)
//    // Ex: minhaFuncao( ['a', 'cachorro', 255], 'cachorro' ) => retorna 'O elemento existe no array e a posição dele é: 1'
//    // Ex: minhaFuncao( ['a', 'cachorro', 255], 'abacate' ) => retorna 'O elemento não existe no array'

function buscaAlgumaCoisa (arrayQualquer, elementoQualquer) {
    return arrayQualquer.includes(elementoQualquer) ? `O elemento existe no array e a posição dele é: ${arrayQualquer.indexOf(elementoQualquer)}` : 'O elemento não existe no array'
}

console.log(buscaAlgumaCoisa( ['a', 'cachorro', 255], 'cachorro' ))