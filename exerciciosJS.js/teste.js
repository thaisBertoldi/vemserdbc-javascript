let codInterval = setInterval( funcaoDoTempo, 1000);
let temp = 0;

function funcaoDoTempo () {
    if(temp < 10){
        console.log('0' + temp);
    } else {
        console.log(temp)
    }
    temp++;
    stopCodInterval();
}

function stopCodInterval () {
    if(temp === 61){
        clearInterval(codInterval)
    }
}


