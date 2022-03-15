/*
  +================================================================+
  |                    SISTEMA DE COLABORADORES                    |
  +================================================================+

  Nesse nosso sistema teremos os seguintes modelos de Entidade/Objeto/Classe ("sinônimos"):

  Colaborador {
    id;
    nome;
    marcacoesPonto; (um array de marcações, ex: [ { dia: 22, horas: 9 }, { dia: 23, horas: 7 } ]);
    
    marcarPonto( dia, hora );
  };

  Marcacao {
      dia; (só um number mesmo, ex: 22 )
      horas; (também só um number, ex: 9)
  }
  
  Crie também uma classe de 'Validacoes' que terá métodos úteis de validação para usar em várias partes do sistema;
  Ex: Validacoes { 
      validaAlgo(valorParaValidar) {
          // imaginem uma lógica validando aqui
          return ehValido;
      }
  }

  Para utilizar essas validações, 

  Ex: const validador = new Validacoes(); // inicializando um validador (vai ser o mesmo global para o sistema, não precisa instanciar mais de 1)
  
  if(validador.validaAlgo('Valor qualquer')) {
      // só pra exemplificar como utilizar
  }

  Vamos criar um sistema da seguinte forma;
  Deve ser apresentado para o usuário um "menu" para ele escolher uma ação a ser realizada;

  As opções serão:

  1 - Cadastrar Colaborador;
  2 - Marcar Ponto;
  3 - Ver Lista de Colaboradores;
  4 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto;
  9 - Encerrar;
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
// class Marcacao {
//     constructor(dia, horas) {
//         this.dia = dia;
//         this.horas = horas;
//     }
// }
class Validacoes {
    ifNull(valorParaValidar) {
        if (!valorParaValidar)
            alert('Voltando para o menu principal.')
    }

    ifNumber(valorParaValidar) {
        if (valorParaValidar.toString().toLowerCase() !== valorParaValidar.toString().toUpperCase()) {
            alert('Apenas numeros são válidos aqui. Por favor, tente novamente.')
        }
    }

    ifString(valorParaValidar) {
        if (parseInt(valorParaValidar) !== null) {
            alert('Apenas letras sáo válidas aqui. Por favor, tente novamente')
        }
    }
}

function criarColaborador(variavel) {
    listaColaboradores.push(variavel);
}

function findColaborador(variavel) {
    return listaColaboradores.find(el => el.id === parseInt(variavel))
}

function findAllColaboradores() {
    return listaColaboradores.forEach(el => console.log(el))
}

function findColaboradoresWithoutPonto() {
    return listaColaboradores.forEach(el => {
        if(el.ponto.length === 0){
            console.log(el)
        }
    })
}

let validacao = false;

do {
    let perguntaAoUsuario = prompt(MENU_PRINCIPAL);
    let idContador = 0;
    if (perguntaAoUsuario === '9') {
        validacao = true;
        alert('Obrigado, até a próxima')
    }

    switch (perguntaAoUsuario) {

        case '1':
            let validacaoCreate = false;
            do {
                let nomeColaborador = prompt('Digite o nome do colaborador (apenas letras aqui)')
                idContador++
                let colaborador = new Colaborador(idContador, nomeColaborador);
                criarColaborador(colaborador);
                validacaoCreate = true;
                break;
            } while (!validacaoCreate)
            break;

        case '2':
            let validacaoMarcarPonto = false;
            do {
                let idColaborador = prompt('Digite o id do Colaborador para qual deseja marcar o ponto')
                let colaborador = findColaborador(idColaborador);
                let diaASerMarcado = prompt('Digite o dia a ser marcado')
                let horasASeremMarcadas = prompt('Digite as horas a serem marcadas')
                colaborador.marcarPonto(diaASerMarcado, horasASeremMarcadas)
                validacaoMarcarPonto = true;
                console.log(listaColaboradores)
            } while (!validacaoMarcarPonto)
            break;

        case '3':
            findAllColaboradores()
            break;

        case '4':
            findColaboradoresWithoutPonto();
            break;
    }

} while (!validacao)


