let string = `1:"joao" paulo correia`

let nomeTitleCase = string.split(' ')
let emailDigitado = "joao"

let teste = nomeTitleCase.filter(el => el.includes(emailDigitado))

console.log(teste)