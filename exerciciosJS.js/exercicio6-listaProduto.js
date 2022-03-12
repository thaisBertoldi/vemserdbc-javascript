function Produtos(id, descricao, preco) {
  this.id = id;
  this.descricao = descricao;
  this.preco = preco;
}

const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
  let variavelProduto = new Produtos(variavelId, variavelDescricao, variavelPreco);
  return variavelProduto;
}

let temp = parseInt(prompt('Deseja cadastrar um produto? Selecione 1: Sim ou digite -1234 para cancelar'))
if (temp === -1234) {
  alert('Foi um prazer, até a próxima!')
} else {
  while (isNaN(temp) || temp > 1) {
    alert('Você precisa inserir um número válido ou pressionar para cancelar');
    temp = parseInt(prompt('Deseja cadastrar um produto? Selecione 1: Sim ou digite -1234 para cancelar'))
  }
}

let listaProdutos = [];
while(temp !== 5) {
  while (temp === 1) {
    let idProduto = parseInt(prompt('Digite o id do produto'));
    while (isNaN(idProduto) || listaProdutos.some(el => el.id === idProduto)) {
      alert('Você digitou um valor inválido ou esse id já foi registrado. Por favor, tente novamente')
      idProduto = parseInt(prompt('Digite o id do produto'));
    }
    let descricaoProduto = prompt('Digite a descricao do produto');
    while (!isNaN(descricaoProduto)) {
      alert('Você precisa digitar apenas palavras aqui. Por favor, tente novamente')
      descricaoProduto = prompt('Digite a descricao do produto');
    }
    let precoProduto = Number(prompt('Digite o preco do produto'));
    while (isNaN(precoProduto)) {
      alert('Você digitou um valor inválido. Por Favor, tente novamente')
      precoProduto = Number(prompt('Digite o preco do produto'));
    }
  
    listaProdutos.push(criarProduto(idProduto, descricaoProduto, precoProduto));
  
    temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    if(temp === 5){
      alert('Foi um prazer, até a próxima!')
    } else if(temp < 1 || temp > 5) {
      alert('Você precisa digitar um número válido. Por favor, tente novamente.')
      temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    }
  }
  
  console.log(listaProdutos)
  
  while (temp === 2) {
    let resposta = parseInt(prompt("Qual é o id do produto que você deseja excluir?"))
    while (isNaN(resposta) || !(listaProdutos.some(el => el.id === resposta))) {
      alert('Você digitou um valor inválido ou esse id não está cadastrado. Por favor, tente novamente')
      resposta = parseInt(prompt("Qual é o id do produto que você deseja excluir?"))
    }
    const apagaProduto = (id) => {
      let newArray = listaProdutos.filter((el) => { return el.id !== id });
      listaProdutos = newArray;
      return listaProdutos;
    }
  
    apagaProduto(resposta)
    console.log("Você apagou o produto com sucesso!")
    console.log(listaProdutos)
    temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    if(temp === 5){
      alert('Foi um prazer, até a próxima!')
    } else if(temp < 1 || temp > 5) {
      alert('Você precisa digitar um número válido. Por favor, tente novamente.')
      temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    }
  }
  
  while (temp === 3) {
    let consulta = parseInt(prompt('Qual é o tipo de consulta? 1 Por Id; 2 Por descrição'))
    while (isNaN(consulta) || consulta > 2) {
      alert('Você digitou um número inválido! Por favor, tente novamente')
      consulta = parseInt(prompt('Qual é o tipo de consulta? 1 Por Id; 2 Por descrição'))
    }
    if (consulta === 1) {
      let tipoDeConsulta = parseInt(prompt('Digite o id para consulta: '))
      while (isNaN(tipoDeConsulta) || !(listaProdutos.some(el => el.id === tipoDeConsulta))) {
        alert('Você digitou um valor inválido ou esse id não está cadastrado. Por favor, tente novamente')
        tipoDeConsulta = parseInt(prompt('Digite o id para consulta: '));
      }
  
      const encontraProduto = (id) => {
        return listaProdutos.find((el) => el.id === id);
      }
  
      console.log(encontraProduto(tipoDeConsulta));
      alert('Sua pesquisa foi um sucesso! Verifique o console.')
    } else {
      let descricaoDesejada = prompt('Digite a descricao desejada: ')
      if (!(listaProdutos.some(el => el.descricao === descricaoDesejada))) {
        alert('Não há produtos cadastrados com essa descricao.')
      }
  
      const selecionarDescricao = (descricao) => {
        let descricoes = listaProdutos.map(e => {
          return e.descricao;
        })
  
        let precos = listaProdutos.map(e => {
          return e.preco;
        })
  
        let newArrayDescricao;
  
        for (let i = 0; i < descricoes.length; i++) {
          if (descricoes[i] === descricao) {
            let temp = descricoes[i]
            let temp2 = precos[i]
            newArrayDescricao = {
              descricao: temp,
              preco: temp2
            }
          }
        }
  
        return newArrayDescricao;
      }
  
      console.table(selecionarDescricao(descricaoDesejada))
      alert('Sua pesquisa foi um sucesso! Verifique o console.')
    }
  
    temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    if(temp === 5){
      alert('Foi um prazer, até a próxima!')
    } else if(temp < 1 || temp > 5) {
      alert('Você precisa digitar um número válido. Por favor, tente novamente.')
      temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    }
  }
  
  while (temp === 4) {
    let tipoDePesquisa = parseInt(prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;'));
    while(isNaN(tipoDePesquisa) || tipoDePesquisa > 2){
      alert('Você precisa digitar um valor válido! Por favor, tente novamente.')
      tipoDePesquisa = parseInt(prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;'));
    }
    if(tipoDePesquisa === 1) {
      console.table(listaProdutos)
      alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
    } else {
      console.table(listaProdutos, ['descricao'])
      alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
    }
  
    temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    if(temp === 5){
      alert('Foi um prazer, até a próxima!')
    } else if(temp < 1 || temp > 5) {
      alert('Você precisa digitar um número válido. Por favor, tente novamente.')
      temp = parseInt(prompt('O que deseja fazer agora? 1 Cadastrar um produto; 2 Excluir um produto; 3 Consultar um produto; 4 Imprimir dados; 5 Sair.'))
    }
  }
}
