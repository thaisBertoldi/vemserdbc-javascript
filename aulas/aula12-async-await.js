//async await 

const { default: axios } = require("axios")

let listaColaboradores = []

const buscaColaboradores = async () => {
    let response = await axios.get('https...');
    listaColaboradores - response.data;
}