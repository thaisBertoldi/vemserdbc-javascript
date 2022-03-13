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
}

const menuPrincipal = `\n1 Cadastrar um produto;\n2 Excluir um produto;\n3 Consultar um produto;\n4 Imprimir dados;\n5 Consultar Patrimonio ou verificar precos;\n6 Sair.`

let respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))

if (respostaUsuario !== 6) {
  while (respostaUsuario.toString().toLowerCase() !== respostaUsuario.toString().toUpperCase() || respostaUsuario > 6) {
    alert('Não foi dessa vez, parsa! Lembre-se que para sair você precisa digitar 6')
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
        if (descricaoProduto !== null && descricaoProduto.toString().toLowerCase() !== descricaoProduto.toString().toUpperCase()) {
          validacaoNumero = true;
          precoProduto = prompt('Digite o preco do produto (apenas números são válidos aqui)');
          do {
            if (!isNaN(precoProduto) && precoProduto !== null) {
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
        } else if (descricaoProduto !== null && !(descricaoProduto.toString().toLowerCase() !== descricaoProduto.toString().toUpperCase())) {
          alert('Você precisa digitar apenas letras aqui. Por favor, tente novamente')
          descricaoProduto = prompt('Digite a descricao do produto ou pressione cancelar para sair');
        } else {
          cancelarOperacao(descricaoProduto);
          validacao = false;
          break;
        }
      } while (validacao);
      break;

    case 2: // excluir produto
      let resposta = prompt("Qual é o id do produto que você deseja excluir?");
      let verificacao = false;
      do {
        if (listaProdutos.some(el => el.id === parseInt(resposta))) {
          //funcao
          const apagaProduto = (id) => {
            let newArray = listaProdutos.filter((el) => { return el.id !== id });
            listaProdutos = newArray;
            return listaProdutos;
          }

          apagaProduto(resposta)
          alert(`Você apagou o produto id ${resposta} com sucesso! Confira lista atualizada no console.`)
          console.log(listaProdutos)
          verificacao = true;
          break;

        } else {
          if(!resposta){
            cancelarOperacao(resposta)
            verificacao = true;
            resposta = 0;
            break;
          } else {
            alert('Número inválido ou não cadastrado, tente novamente. Lembre-se, apenas números são válidos aqui.')
            resposta = prompt("Qual é o id do produto que você deseja excluir?")
          }
        }
      } while (!verificacao)
      break;

    case 3:// consulta por id ou por descricao 
      let consulta = prompt('Qual é o tipo de consulta? 1 Por Id; 2 Por descrição')
      let verificaConsulta = false;
      do {
        if (consulta === '1') {
          let tipoDeConsulta = prompt('Digite o id para consulta: ')
          let verifica = false;
          do {
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
          let descricaoDesejada = prompt('Digite a descricao desejada: ')
          let validaDescricao = false;
          do {
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
              alert('Sinto muito, nao encontramos esse valor em nosso sistema.')
              cancelarOperacao(descricaoDesejada)
              validaDescricao = true;
              verificaConsulta = true;
              break;
            }
          } while (!validaDescricao)
          break;
        } else {
          if(!consulta){
            cancelarOperacao(consulta)
            consulta = 0;
            verificaConsulta = true;
            break;
          } else {
            alert('Você digitou um número inválido! Por favor, tente novamente')
            consulta = prompt('Qual é o tipo de consulta? 1 Por Id; 2 Por descrição')
          }
        }
      } while (!verificaConsulta)
      break;

    case 4: //imprime lista 
      let tipoDePesquisa = prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;');
      let verificaPesquisa = false;
      do {
        if (tipoDePesquisa === 1) {
          console.table(listaProdutos)
          alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
          verificaPesquisa = true;
          break;
        } else if (tipoDePesquisa === 2) {
          console.table(listaProdutos, ['descricao'])
          alert('Sua impressão foi concluída com sucesso. Verifique seu console..')
          verificaPesquisa = true;
          break;
        } else {
          if(!tipoDePesquisa){
            cancelarOperacao(tipoDePesquisa)
            verificaPesquisa = true;
            tipoDePesquisa = 0;
            break;
          } else {
            alert('Você digitou um número inválido! Por favor, tente novamente')
            tipoDePesquisa = prompt('Digite 1 imprimir toda a lista; 2 imprimir apenas descricao;');
          }
        }
      } while (!verificaPesquisa)
      break;

    case 5: //patrimonio da empresa e se todos os valores são válidos 
      let tipoDeEscolha = prompt('Deseja: 1 Consultar patrimônio total; 2 Consultar verificação de todos os preços')
      let verificaAlgo = false;

      do {
        if (tipoDeEscolha === '1') {
          let precos = listaProdutos.map(e => {
            return e.preco;
          })
          console.log(`O valor total do patrimônio da empresa é R$ ${precos.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual).toFixed(2)}`);
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
           if(!tipoDeEscolha){
            cancelarOperacao(tipoDeEscolha)
            verificaAlgo = true;
            break;
           } else {
             alert('Você digitou um número inválido! Por favor, tente novamente')
             tipoDeEscolha = prompt('Deseja: 1 Consultar patrimônio total; 2 Consultar verificação de todos os preços')
           }
        }
      } while (!verificaAlgo)
      break;
  }
  respostaUsuario = parseInt(prompt(`O que deseja fazer agora?${menuPrincipal}`))

} while (respostaUsuario !== 6)

if (respostaUsuario === 6) {
  alert('Foi um prazer, até a próxima!')
}
