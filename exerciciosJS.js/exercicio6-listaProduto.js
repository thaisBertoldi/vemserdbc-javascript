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
  variavel = 0;
}

const menuPrincipal = `\n1 Cadastrar um produto;\n2 Excluir um produto;\n3 Consultar um produto;\n4 Imprimir dados;\n5 Consultar Patrimonio ou verificar precos;\n6 Sair.`
let respostaUsuario;

do {
  respostaUsuario = prompt(`O que deseja fazer agora?${menuPrincipal}`)
  if (!respostaUsuario) {
    respostaUsuario = '6';
  } else if (respostaUsuario > 6 || respostaUsuario.toString().toLowerCase() !== respostaUsuario.toString().toUpperCase()){
    alert('Valor inválido! Tente novamente.')
    cancelarOperacao(respostaUsuario)
  } else {

    switch (respostaUsuario) {

      case '1': //criar produto

        let validacao = true;
        let precoProduto;

        do {
          let descricaoProduto = prompt('Digite a descricao do produto (apenas letras são válidas aqui)');
          if (!descricaoProduto) {
            cancelarOperacao(descricaoProduto);
            validacao = false;
            break;
          } else if (descricaoProduto.toString().toLowerCase() !== descricaoProduto.toString().toUpperCase()) {
            validacaoNumero = true;
            precoProduto = prompt('Digite o preco do produto (apenas números são válidos aqui)');
            do {
              if (!precoProduto) {
                cancelarOperacao(precoProduto)
                validacaoNumero = false;
                validacao = false;
                break;
              } else if (!isNaN(precoProduto)) {
                idProduto++;
                validacaoNumero = false;
                validacao = false;
                listaProdutos.push(criarProduto(idProduto, descricaoProduto, precoProduto));
                console.log(listaProdutos)
                break;
              } else {
                alert('Numero inválido!')
                precoProduto = prompt('Digite o preco do produto (apenas números são válidos aqui)');
              }
            } while (validacaoNumero);
          } else {
            alert('Você precisa digitar apenas letras aqui. Por favor, tente novamente')
          } 
        } while (validacao);
        break;

      case '2': // excluir produto

        let verificacao = false;
        do {
          let resposta = prompt("Qual é o id do produto que você deseja excluir?");
          if (listaProdutos.some(el => el.id === parseInt(resposta))) {
            //funcao
            const apagaProduto = (id) => {
              listaProdutos = listaProdutos.filter((el) => { return el.id !== id });
              return listaProdutos;
            }

            apagaProduto(parseInt(resposta))
            alert(`Você apagou o produto id ${resposta} com sucesso! Confira lista atualizada no console.`)
            console.log(listaProdutos)
            verificacao = true;
            break;

          } else {
            if (!resposta) {
              cancelarOperacao(resposta)
              verificacao = true;
              resposta = 0;
              break;
            } else {
              alert('Número inválido ou não cadastrado, tente novamente. Lembre-se, apenas números são válidos aqui.')
            }
          }
        } while (!verificacao)
        break;

      case '3':// consulta por id ou por descricao 

        let verificaConsulta = false;
        do {
          let consulta = prompt('Qual é o tipo de consulta? 1 Por Id; 2 Por descrição')
          if (consulta === '1') {

            let verifica = false;
            do {
              let tipoDeConsulta = prompt('Digite o id para consulta: ')
              if (listaProdutos.some(el => el.id === parseInt(tipoDeConsulta))) {
                //funcao
                const encontraProduto = (id) => {
                  return listaProdutos.find((el) => el.id === id);
                }

                console.log(encontraProduto(tipoDeConsulta));
                alert('Sua pesquisa foi um sucesso! Verifique o console.');
                verifica = true;
                verificaConsulta = true;
                break;
              } else {
                alert('Sinto muito, nao encontramos esse valor em nosso sistema.')
                cancelarOperacao(consulta)
                verificaConsulta = true;
                verifica = true;
                break;
              }
            } while (!verifica)
            break;
          } else if (consulta === '2') {

            let validaDescricao = false;
            do {
              let descricaoDesejada = prompt('Digite a descricao desejada: ')
              if (listaProdutos.some(el => el.descricao === descricaoDesejada)) {
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
                validaDescricao = true;
                verificaConsulta = true;
                break;
              } else {
                if (!descricaoDesejada) {
                  cancelarOperacao(descricaoDesejada)
                  validaDescricao = true;
                  verificaConsulta = true;
                  break;
                } else {
                  alert('Sinto muito, nao encontramos esse valor em nosso sistema.')
                }
              }
            } while (!validaDescricao)
            break;
          } else {
            if (!consulta) {
              cancelarOperacao(consulta)
              consulta = 0;
              verificaConsulta = true;
              break;
            } else {
              alert('Você digitou um número inválido! Por favor, tente novamente')
            }
          }
        } while (!verificaConsulta)
        break;

      case '4': //imprime lista 

        let verificaPesquisa = false;
        do {
          let tipoDePesquisa = prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;');
          if (tipoDePesquisa === '1') {
            console.table(listaProdutos)
            alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
            verificaPesquisa = true;
            break;
          } else if (tipoDePesquisa === '2') {
            console.table(listaProdutos, ['descricao'])
            alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
            verificaPesquisa = true;
            break;
          } else {
            if (!tipoDePesquisa) {
              cancelarOperacao(tipoDePesquisa)
              verificaPesquisa = true;
              tipoDePesquisa = 0;
              break;
            } else {
              alert('Você digitou um número inválido! Por favor, tente novamente')
            }
          }
        } while (!verificaPesquisa)
        break;

      case '5': //patrimonio da empresa e se todos os valores são válidos 

        let verificaAlgo = false;

        do {
          let tipoDeEscolha = prompt('Deseja: 1 Consultar patrimônio total; 2 Consultar verificação de todos os preços')
          if (tipoDeEscolha === '1') {
            let precos = listaProdutos.map(e => {
              return parseInt(e.preco);
            })
            console.log(`O valor total do patrimônio da empresa é R$ ${precos.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual)}`);
            alert('Sua pesquisa foi concluída com sucesso! Verifique seu console.')
            verificaAlgo = true;
            break;
          } else if (tipoDeEscolha === '2') {
            let listaPrecos = listaProdutos.map(e => {
              return e.preco;
            })
            let verificaPreco = listaPrecos.every(el => !(isNaN(el)))
            switch (verificaPreco) {
              case false:
                alert('Pelo menos um dos valores não é um número');
                break;
              case true:
                alert('Todos os preços são números.')
                break;
            }
            verificaAlgo = true;
            break;
          } else {
            if (!tipoDeEscolha) {
              cancelarOperacao(tipoDeEscolha)
              verificaAlgo = true;
              break;
            } else {
              alert('Você digitou um número inválido! Por favor, tente novamente')
            }
          }
        } while (!verificaAlgo)
        break;
    }
  }

} while (respostaUsuario !== '6')

if (respostaUsuario === '6') {
  alert('Foi um prazer, até a próxima!')
}