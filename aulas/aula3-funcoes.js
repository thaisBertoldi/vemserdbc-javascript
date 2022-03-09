function sayHello() {
    console.log('Olá');
}

sayHello()

function sayHello2(a){
    console.log(a)
}

sayHello2('é pra imprimir isso aqui')

function sayHelloComParametro (mensagem){
    //let answer =  prompt(mensagem);
   // return answer;
}

//sayHelloComParametro('Que dia é hoje?')

function sayHelloParametroPadrao(nome, sobrenome='Silva') {//sempre colocar o valor default por último na lista de parâmetros
    console.log(`Hello, Mr(s) ${nome} ${sobrenome}`)
}

sayHelloParametroPadrao('Tiago')

//todo método é uma função, mas nem toda função é um método

//metodos array 

let letras = [ 'a', 'b', 'c'];
let numeros = [ 12, 17, 447, 68 ];

let letrasENumeros = letras.concat( numeros); //concatena arrays

letras.indexOf('a') // returna o indice do elemento, se o elemento nao existe, retorna -1

letras.push('d') // adiciona elemento ao final do array
letras.pop() //remove o último elemento
letras.shift() // remove o primeiro elemento
letras.includes('a') //se o elemento está incluso no array

Math.round() // para excluir casas decimais 
Math.random() // numero aleatorio entre 0 e 1, se quiser até 10 multiplica por 10, por 100, etc
