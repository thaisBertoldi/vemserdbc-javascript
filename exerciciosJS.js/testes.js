
let listaColaboradores = [];

class Colaborador {
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.ponto = [];
    }

    marcarPonto(dia, horas) {
        this.ponto.push({ dia, horas })
    }
}


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

    ifString(variavelParaValidar) {
        if (variavelParaValidar.toString().toLowerCase() !== variavelParaValidar.toString().toUpperCase()) {
            return true;
        } else {
           console.log('Apenas letras sáo válidas aqui. Por favor, tente novamente')
            return false;
        }
    }
}

function criarColaborador(variavel) {
    listaColaboradores.push(variavel);
}

function findColaborador(variavel) {
    return listaColaboradores.find(el => el.id === parseInt(variavel))
}

function findColaboradoresWithoutPonto() {
    return listaColaboradores.forEach(el => {
        if (el.ponto.length === 0) {
            console.log(el)
        }
    })
}

function findAllColaboradores() {
    return listaColaboradores.forEach(el => {
        return console.log(el)
    })
}

let nomeColaborador = new Colaborador()
let segundoColaborador = new Colaborador(2, 'Thais')
let terceiroColaborador = new Colaborador(3, 'Joao')
let quartoColaborador = new Colaborador(4, 'Patricia')

listaColaboradores.push(nomeColaborador, segundoColaborador, terceiroColaborador, quartoColaborador)

console.log(findAllColaboradores())



