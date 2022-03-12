let primeiraResposta = parseInt(prompt('Deseja fazer alguma movimentação? Selecione \n1: Sim ou digite \n2 para cancelar'))
if (primeiraResposta === 2) {
  alert('Foi um prazer, até a próxima!')
} else {
  while (isNaN(primeiraResposta) || primeiraResposta > 2) {
    alert('Você precisa inserir um número válido ou pressionar para cancelar');
    primeiraResposta = parseInt(prompt('Deseja fazer alguma movimentação? Selecione \n1: Sim ou digite \n2 para cancelar'))
  }
}

let listaProdutos = []; //lista de produtos criada aqui

let respostaUsuario = parseInt(prompt(`O que deseja fazer agora? 
\n1 Cadastrar um produto;\n2 Excluir um produto;\n3 Consultar um produto;\n4 Imprimir dados;\n5 Consultar Patrimonio ou verificar precos;\n6 Sair.`))
if (isNaN(respostaUsuario) || respostaUsuario > 6) {
  alert('Não foi dessa vez, parsa! Até mais')
} else {

  while (respostaUsuario !== 6) { //enquanto não for 6 vai rodar?

    function Produtos(id, descricao, preco) {
      this.id = id;
      this.descricao = descricao;
      this.preco = preco;
    }

    const criarProduto = (variavelId, variavelDescricao, variavelPreco) => {
      let variavelProduto = new Produtos(variavelId, variavelDescricao, variavelPreco);
      return variavelProduto;
    }

    if (respostaUsuario === 1) { //criar produto
      let idProduto = parseInt(prompt('Digite o id do produto'));
      while (isNaN(idProduto) || listaProdutos.some(el => el.id === idProduto)) {
        alert('Você digitou um valor inválido ou esse id já foi registrado. Por favor, tente novamente')
        idProduto = parseInt(prompt('Digite o id do produto'));
      }
      let descricaoProduto = prompt('Digite a descricao do produto');
      while (!isNaN(descricaoProduto)) {
        alert('Você precisa digitar apenas letras aqui. Por favor, tente novamente')
        descricaoProduto = prompt('Digite a descricao do produto');
      }
      let precoProduto = Number(prompt('Digite o preco do produto'));
      while (isNaN(precoProduto)) {
        alert('Você digitou um valor inválido. Por Favor, tente novamente')
        precoProduto = Number(prompt('Digite o preco do produto'));
      }
      listaProdutos.push(criarProduto(idProduto, descricaoProduto, precoProduto));
      console.log(listaProdutos)
    }

    if (respostaUsuario === 2) { // excluir produto

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
    }

    if (respostaUsuario === 3) {// consulta por id ou por descricao 

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
        while (!(listaProdutos.some(el => el.descricao === descricaoDesejada))) {
          alert('Não há produtos cadastrados com essa descricao. Tente novamente')
          descricaoDesejada = prompt('Digite a descricao desejada: ')
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
              let estaDescricao = descricoes[i]
              let estePreco = precos[i]
              newArrayDescricao = {
                descricao: estaDescricao,
                preco: estePreco
              }
            }
          }

          return newArrayDescricao;
        }

        console.table(selecionarDescricao(descricaoDesejada))
        alert('Sua pesquisa foi um sucesso! Verifique o console.')
      }
    }

    if (respostaUsuario === 4) { //imprime lista 
      let tipoDePesquisa = parseInt(prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;'));
      while (isNaN(tipoDePesquisa) || tipoDePesquisa > 2) {
        alert('Você precisa digitar um valor válido! Por favor, tente novamente.')
        tipoDePesquisa = parseInt(prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;'));
      }
      if (tipoDePesquisa === 1) {
        console.table(listaProdutos)
        alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
      } else {
        console.table(listaProdutos, ['descricao'])
        alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
      }
    }

    if (respostaUsuario === 5) { //patrimonio da empresa e se todos os valores são válidos 
      let tipoDeEscolha = parseInt(prompt('Deseja: 1 Consultar patrimônio total; 2 Consultar verificação de todos os preços'))
      while(isNaN(tipoDeEscolha) || tipoDeEscolha > 2) {
        alert('Você precisa escolher um número válido! Por favor, tente novamente')
        tipoDeEscolha = parseInt(prompt('Deseja: 1 Consultar patrimônio total; 2 Consultar verificação de todos os preços'))
      }

      if(tipoDeEscolha === 1){
        let precos = listaProdutos.map(e => {
          return e.preco;
        })
        console.log(`O valor total do patrimônio da empresa é R$ ${precos.reduce( (valorAnterior, valorAtual) => valorAnterior + valorAtual ).toFixed(2)}`);
        alert('Sua pesquisa foi concluída com sucesso! Verifique seu console.')
      } else {
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
      }
    }

    respostaUsuario = parseInt(prompt((`O que deseja fazer agora? \n1 Cadastrar um produto; \n2 Excluir um produto; \n3 Consultar um produto; \n4 Imprimir dados; \n5 Consultar Patrimonio ou verificar precos; \n6 Sair.`)))
    while (isNaN(respostaUsuario) || respostaUsuario > 6) {
      alert('Não foi dessa vez, parsa! Tente novamente')
      respostaUsuario = parseInt(prompt((`O que deseja fazer agora? \n1 Cadastrar um produto; \n2 Excluir um produto; \n3 Consultar um produto; \n4 Imprimir dados; \n5 Consultar Patrimonio ou verificar precos; \n6 Sair.`)))
    }
  }


  if (respostaUsuario === 6) {
    alert('Foi um prazer, até a próxima!')
  }
}
