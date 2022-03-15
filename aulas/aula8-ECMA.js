//spread

const somaNumeros = ( n1, n2, n3, n4 ) => {
    return n1 + n2 + n3 + n4
}

let numeros = [ 1, 2, 3, 4 ]

console.log(somaNumeros(...numeros))

const gato =  {
    nome: 'Meu gato', 
    raca: 'Siamês'
}

const gatoCopia = { ...gato }

// rest

const imprimeValores = (valor1, valor2, valor3) => {
    console.log('valor1 = ', valor1);
    console.log('valor2 = ', valor2);
    console.log('valor3 = ', valor3);
}
imprimeValores('Abacate', 123, 'João')

const imprimeValoresRest = ( ...valores ) => {
    console.log(valores);
    valores.forEach( v => {
        console.log(v)
    })
}

imprimeValoresRest('Abacate', 123, 'João')

// desestruturação

let meuArray = [ 10, 50, 30 ]
let meuArrayPrimeiro = meuArray[0]
let meuArraySegundo = meuArray[1]

let [ primeiro, segundo, terceiro ] = meuArray;
// pra deixar de pegar o segundo: [ primeiro, , terceiro ] = meuArray;

console.log(primeiro)

//em objeto:
const carro = { marca: 'Fiat', modelo: 'Uno' };

let { marca, modelo } = carro;
//ou let { modelo, marca } = carro; o js sabe por causa do nome da propriedade;
let { xyz, fgh } = carro; // => nesse caso, não tá definida propriedade com esse nome, entao vai retornar undefined; pra resolver isso:
//alias - apelido 
//let { marca: xyz, modelo: fgh } = carro; // renomeando para xyz e fgh

// class

class Aluno {
    nome;
    idade;
}

const aluno = new Aluno();

aluno.nome = 'César'
aluno.idade = 15;

//constructor

class Pizza {
    sabor;
    pizzaiolo;

    constructor (saborPizza) {
        this.sabor = saborPizza;
    }
}

class Cachorro {
    nome;
    genero;
    peso;
    idade;

    constructor(nome, genero, peso, idade) {
        this.nome = nome;
        this.genero = genero;
        this.peso = peso;
        this.idade = idade;
    }
}

const cachorro = () => {

}

//herança

class Pessoa {
    nome 

    constructor (nome) {
        this.nome = nome;
    }
}

class Aluninho extends Pessoa{
    matricula;
    mediaSemestre;

    constructor(nome, matricula, mediaSemestre) {
        super(nome)
        this.matricula = matricula;
        this.mediaSemestre = mediaSemestre;
    }

    imprimirNomes() {
    }
}

const pessoa = new Pessoa('Abreu');
const aluninho = new Aluninho ('Romeu', '2022-01-fidjfi', 1234)
console.log(aluninho)