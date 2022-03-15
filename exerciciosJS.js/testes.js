
let listaColaboradores = [];

class Colaborador {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.ponto;
    }

    // marcarPonto (id, dia, horas) {
    //     return listaColaboradores.find(el => {
    //         if(el.id === id){
    //             this.ponto = { dia, horas };
    //         }
    //     })
    // }

};

class Validacoes {
    ifNull(valorParaValidar) {
        if (!valorParaValidar)
            console.log('Voltando para o menu principal.')
    }

    ifNumber(valorParaValidar) {
        if (valorParaValidar.toString().toLowerCase() !== valorParaValidar.toString().toUpperCase()) {
            console.log('Apenas numeros são válidos aqui. Por favor, tente novamente.')
        }
    }

    ifString(valorParaValidar) {
        if (parseInt(valorParaValidar) !== null) {
            console.log('Apenas letras sáo válidas aqui. Por favor, tente novamente')
        }
    }
}

function criarColaborador(variavel) {
    listaColaboradores.push(variavel);
}

function findColaborador(variavel) {
    return listaColaboradores.find(el => el.id === parseInt(variavel))
}

let primeiroColaborador = new Colaborador(1, 'Tiago')
let segundoColaborador = new Colaborador(2, 'Thais')
let terceiroColaborador = new Colaborador(3, 'Joao')
let quartoColaborador = new Colaborador(4, 'Patricia')

listaColaboradores.push(primeiroColaborador, segundoColaborador, terceiroColaborador, quartoColaborador)
//console.log(listaColaboradores)

let idtemp = 1;
let dia = 22;
let horas = 8;

let colaborador = findColaborador(idtemp);
colaborador.ponto = {dia, horas}
console.log(colaborador)



