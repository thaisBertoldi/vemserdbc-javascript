let string = 'algumacoisa'

let nomeArray = [...string]

let somenteLetras = nomeArray.every(el => el.toString().toLowerCase() !== el.toString().toUpperCase())

console.log(somenteLetras)