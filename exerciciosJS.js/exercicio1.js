/* Exercicio 1 */ 

let informacao = prompt('Insira sua resposta');

if (informacao === 'SIM') {
    console.log('Parabéns!')
} else if (informacao === 'Não'){
    informacao = prompt('Insira nova resposta')
    alert(informacao);
} else {
    confirm("Você tem noções dos seus atos")
} 

/* Exercicio 2 */

let nomeCliente = prompt('Insira nome do cliente');
let nomeAtendente = prompt('Insira nome do atendente');

alert(`Olá ${nomeCliente} eu me chamo ${nomeAtendente}, em que posso ajudar?`) 

/* Exercicio 3 */

let isFriday = confirm('Hoje é sexta-feira?', true);
console.log(isFriday);
let isTwoGreaterThanFour = 2>4;
console.log(isTwoGreaterThanFour);

let escolhaUsuario = prompt('Digite alguma coisa aqui, ou não digite');

let isValueEmpty = escolhaUsuario === null || escolhaUsuario === undefined || escolhaUsuario === '';
console.log(isValueEmpty)

/* Exercicio 4 */

var primeiro = parseInt(prompt("Digite o primeiro número"));
var segundo = parseInt(prompt("Digite o segundo número"));
var operacaoDesejada = prompt("Digite a operação desejada:");
var resultado;

if (!isNaN(primeiro) && !isNaN(segundo) && segundo !== 0) {
    switch(operacaoDesejada) {
        case '+':
            resultado = primeiro + segundo;
            console.log(resultado);
            break;
        case '-':
            resultado = primeiro - segundo;
            console.log(resultado);
            break;
        case '/':
            resultado = primeiro / segundo;
            console.log(resultado);
            break;
        case '*':
            resultado = primeiro * segundo;
            console.log(resultado);
            break;
        default: 
            console.log("Você digitou um numero ou uma operação inválida, tente novamente")
    }
} 

/* Exercicio 5 */ 

let t1 = parseFloat(prompt("Digite a primeira nota"));
let t2 = parseFloat(prompt("Digite a segunda nota"));
let t3 = parseFloat(prompt("Digite a terceira nota"));

let media = (t1 + t2 + t3) / 3;

if(isNaN(t1) || isNaN(t2) || isNaN(t3)) {
    alert('Você digitou um número inválido')
} else if (media < 5){
    alert('reprovado');
} else if (media >= 5 && media < 7) {
    alert('recuperação');
} else {
    alert('parabéns!');
} 

/* Exercício 6 */ 

let escolhaHospede = prompt("Escolha: 1-Fazer CheckIn, 2-Fazer Checkout, 3-Estender Hospedagem, 4-Sair:");

if(isNaN(escolhaHospede)){
    alert('Você precisa digitar um valor válido');
}

switch(escolhaHospede){
    case '1':
        alert('Bem-vindo(a)!');
        break;
    case '2':
        let confirmCheckout = confirm('Tem certeza?');
        if (confirmCheckout) {
            alert('Até mais!');
        };
        break;
    case '3':
        let diasEstendidos = prompt("Quantos dias você deseja estender sua hospedagem?");
        if(!isNaN(diasEstendidos)){
            alert(`Sucesso! Sua hospedagem foi estendida em ${diasEstendidos} dias.`);
        } else {
            alert('Você digitou um valor inválido');
        }
        break;
    case '4':
        alert('Ok.');
        break;
    default:
        alert('Operação inválida');
}