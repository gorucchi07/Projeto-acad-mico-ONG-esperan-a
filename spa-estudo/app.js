const app = document.querySelector("#app");

const paginas = {
    inicio: renderizarInicio,
    projetos: renderizarProjetos,
    contato: renderizarContato
};
function renderizarInicio() {
    return `
        <h1>Início</h1>
        <p>Bem-vindo à nossa pequena SPA de estudo.</p>
        <button id="botaoMensagem">Mostrar mensagem</button>
        <p id="mensagem"></p>
    `;
}
function renderizarProjetos() {
    return `
        <h1>Projetos</h1>
        <p>Aqui ficam os projetos da organização.</p>
        <button id="botaoMensagem">Mostrar mensagem</button>
        <p id="mensagem"></p>
    `;
}

function renderizarContato() {
    return `
        <h1>Contato</h1>
        <p>Entre em contato conosco.</p>
        <button id="botaoMensagem">Mostrar mensagem</button>
        <p id="mensagem"></p>
    `;
}
function renderizarPagina() {
    const rota = window.location.hash.slice(1) || "inicio";
    const pagina = paginas[rota] || paginas.inicio;
    app.innerHTML = pagina();

    const botaoMensagem = document.querySelector("#botaoMensagem");

     if (botaoMensagem) {
        botaoMensagem.addEventListener("click", () => {
        const mensagem = document.querySelector("#mensagem");
    mensagem.textContent = "Mensagem exibida com sucesso!";
        });
    }
}

window.addEventListener("hashchange", renderizarPagina);
renderizarPagina();
