function Produtos(id, descricao, preco) {
    this.id = id;
    this.descricao = descricao;
    this.preco = preco;
  }
  
  const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
    let variavelProduto = new Produtos(variavelId, variavelDescricao, variavelPreco);
    return variavelProduto;
  }

let listaProdutos = [];
listaProdutos.push(criarProduto(1, 'cachorro', 100.30));
listaProdutos.push(criarProduto(2, 'gato', 150.50));
listaProdutos.push(criarProduto(3, 'ovelha', 200.10));
listaProdutos.push(criarProduto(4, 'passaro', 250.50));
listaProdutos.push(criarProduto(5, 'avestruz', 300.20));
console.log(listaProdutos);

let listaPrecos = listaProdutos.map(e => {
    return e.preco;
  })

let temp = listaPrecos.every( el => !(Number.isInteger(el)))
switch(temp) {
    case false:
        console.log('Pelo menos um dos valores não é decimal');
        break;
    case true:
        console.log('Todos os números são decimais.')
}