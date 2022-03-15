/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+
*/

let listaColaboradores = [];
const MENU_PRINCIPAL = `Escolha o que deseja fazer: (apenas números são válidos aqui)
1 - Cadastrar Colaborador;
2 - Marcar Ponto;
3 - Ver Lista de Colaboradores;
4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
9 - Encerrar;`

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

    //verificar se é null
    ifNull = (variavelParaValidar) => !variavelParaValidar ? alert('Você cancelou essa operação.') : false

    //verificar se é numero
    ifNumber = (variavelParaValidar) =>  !isNaN(variavelParaValidar) ? true : false;

    // verificar se é string
    ifString = (variavelParaValidar) => variavelParaValidar.toString().toLowerCase() !== variavelParaValidar.toString().toUpperCase() ? true : false;

    //validar dias
    ifDay = (variavelParaValidar) => (variavelParaValidar >= 1 && variavelParaValidar <= 31) ? true : false;

    //validar horas
    ifHour = (variavelParaValidar) => (variavelParaValidar >= 0 && variavelParaValidar <= 24) ? true : false;
}

const criarColaborador = (variavel) => listaColaboradores.push(variavel);

const findColaborador = (variavel) => listaColaboradores.find(el => el.id === parseInt(variavel))

function findAllColaboradores() {
    return listaColaboradores.forEach(el => {
        return console.log(el)
    })
}

function findColaboradoresWithoutPonto() {

    let colaboradoresSemPonto = listaColaboradores.filter(el => {
        if (el.ponto.length === 0) {
            return el;
        } 
    })

    return colaboradoresSemPonto.length > 0 ? true : false;
}

let validacao = false;
let idContador = 0;
const condicao = new Validacoes();

do {
    let perguntaAoUsuario = prompt(MENU_PRINCIPAL);
    if (condicao.ifNull(perguntaAoUsuario)) {
        validacao = true;
    }

    switch (perguntaAoUsuario) {

        case '1':
            let validacaoCreate = false;
            do {
                let nomeColaborador = prompt('Digite o nome do colaborador (apenas letras aqui)')
                if (condicao.ifNull(nomeColaborador)) {
                    validacaoCreate = true;
                    validacao = false;
                    break;
                }

                if (condicao.ifString(nomeColaborador)) {
                    idContador++;
                    let colaborador = new Colaborador(idContador, nomeColaborador);
                    criarColaborador(colaborador);
                    validacaoCreate = true;
                    validacao = false;
                    console.log(listaColaboradores)
                    break;
                } else {
                    alert('Você precisa digitar apenas letras aqui.')
                }
            } while (!validacaoCreate)
            break;

        case '2':
            let validacaoMarcarPonto = false;
            do {
                let idColaborador = prompt('Digite o id do Colaborador para qual deseja marcar o ponto');
                if (condicao.ifNull(idColaborador)) {
                    validacaoMarcarPonto = true;
                    validacao = false;
                    break;
                }
                if (condicao.ifNumber(idColaborador) && findColaborador(idColaborador) !== undefined) {
                    let colaborador = findColaborador(idColaborador);
                    let diaASerMarcado = prompt('Digite o dia a ser marcado')
                    if (condicao.ifNull(diaASerMarcado)) {
                        validacaoMarcarPonto = true;
                        validacao = false;
                        break;
                    }
                    if (condicao.ifDay(diaASerMarcado)) {
                        let horasASeremMarcadas = prompt('Digite as horas a serem marcadas')
                        if (condicao.ifNull(horasASeremMarcadas)) {
                            validacaoMarcarPonto = true;
                            validacao = false;
                            break;
                        }
                        if (condicao.ifHour(horasASeremMarcadas)) {
                            colaborador.marcarPonto(diaASerMarcado, horasASeremMarcadas)
                            validacaoMarcarPonto = true;
                            alert('Ponto marcado com sucesso!')
                            console.log(listaColaboradores)
                        } else {
                            alert('Você digitou um valor inválido para hora (0 a 24h). Por favor, tente novamente.')
                        }
                    } else {
                        alert('Você digitou um valor inválido para dias (1 a 31). Por favor, tente novamente.')
                    }
                } else {
                    alert('Você digitou um valor inválido. Por favor, tente novamente.')
                }
            } while (!validacaoMarcarPonto)
            break;

        case '3':
            if (listaColaboradores.length === 0) {
                alert('Desculpe, não encontramos nenhum dado.')
                break;
            } else {
                alert('Verifique seu console.')
                console.log(listaColaboradores)
                break;
            }

        case '4':
            if (findColaboradoresWithoutPonto()) {
                alert('Verifique seu console.')
                console.log(findColaboradoresWithoutPonto())
                break;
            } else {
                alert('Não há colaboradores sem ponto marcado a serem exibidos.');
                break;
            }

        case '9':
            validacao = true;
            alert('Obrigado, até a próxima');
            break;
    }

} while (!validacao)