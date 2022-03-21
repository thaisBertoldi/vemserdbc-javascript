//get quando busca/visualizar alguma coisa read
//post salvar/inserir/criar alguma coisa create
//put alterando ou editando alguma coisa update
//delete remove/exclui alguma coisa delete

//status code de 200 até 300 ok, acima de 400 é erro --- pesquisar status code nº aparece o nome do erro

//api application program interface
//api rest ou restful

//axios json
//<script src="./node_modules/axios/dist/axios.min.js"></script>
//npm install axios --save

//json-server --watch db.json tem que rodar esse cara pra funcionar o db.json

//promises -- new Promise((sucesso, erro))

const promessa = new Promise((resolve, opcionalReject) => {
    resolve('Resolvido')
    opcionalReject('Houve algum erro, promessa rejeitada')
})


// promessa.then(
//         (resolve ) => {
//             console.log(resolve)
//         }
// )
// .catch ((cachorro) => {
//     console.log(cachorro)
// })
promessa.then(
    (resolve) => {
        console.log(resolve)
    },
    (reject) => {
        console.log(reject)
    }
) // usar o catch pra mapear o reject 

promessa.catch((reject) => {
    console.log('Direto o catch da promessa', reject)
})
promessa.catch().finally() //mesmo se entrar no catch, entra no finally
promessa.then().catch().finally()
