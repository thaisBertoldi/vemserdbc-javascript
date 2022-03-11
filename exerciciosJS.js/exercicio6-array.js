/*
  +============================================================+
  |                    CADASTRO DE PRODUTOS                    |
  +============================================================+

  Obs: Utilizem Arrow Functions;

  Imaginando que teremos o seguinte produto:
  
  (modelo do objeto)
  {
    id: 0           (number, deve ser sempre único, ou seja, não podem existir dois produtos com o mesmo id)
    descricao: "",  (string)
    preco: 0        (number)
  }

  Teremos também uma lista de produtos que será uma variável de escopo global no sistema (let, não utilizem var);

  Criem um sistema onde seja possível:

  1) Cadastrar um produto;
    - cuidado para não ter o mesmo id (identificador);

  2) Excluir um produto pelo código;

  3) Encontrar um produto pelo código;

  4a) Imprimir no console em tabela a lista de produtos cadastrados;

  4b) Imprimir no console em tabela a lista de descrições dos produtos cadastrados;

  4c) Selecionar uma descrição desejada e:
    Imprimir no console em tabela somente a descrição e preço dos produtos que possuem aquela descrição escolhida; 

  5) Verificar o total de patrimônio da loja (preço total de todos os produtos);
  
  6) Verificar se todos os produtos cadastrados possuem um preço válido;

  7) Sair;
*/

function Produtos(id, descricao, preco) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
}

// 1) Cadastrar um produto;
// - cuidado para não ter o mesmo id (identificador);
const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
    let variavelProduto = new Produtos(variavelId, variavelDescricao, variavelPreco);
    return variavelProduto;
}

let temp = confirm('Deseja cadastrar algum produto?')

while (temp) {
    let idProduto = prompt('Digite o id do produto');
    let descricaoProduto = prompt('Digite a descricao do produto');
    let precoProduto = prompt('Digite o preco do produto');
    temp = confirm('Deseja cadastrar mais um produto ou sair?')

    const listaProdutos = [];
    listaProdutos.push(criarProduto(idProduto, descricaoProduto, precoProduto));
    
    console.log(listaProdutos);
}


//2) Excluir um produto pelo código;
const apagaProduto = (id) => {
    let newArray = listaProdutos.filter((f) => { return f !== id })
    listaProdutos = newArray
    return listaProdutos.slice(obj.id);
}

console.log(apagaProduto(1))



// const encontraProduto = () => {}

// console.table(listaProdutos)
// console.table(listaProdutos.descricao)

// const selecionarDescricao = (obj, str) => {
//     return obj[str]
// }

// const totalPatrimonio = listaProdutos.map()
