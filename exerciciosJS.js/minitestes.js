const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
let variavelProduto = new Object();
      variavelProduto.id = variavelId;
      variavelProduto.descricao = variavelDescricao;
      variavelProduto.preco = variavelPreco;
      return variavelProduto;
}

let listaProdutos = [];

listaProdutos.push(criarProduto(1, 'cachorro', 100.00));
listaProdutos.push(criarProduto(2, 'gato', 150.00));
listaProdutos.push(criarProduto(3, 'ovelha', 200.00));
listaProdutos.push(criarProduto(4, 'passaro', 250.00));
listaProdutos.push(criarProduto(5, 'avestruz', 300.00));
console.log(listaProdutos);

const encontraProduto = (id) => {
  return listaProdutos.filter((el) => el.id === id);
}

console.log(encontraProduto(1));