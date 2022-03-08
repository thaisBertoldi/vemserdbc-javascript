/* 1) Crie um programa que atribua à uma varíavel e imprima no console os textos: 
   'Sextou' ou 'Ainda não sextou' de acordo com a resposta de confirmação do usuário; */

let sextaFeira = confirm("Sextou ou ainda não sextou?") ? console.log('sextou') : console.log('ainda não sextou');

/*  2) Crie um programa que imprima no console os números de 1 até 10; */

for (let i=1; i<=10; i++){
    console.log(i);
}

/*  3) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
      e imprima no console a soma de todos os elementos, neste caso seria 38; */

let listaNumeros = [1, 2, 7, 10, 18];
let resultado = 0;

for (let i=0; i<listaNumeros.length; i++){
    resultado += listaNumeros[i];
}

console.log(resultado);
   
/*   4) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 
       1 - Continuar perguntando / 2 - Parar de perguntar
      se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção. */

let opcaoUsuario = prompt('Selecione uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar') 
console.log(opcaoUsuario)

while(opcaoUsuario > 2) {
    alert('Voce digitou um numero invalido');
    opcaoUsuario = prompt('Selecione uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar');
}