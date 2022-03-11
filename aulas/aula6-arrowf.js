const funcaoArrow = (parametros) => {
    console.log('alguma coisa');
}

// Convertam as seguintes funções para arrow function (usando concise body e abreviando parênteses quando possível):

// function isPositive( number ) {
// 	return number > 0;
// }

const isPositive = number => number > 0;

console.log(isPositive(2));

// function randomNumber() {
// 	return Math.round( Math.random( ) * 10 )
// }

const randomNumber = () => Math.round(Math.random() * 10)

console.log(randomNumber());

// setTimeout(
// 	function() {
// 		console.log( 'Apenas uma mensagem 5 segundos atrasada.' )
// 	},
// 	5000
// )

setTimeout(
    () => console.log('Apenas uma mensagem 5 segundos atrasada.'),
    5000
)

// function criarMensagemDeOla() {
// 	return 'Olá, seja bem vindo!';
// }

const criarMensagemDeOla = () => 'Olá, seja bem-vindo!'

console.log(criarMensagemDeOla());