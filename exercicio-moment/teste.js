let string = 'algumacoisa@dbcompany.ss'

let caracteres = [...string]

let primeiroCaractere = caracteres.toString().charAt(0)
let validacaoCaractere = primeiroCaractere.toLowerCase !== primeiroCaractere.toUpperCase()

let ultimoCaractere = caracteres.lastIndexOf('.') < caracteres.length - 2

let arroba = caracteres.indexOf('@')
let ponto = caracteres.indexOf('.')
let parteString = string.slice(arroba + 1, ponto)
let dominioDBC = parteString === 'dbccompany'

console.log(dominioDBC)