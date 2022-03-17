
const mensagemErro = (variavel, id) => {
    let mensagemErro = document.getElementById(id);
    if (!variavel) {
        return mensagemErro.classList.remove('d-none')
    } else {
        mensagemErro.classList.add('d-none');
    }
}

const validaNome = (event) => {
    //- adicionar um campo de nome acima da data de nascimento e adicionar a validação para possuir somente letras;
    const input = event ? event.target : document.getElementById('nome-input');
    const nome = input.value;

    let nomeArray = [...nome]

    let somenteLetras = nomeArray.every(el => el.toString().toLowerCase() !== el.toString().toUpperCase())
    mensagemErro(somenteLetras, 'nome-erro')
    return somenteLetras;
}

const validarEmail = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input email-input que terá como ação esta função de validarEmail
        deve validar as seguintes regras:
        1 - obrigatório ter uma letra como primeiro caractér;
        2 - obrigatório possuir um '@';
        3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
        4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
        5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
        6 - deve possuir o domínio 'dbccompany'
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="email-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

    const input = event ? event.target : document.getElementById('email-input');
    const email = input.value;

    let caractereEmail = [...email];

    //1 - obrigatório ter uma letra como primeiro caractér;
    let primeiroCaractere = caractereEmail.toString().charAt(0);
    let validacaoCaractere = primeiroCaractere.toLowerCase !== primeiroCaractere.toUpperCase();

    //2 - obrigatório possuir um '@';
    let existeArroba = caractereEmail.some(el => el === '@');

    //3 - obrigatório possuir pelo menos um '.' (ponto) depois do '@' e não podem estar juntos, ex: email@.ig // inválido pois o ponto está junto do arroba;
    // let existePonto = caractereEmail.some(el => el === '.')
    let arroba = caractereEmail.lastIndexOf('@')
    let dominioEmail = email.slice(arroba + 1)
    let pontoDepoisArroba = dominioEmail.indexOf('.') > (dominioEmail.indexOf('@') + 1) //só que se tiver um ponto antes do @ nao dá certo, verificar

    //4 - não pode terminar com '.' (ponto), ex: "email@pessoal.";
    //5 - deve ter pelo menos duas letras depois de um '.' (ponto), ex: "email@pessoal.c" // inválido pois tem somente o 'c' depois do '.';
    let ultimoCaractere = caractereEmail.lastIndexOf('.') < caractereEmail.length - 2

    //6 - deve possuir o domínio 'dbccompany'
    let dominioDBC = dominioEmail.includes('dbccompany')

    const ehValido = validacaoCaractere && existeArroba && pontoDepoisArroba && ultimoCaractere && dominioDBC;
    mensagemErro(ehValido, 'email-erro')
    return ehValido;
}


const validarSenha = (event) => {
    /* 
      adicionar um eventListener para o evento "onkeyup" do input senha-input que terá como ação esta função de validarSenha
      deve validar as seguintes regras:
      1 - obrigatório ter ao menos uma letra minúscula;
      2 - obrigatório ter ao menos uma letra maiúscula;
      3 - obrigatório ter ao menos um número;
      4 - obrigatório ter ao menos um carácter especial;
      5 - obrigatório ter ao menos 8 caractéres;
      6 - a senha não pode conter espaços em branco;

      obs: caso a senha (value) que está no input for válido/inválido deverá alterar a span com id="senha-erro" para fique com um display visível ou invisível (dependendo da situação)
    */
    const input = event ? event.target : document.getElementById('senha-input');
    const { value: senha } = input;

    input.value = input.value.replaceAll(' ', '');

    let caracteresSenha = [...senha];

    let possuiLetraMinuscula = caracteresSenha.some(c => c.toLowerCase() === c);
    let possuiLetraMaiuscula = caracteresSenha.some(c => c.toUpperCase() === c);

    let possuiEspecial = caracteresSenha.some(c => c.toUpperCase() === c.toLowerCase() && isNaN(c));
    let possuiNumero = caracteresSenha.some(c => c.toUpperCase() === c.toLowerCase() && !isNaN(c));

    let peloMenosOito = senha.length >= 8;

    const ehValido = possuiLetraMinuscula && possuiLetraMaiuscula && possuiEspecial && possuiNumero && peloMenosOito;
    mensagemErro(ehValido, 'senha-erro')
    return ehValido;
}


const adicionarMascaraData = () => {
    const inputAlgo = document.getElementById('data-input')
    let inputData = document.getElementById('data-input').value;
    if (inputData.length === 2) {
        inputAlgo.value = `${inputData}/`
    }
    let inputDataDay = document.getElementById('data-input').value
    if(inputData.length === 5){
        inputAlgo.value = `${inputDataDay}/`
    }
}

const validarData = (event) => {
    /* 
        adicionar um eventListener para o evento "onkeyup" do input data-input que terá como ação esta função de validarSenha
        deve validar as seguintes regras:
        1 - deve ser uma data válida;
        2 - não pode ser uma data futura;
        3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
        obs: caso o email (value) que está no input for válido/inválido deverá alterar a span com id="data-erro" para fique com um display visível ou invisível (dependendo da situação)
    */

        
    const input = event ? event.target : document.getElementById('data-input');
    const data = moment(input.value, 'DD/MM/YYYY');

    // 1 - deve ser uma data válida;
    // let dataUsuario = moment(data, 'DD/MM/YYYY')
    let validacaoData = data.isValid(data)

    //2 - não pode ser uma data futura;
    let dataAtual = moment()
    let seNaoDataFutura = data.isBefore(dataAtual)

    //3 - deve ser uma data entre 18 e 26 anos; (idade > 18)
    let dezoitoAnosAtras = moment().subtract(18, 'years')
    let vinteSeisAnosAtras = moment().subtract(26, 'years')
    let seDezoitoAVinteESeis = data.isBetween(vinteSeisAnosAtras, dezoitoAnosAtras)

    const ehValido = validacaoData && seNaoDataFutura && seDezoitoAVinteESeis;
    mensagemErro(ehValido, 'data-erro')
    return ehValido;
}

const validarCadastro = (event) => {
    event.preventDefault();
    console.log(`Cadastro: nome: ${validaNome()}, data: ${validarData()}, email: ${validarEmail()}, senha: ${validarSenha()}`)
}