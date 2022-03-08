// exemplo for 

for (let i=1; i<=5; i++){
    console.log(`Executou ${i} vezes`)
}

// exemplo for of 

let vogais = [ 'a', 'e', 'i', 'o', 'u'];

for(vogal /*cada elemento do array*/ of vogais) {
    console.log(vogal)
}

// exemplo while 

let i = 0;

while(/*condicao_for_verdadeira*/ i<5){
    //executa algo
    i++;
    console.log(`Executou ${i} vezes`)
}

// exemplo do while -- executa ao menos uma vez


i = 5;

do {
    i++;
    console.log(`Executou ${i} vezes`)
} while(/*condicao_for_verdadeira*/ i<5)
