/*
  Imaginem que temos uma Pet Shop, logo:
  - precisamos ter nossos pets (class Pet);
  - propriedades dos pets: nome, raca e peso;
  - nossos pets vao poder latirOuMiar() // método que imprime `oi, meu nome é XXX, minha raça é YYY e meu peso é ZZZ`
*/

class Pets {
    nome  = 'Guilherme';
    pets = [ { nome: 'Bolinha' }, { nome: 'Floquinho' }, { nome: 'Joaozinho' }];

    saudacao = (pet) => {
        console.log(`Dono: ${this.nome}, Pet: ${pet.nome}`);
    }

    imprimirNomeDosPets(){
        this.pets.forEach( this.saudacao );
    }
}