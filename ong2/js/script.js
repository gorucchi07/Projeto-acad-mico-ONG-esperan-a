// 1) Seleciona o container principal da página.
const app = document.querySelector("#app");

// 2) Cada função monta um bloco HTML diferente.
function renderHome() {
  app.innerHTML = `
    <section>
      <h1>ONG Esperança</h1>
      <p>Somos uma organização dedicada a transformar vidas por meio de ações sociais e educativas.</p>
      <button type="button">Seja voluntário</button>
    </section>
  `;
}

function renderProjetos() {
  app.innerHTML = `
    <section>
      <h2>Nossos projetos</h2>
      <p>Educação, apoio social e voluntariado.</p>
    </section>
  `;
}

function renderCadastro() {
  app.innerHTML = `
    <section>
      <h2>Cadastro</h2>
      <form>
        <input type="text" placeholder="Seu nome" />
        <button type="button">Enviar</button>
      </form>
    </section>
  `;
}

// 3) Função que decide qual conteúdo mostrar.
function renderPage(pagina) {
  if (pagina === "home") {
    renderHome();
  } else if (pagina === "projetos") {
    renderProjetos();
  } else if (pagina === "cadastro") {
    renderCadastro();
  }
}

// 4) Escuta o clique nos botões do menu.
document.addEventListener("click", (event) => {
  const botao = event.target.closest("[data-page]");

  if (!botao) return;

  const pagina = botao.dataset.page;
  renderPage(pagina);
});

// 5) Carrega a home assim que a página abrir.
renderPage("home");