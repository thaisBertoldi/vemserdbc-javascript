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

const mensagemErro = (variavel, id) => {
    let mensagemErro = document.getElementById(id);
    if (!variavel) {
        return mensagemErro.classList.remove('d-none')
    } else {
        mensagemErro.classList.add('d-none');
    }
}
//#region Validação Nome
const validaNome = (event) => {
    //- adicionar um campo de nome acima da data de nascimento e adicionar a validação para possuir somente letras;
    const input = event ? event.target : document.getElementById('nome-input');
    const nome = input.value;
    let nomeSemEspaco = nome.replaceAll(' ', '')

    let nomeArray = [...nomeSemEspaco]
    let somenteLetras = nomeArray.every(el => el.toString().toLowerCase() !== el.toString().toUpperCase())
    mensagemErro(somenteLetras, 'nome-erro')
    return somenteLetras;
}
//#endregion Validação Nome

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

class Colaborador {
    id;
    nome;
    dataNascimento;
    email;
    senha;
}



const cadastrarUsuario = () => {
    let nome = document.getElementById('nome-input').value
    let dataNascimento = document.getElementById('date-input-registration').value
    let email = document.getElementById('email-input-registration').value
    let senha = document.getElementById('password-input-registration').value
    let nomeTitleCase = nome.split(' ').map(el => el[0].toString().toUpperCase() + el.slice(1)).join(' ')

    const colaborador = { nome: `${nomeTitleCase}`, dataNascimento: `${dataNascimento}`, email: `${email}`, senha: `${senha}` }
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


const limparInputERedirecionar = () => {
    let nome = document.getElementById('nome-input')
    let dataNascimento = document.getElementById('date-input-registration')
    let email = document.getElementById('email-input-registration')
    let senha = document.getElementById('password-input-registration')
    try {
        nome.value = "";
        dataNascimento.value = "";
        email.value = "";
        senha.value = "";
        irPara('registration', 'home');
    } catch (e) {
        console.log("erro ao tentar limpar input e redirecionar" + e)
    }
}

const validarCadastro = () => {
    let cadastroValido = validarData() && validarEmail() && validarSenha();
    console.log(`Cadastro ${cadastroValido ? 'válido!' : 'inválido'}`);

    if (cadastroValido) {
        cadastrarUsuario();
        limparInputERedirecionar();
    }
}

const excluirColaborador = () => {

}

const listarUsuarios = () => {

    axios.get('http://localhost:3000/colaboradores')
        .then((sucesso) => {
            //data possui o objeto inserido, no caso do post
            sucesso.data.forEach(elemento => {
                const div = document.createElement('div');
                div.textContent = elemento.nome;
                const container = document.getElementById('container')
                container.appendChild(div)
            })
        },
            (erro) => {
                console.log(erro + 'Algo de errado nao está certo')
            });
}

const validarEmailLogin = () => {
    let emailDigitado = document.getElementById('email-input-login').value
    console.log(emailDigitado)
    let emailsJson = [];
    
    axios.get('http://localhost:3000/colaboradores')
        .then((sucesso) => {
            //data possui o objeto inserido, no caso do post
            sucesso.data.forEach(elemento => {
                emailsJson.push(elemento.email);
            })
        },
            (erro) => {
                console.log(erro + 'Algo de errado nao está certo')
            });
    console.log(emailsJson)
    let emailExiste = emailsJson.map(el => el.includes(JSON.stringify(emailDigitado)))
    console.log('emailexiste: ' + emailExiste)
    let ehValido = emailExiste.length > 0 ? true : false;
    console.log(ehValido)
    return ehValido;
}

const validarSenhaLogin = () => {
    let senhaDigitada = document.getElementById('password-input-login').value
    console.log(senhaDigitada)
    let senhasJson = [];
    
    axios.get('http://localhost:3000/colaboradores')
        .then((sucesso) => {
            sucesso.data.forEach(elemento => {
                senhasJson.push(elemento.senha);
                console.log(senhasJson)
            })
        },
            (erro) => {
                console.log(erro + 'Algo de errado nao está certo')
            });
    console.log(senhasJson)
    let senhaExiste = senhasJson.forEach(el => el.includes(senhaDigitada) ? true : false)
    console.log('senha existe: ' + senhaExiste)
    return senhaExiste;
}

const validarLogin = () => {
    let loginValido = validarEmailLogin() && validarSenhaLogin();
    console.log(`Login ${loginValido ? 'válido!' : 'inválido'}`);

    if (loginValido) {
        irPara('login', 'home')
    }
}
/*
    - Funcionalidade de login:
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
