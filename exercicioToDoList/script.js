const tituloPagina = () => {
    const topPage = document.getElementById('top-page')
    const titulo = document.createElement('h1')
    titulo.textContent = 'My to do List'
    topPage.appendChild(titulo)
    const style = `text-align: center; color: white;`;
    const styleTopPage = ` background-color: blue; width: 100%;`
    titulo.setAttribute('style', style)
    topPage.setAttribute('style', styleTopPage)
}

tituloPagina()