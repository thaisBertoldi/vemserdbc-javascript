// dom = document object model 

//document.createElement(tagName)
const diviCriada = document.createElement('div')//// colocar id sempre que criar
diviCriada.textContent('Esta com id')
//element.setAtributte 
diviCriada.setAttribute('id', 'minha-div') // primeiro o atributo, depois o nome

//document.getElementById(qual id)

const span = document.getElementById('count')

//document.getElementsByTagName(tagName) ---- pega toda a lista daquelas tags

const divs = document.getElementsByTagName('div')

//document.createTextNode(text) --- coloca um texto de fato 

const divText = document.createTextNode('Um texto qualquer')

//paielement.appendChild(filho)

diviCriada.appendChild(divText)

//pega a div pelo elementById, depois coloca a variavel dentro dela com appendChild --- pra colocar no html

//paielement.removeChild(filho de fato)
const divPraRemover = document.getElementsById('minha-div')

divContainer.removeChild(divPraRemover)

// pra criar style

const divContainer = document.getElementById('container')

divContainer.setAttribute('style', 'qualquer coisa de css vem aqui')
const style = `width: 50px;
height = 20px;
background-color: green;`;

divContainer.setAttribute('style', style)

//adicionar style e nao substituir

divContainer.className // pega todo o style já incluido 
divContainer.classList

divContainer.setAttribute('class', `${divContainer.className} bg bg-danger`)

const novaClasse = divContainer.className.replaceAll('bg-danger', 'bg-primary') // substitui o elemento e retorna nova string modificada

divContainer.setAttribute('class', `${novaClasse}`)

divContainer.classList.add('bg', 'bg-danger', 'rounded')
divContainer.classList.toggle('bg') //se tem, tira, se nao tem adiciona

//element.parentNode // element.parentElement --- traz o elemento pai

//eventos 
//event handler que é o manipulador de eventos e o event listener que é o 'ouvinte'
function styleElemento(elemento, id, conteudo) {
    elemento.setAttribute('id', id);
    elemento.classList.add('col-5', 'd-flex', 'justify-content-center', 'align-items-center')
    elemento.setAttribute('style', 'font-size: 24px')
    elemento.textContent = conteudo;
}

const programa = () => {
    const botaoAdicionar = document.createElement('button');
    const botaoDiminuir = document.createElement('button');

    styleElemento(botaoAdicionar, 'btn-add', '+');
    styleElemento(botaoDiminuir, 'btn-minus', '-');

    const btnContainer = document.getElementById('btn-container');
    btnContainer.appendChild(botaoAdicionar);
    btnContainer.appendChild(botaoDiminuir);

    adicionarEventos()
}

const incrementaContador = () => {
    const count = document.getElementById('count');
    count.textContent = parseInt(count.textContent) + 1;
    desabilitarHabilitarBotao();
}

const decrementaContador = () => {
    const count = document.getElementById('count');
    if(count.textContent > 0){
        count.textContent = parseInt(count.textContent) - 1;
    } 
    if(count === 0) {
       desabilitarHabilitarBotao();
    }
}

const desabilitarHabilitarBotao = () => {
    const botaoDiminuir = document.getElementById('btn-minus');
    botaoDiminuir.disable ? botaoDiminuir.removeAttribute('disabled') : botaoDiminuir.setAttribute('disabled', true);

}

const adicionarEventos = () => {
    const botaoAdicionar = document.getElementById('button');
    const botaoDiminuir = document.getElementById('button');

    botaoAdicionar.addEventListener('click', incrementaContador);
    botaoDiminuir.addEventListener('click', decrementaContador);
}

btnAddElemento.addEventListener('click', incrementaContador);



