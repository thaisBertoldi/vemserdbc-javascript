const btnTarefa = document.getElementById('btn-tarefa');
const tarefas = document.getElementById('tarefas');

const adicionarTitulo = () => {
    const topPage = document.getElementById('top-page');
    const h1 = document.createElement('h1');
    h1.textContent = 'Minha To Do List';
    topPage.appendChild(h1);

    const style = ``;
    topPage.setAttribute('style', style)
}

adicionarTitulo();

const ul = document.createElement('ul');
ul.setAttribute('id', 'lista-tarefas')
const toDos = document.getElementById('lista-todo');
toDos.appendChild(ul)


let arrayListaTarefas = [];

function adicionarTarefa() {
    let lista = document.createElement('li');
    ul.appendChild(lista)
    let inputValue = document.getElementById("input-tarefa").value;
    let tarefa = document.createTextNode(inputValue);
    lista.appendChild(tarefa)
    document.getElementById("lista-tarefas").appendChild(lista)
    let span = document.createElement("span");
    let texto = document.createTextNode("\u00D7");
    span.appendChild(texto);
    lista.appendChild(span);
    arrayListaTarefas.push(inputValue)
}




