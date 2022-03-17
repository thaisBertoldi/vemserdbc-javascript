let string = "joao paulo correia"

let nomeTitleCase = string.split(' ')
let nomeLetraM = string.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

console.log(nomeLetraM)