let numeros = [1, 2, 3, 4, 5];

for(n of numeros) {
    console.log(n)
}
// com forEach:
const imprime = (n) => console.log(n)
numeros.forEach(imprime)

newArr = [];
numeros.forEach((el) => {
    if(el > 3) newArr.push(el);
})
console.log(newArr)

//find 

numeros.find( (el) => el > 3) // se nao encontrar retorna undefined

// map mapeia modifica ou transforma o array e retorna um novo

let arrDobrado = numeros.map( (el) => el * 2 );
console.log(arrDobrado)

let clientes = [{nome:'Tiago'}, {nome:'João'}, {nome: 'Coisa'}];
console.log(clientes.map( cliente => cliente.nome ));

console.table(clientes)

//filter 

let novoArrayFilter = numeros.filter( el => el > 2);
console.log(novoArrayFilter)

//every se todos satisfazem a condição retorna true ou false
//some pelo menos um 

console.log(numeros.every( e => e === 4))
console.log(numeros.some( e => e === 4))
console.log(numeros.every(el => el.toString().toLowerCase() !== el.toString().toUpperCase()))

// reduce 

let soma = numeros.reduce( (valorAnterior, valorAtual) => valorAnterior + valorAtual ); // da pra passar um valor default no final
console.log(soma);