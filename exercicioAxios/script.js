//#region Validação Email
const validarEmail = () => {
    let emailDigitado = document.getElementById('email-input-registration').value;
    let listaCaracteres = emailDigitado.split(''); // [...emailDigitado]

    let emailSplit = emailDigitado.split('@');

    let possuiArroba = emailSplit.length > 1;

    let dominioEmail = possuiArroba ? emailSplit[1] : '';
    let dominioEmailSplit = dominioEmail.split('.');

    let possuiPontosNoDominio = dominioEmailSplit.length > 1;

    let possuiCaracteresEntrePontos = dominioEmailSplit.every(d => d.length > 1);

    let comecaComLetra = listaCaracteres.length ? listaCaracteres[0].toUpperCase() !== listaCaracteres[0].toLowerCase() : false;

    let ehValido = possuiArroba && possuiPontosNoDominio && possuiCaracteresEntrePontos && comecaComLetra;

    // para setar o texto de erro em vermelho
    let erroEmail = document.getElementById('email-registration-error');
    erroEmail.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Email

//#region Validação Senha
const validarSenha = () => {
    let senhaDigitada = document.getElementById('password-input-registration').value;
    let listaCaracteres = senhaDigitada.split('');

    let letras = listaCaracteres.filter(char => char.toLowerCase() !== char.toUpperCase());

    let possuiLetraMaiuscula = letras.some(l => l.toUpperCase() === l); // "A".toUppercase() === "A"
    let possuiLetraMinuscula = letras.some(l => l.toLowerCase() === l);

    let possuiCharEspecial = listaCaracteres.some(char => char.toLowerCase() === char.toUpperCase() && isNaN(parseInt(char)));
    let possuiNumero = listaCaracteres.some(char => char.toLowerCase() === char.toUpperCase() && !isNaN(parseInt(char)));

    let possuiOitoCaracteres = senhaDigitada.length >= 8;

    let naoPossuiEspacos = !senhaDigitada.includes(' ');

    let ehValido = possuiOitoCaracteres && possuiLetraMaiuscula && possuiLetraMinuscula &&
        possuiCharEspecial && possuiNumero && naoPossuiEspacos;

    // para setar o texto de erro em vermelho
    let erroSenha = document.getElementById('password-registration-error');
    erroSenha.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}
//#endregion Validação Senha

//#region Validação Data
const validarData = () => {
    let inputData = document.getElementById('date-input-registration');
    let dataDigitada = inputData.value;

    adicionarMascaraData(inputData, dataDigitada);

    let dataConvertida = moment(dataDigitada, 'DDMMYYYY');

    let dezoitoAnosAtras = moment().diff(dataConvertida, 'years') >= 18;

    // comparações de data - date1.isBefore(date2)  /  date1.isAfter(date2)  /  date1.isSameOrBefore(date2)  /  date1.isSameOrAfter(date2)
    let dataAnteriorHoje = dataConvertida.isBefore(moment());

    let ehValido = dataConvertida.isValid() && dataAnteriorHoje && dezoitoAnosAtras && dataDigitada.length === 10; // 10/05/2001

    // para setar o texto de erro em vermelho
    let erroData = document.getElementById('date-registration-error');
    erroData.setAttribute('class', ehValido ? 'd-none' : 'text-danger');

    return ehValido;
}

const adicionarMascaraData = (input, data) => {
    let listaCaracteres = [...data];

    let listaFiltrada = listaCaracteres.filter(c => !isNaN(parseInt(c)));
    if (listaFiltrada && listaFiltrada.length) {
        let dataDigitada = listaFiltrada.join('');

        const { length } = dataDigitada;

        switch (length) {
            case 0: case 1: case 2:
                input.value = dataDigitada;
                break;
            case 3: case 4:
                input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}`;
                break;
            default:
                input.value = `${dataDigitada.substring(0, 2)}/${dataDigitada.substring(2, 4)}/${dataDigitada.substring(4, 8)}`;
        }
    }
}
//#endregion Validação Data


const resetarCampos = (...campos) => {
    campos.forEach(c => c.value = '');
}

const alternarClasses = (elemento, ...classes) => {
    classes.forEach(classe => {
        elemento.classList.toggle(classe);
    })
}

const irPara = (origem, destino) => {
    const elementoOrigem = document.getElementById(origem);
    const elementoDestino = document.getElementById(destino);

    alternarClasses(elementoOrigem, 'd-none', 'd-flex');
    alternarClasses(elementoDestino, 'd-none', 'd-flex');
}


const validarLogin = () => {

}


const listarUsuarios = () => {
    // aqui entra lógica de GET para os usuários
};


class Colaborador {
    id;
    nome;
    dataNascimento;
    email;
    senha;
}

const cadastrarUsuario = () => {
    let nome = document.getElementById('email-input-registration').value
    let dataNascimento = document.getElementById('date-input-registration').value
    let email = document.getElementById('email-input-registration').value
    let senha = document.getElementById('password-input-registration').value

    let nomeTitleCase = nome.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')

    const colaborador = { nome: `${nomeTitleCase}`, dataNascimento: `${dataNascimento}`, email: `${email}`, senha: `${senha}`}
    axios.post('http://localhost:3000/colaboradores', colaborador)
        .then((sucesso) => {
            //data possui o objeto inserido, no caso do post
            sucesso.data.id;
            const li = document.createElement('li');
            li.setAttribute('id', `colab-${sucesso.data.id}`)
            console.log('Sucesso')
        },
            (erro) => {
                console.log(erro + 'Algo de errado nao está certo')
            });
}

const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if (cadastroValido) {
        cadastrarUsuario();
    }
}


const excluirColaborador = () => {

}

/*
    Seguindo com a implementação do nosso sistema de cadastro de colaboradores...

    Criem as classe-modelo de objeto

    class Colaborador {
        id; (setado automático pelo json-server)
        nome;
        dataNascimento;
        email;
        senha;
    }

    Necessitamos agora das seguintes funcionalidades:

    - Cadastrar um objeto colaborador (instanciar e salvar com o axios) com as informações dos inputs da tela de cadastro;
    	OBS: salvar o nome do cara no json-server no padrão Title-Case, ex: o cara digitou no input 'tiago silva schmidt' vou salvar no meu db.json => 'Tiago Silva Schmidt';
      - Ao cadastrar um colaborador com sucesso, limpar todos os inputs e "redirecionar" para a página de login;
      - Se houver algum erro colocar o erro no console.log (NÃO pode ser uma mensagem vermelha de erro, o erro tem que estar mapeado);


    - Funcionalidade de login:
    	- Busca todos colaboradores salvos no json-server;
    	- Busca aquele que tenha o email igual ao digitado;
    	- Verifica se a senha dele é igual a senha digitada no input senha;
    	- Se a validação estiver ok, vai para a tela 'home';
      
    	
    - Na tela home terá somente uma listagem dos colaboradores <li> pode ser só com o texto do nome de cada um;
*/



// const cadastrarUsuario = () => {
//     const colaborador = { nome: 'João' }
//     axios.post('http://localhost:3000/colaboradores', colaborador)
//         .then((sucesso) => {
//             //data possui o objeto inserido, no caso do post
//             sucesso.data.id;
//             const li = document.createElement('li');
//             li.setAttribute('id', `colab-${sucesso.data.id}`)
//             console.log('Sucesso')
//         },
//             (erro) => {
//                 console.log(erro + 'Algo de errado nao está certo')
//             });
//     const colaboradorNomeAlterado = { nome: 'Joãozinho' }
//     axios.put('http://localhost:3000/colaboradores/1', colaboradorNomeAlterado) //passa o id no url
//         .then((sucesso) => {
//             console.log('Sucesso')
//         },
//             (erro) => {
//                 console.log(erro + 'Algo de errado nao está certo')
//             });
//     axios.delete('http://localhost:3000/colaboradores/1')
//         .then((sucesso) => {
//             console.log('Sucesso')
//         },
//             (erro) => {
//                 console.log(erro + 'Algo de errado nao está certo')
//             });
// };

// // get inicial 
// axios.get('http://localhost:3000/colaboradores')
//     .then((sucesso) => {
//         //data possui o objeto inserido, no caso do post
//         sucesso.data.forEach(elemento => {
//             const div = document.createElement('div');
//             div.textContent = elemento.nome;
//             const container = document.getElementById('container')
//             container.appendChild(div)
//         })
//     },
//         (erro) => {
//             console.log(erro + 'Algo de errado nao está certo')
//         });
