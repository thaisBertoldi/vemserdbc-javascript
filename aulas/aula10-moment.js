// referencia no html:
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

console.log('dia atual =>' , moment())

let data = moment(20/10/2021) 
console.log('dia qualquer =>', moment(data, 'DD/MM/YYYY')) //passa o formato que quer

let dataPadrao = moment(data, 'DD/MM/YYYY');

dataPadrao.isValid() // vai retornar se é válido ou nao, retorna true ou false

let dataSemDivisao = moment('10052022', 'DDMMYYYY')
dataSemDivisao.format('DD/MM/YYYY')

let hoje = moment();
dataSemDivisao.isBefore(hoje)
dataSemDivisao.isAfter(hoje)

let dezoitoAnosAtras = moment().subtract(18, 'years')

dataSemDivisao.isBefore(dezoitoAnosAtras)

let vinteUmAnosAtras = moment().subtract(21, 'years')

data.isAfter(vinteUmAnosAtras) && data.isBefore(dezoitoAnosAtras)
data.isBetween(vinteUmAnosAtras, dezoitoAnosAtras)

//onkeyup= "nomedafuncao()" --- pra quando a tecla for solta

//event.target.value --- pra pegar cada um dos valores que for digitado no input