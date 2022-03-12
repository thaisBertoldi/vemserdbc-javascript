let listaProdutos = []; //lista de produtos criada aqui
let idProduto = 0;

const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
  let variavelProduto = new Object();
  variavelProduto.id = variavelId;
  variavelProduto.descricao = variavelDescricao;
  variavelProduto.preco = variavelPreco;
  return variavelProduto;
}

const cancelarOperacao = (variavel) => {
    alert('Voltando para o menu principal...')
    return respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))
}

const menuPrincipal = `\n1 Cadastrar um produto;\n2 Excluir um produto;\n3 Consultar um produto;\n4 Imprimir dados;\n5 Consultar Patrimonio ou verificar precos;\n6 Sair.`

let respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))

if (respostaUsuario !== 6) {
  while (respostaUsuario.toString().toLowerCase() !== respostaUsuario.toString().toUpperCase() || respostaUsuario > 6) {
    alert('Não foi dessa vez, parsa! Tente novamente. Lembre-se que para sair você precisa digitar 6')
    respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))
  }
}

do {

  switch (respostaUsuario) {

    case 1: //criar produto
      let descricaoProduto = prompt('Digite a descricao do produto (apenas letras são válidas aqui)');
      let validacao = true;
      let precoProduto;
  
      do {
        if (descricaoProduto === undefined) {
          cancelarOperacao(descricaoProduto);
          validacao = false;
          break;
        } else if (!(descricaoProduto.toString().toLowerCase() !== descricaoProduto.toString().toUpperCase())) {
          alert('Você precisa digitar apenas letras aqui. Por favor, tente novamente')
          descricaoProduto = prompt('Digite a descricao do produto ou pressione cancelar para sair');
        } else {
          validacaoNumero = true;
          precoProduto = prompt('Digite o preco do produto (apenas números são válidos aqui)');
          do {
            if(!isNaN(precoProduto) && precoProduto !== null) {
              idProduto++;
              validacaoNumero = false;
              validacao = false;
              listaProdutos.push(criarProduto(idProduto, descricaoProduto, precoProduto));
              console.log(listaProdutos)
              break;
            } else if (precoProduto === null) {
              cancelarOperacao(precoProduto)
              descricaoProduto = '';
              validacaoNumero = false;
              break;
            } else {
              alert('Numero inválido!')
              precoProduto = prompt('Digite o preco do produto (apenas números são válidos aqui)');
            }
          } while (validacaoNumero);
        }
      } while (validacao);
      break;
  }

  respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))
} while (respostaUsuario !== 6) 
