/* 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
    Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
    A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
    A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
    Faça um programa que determine imprima o salário desse funcionário com o passar dos anos até o ano atual; */

let salarioInicial = 1000.00;
let aumentoSalario = 1.5;
for (let i = 2016; i <= 2022; i++) {
    if (i < 2018) {
        salarioInicial += (salarioInicial * aumentoSalario) / 100;
        console.log(salarioInicial.toFixed(2))
    } else {
        salarioInicial += (salarioInicial * (aumentoSalario *= 2)) / 100;
        console.log(salarioInicial.toFixed(2))
    }
}


/* 2) Faça um programa que calcule a soma dos primeiros 50 números pares; */

let somaPares = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        somaPares += i;
    }
}
console.log(somaPares);

/* 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10; */

let escolhaUsuarioTabuada = parseInt(prompt('Escolha o numero da tabuada de 1 a 10:'));
if(isNaN(escolhaUsuarioTabuada)){
    alert('Voce deve escolher apenas números')
} else {
    let resultadoTabuada = 0;
    for (let i = 0; i <= 10; i++) {
        resultadoTabuada = escolhaUsuarioTabuada * i;
        console.log(`${i} * ${escolhaUsuarioTabuada} = ${resultadoTabuada}`);
    }
}

/* 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100; */

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        let quadrado = Math.pow(i, 2);
        console.log(quadrado);
    }
}

/* 5) Faça um algoritmo que imprima no console os valores como se fosse um relógio durante 1 minuto;
    Exemplo do console:
    00 // note que é 00 e não apenas 0
    01 // note que é 01 e não apenas 1
    02 // note que é 02 e não apenas 2
    03 // note que é 03 e não apenas 3
    ...
    58
    59
    60 (aqui é para parar de imprimir) */

let codInterval = setInterval(funcaoDoTempo, 1000);
let intervalo = 0;

function funcaoDoTempo() {
    console.log(intervalo < 10 ? `0${intervalo}` : `${intervalo}`);
    intervalo++;
    if (intervalo === 61) {
        clearInterval(codInterval);
    }
}

/* 6) Pergunte ao usuário se ele quer:
    Inserir número / Finalizar
    Ao selecionar inserir número solicite para o usuário um valor numérico válido
    Ao selecionar finalizar mostre um alerta para o usuário com o resultado da soma de todos os números informados
    Utilize o laço DO...WHILE; */

let escolhaUsuarioNumero = parseInt(prompt('Escolha: 1. Inserir numero; 2. Finalizar'));
let escolhaUmNumero = 0;
let soma = 0;

if (isNaN(escolhaUsuarioNumero) || escolhaUsuarioNumero > 2) {
    alert('Você deve digitar apenas números aqui.');
} else {
    while (escolhaUsuarioNumero === 1) {
         escolhaUmNumero = parseInt(prompt('Que número você deseja inserir?'));
        if (isNaN(escolhaUmNumero)) {
            alert('Você deve digitar apenas números aqui.');
        } else {
            soma += escolhaUmNumero;
            escolhaUsuarioNumero = parseInt(prompt('Escolha: 1. Inserir numero; 2. Finalizar'));
        }
    } 
    alert(soma);
}