let codTimeout = setTimeout(
    function () {
        console.log("olá");
    },
    5000 //por ser em milissegundos, 5 segundos
);

clearTimeout(codTimeout);

let codInterval = setInterval(
    function () {
    console.log("olá");
    },
    5000
);

clearInterval(codInterval);