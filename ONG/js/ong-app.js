import {
  obterVoluntarios,
  salvarVoluntarios
} from "./storage.js";
import {
  atualizarGraficoComDados,
  inicializarGrafico
} from "./grafico.js";

const imagemEsperanca = import.meta.env.PROD
  ? "./imagens/bird.avif"
  : "../imagens/bird.avif";

const routes = {
  home: () => `
    <section id="apresentacao" class="hero">
      <div class="hero-text">
        <p class="tag">Quem somos</p>
        <h1>ONG Esperança</h1>
        <p>
          Somos uma organização dedicada a promover projetos sociais,
          educacionais e de apoio comunitário para transformar vidas.
        </p>
        <a class="btn" href="#/cadastro">Seja voluntário</a>
      </div>

      <div class="imagem-container">
        <img src="${imagemEsperanca}" alt="Pássaro colorido representando esperança e liberdade">
      </div>
    </section>

    <section class="container mt-4">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2 class="card-title">Atividades da ONG</h2>
          <canvas id="ongChart" height="120"></canvas>
          <button class="btn mt-3" type="button" data-atualizar-grafico>
            Atualizar gráfico
          </button>
        </div>
      </div>
    </section>

    <section id="contato" class="contato">
      <h2>Entre em Contato</h2>
      <p><strong>Email:</strong> contato@ongesperanca.org</p>
      <p><strong>Telefone:</strong> (11) 1234-5678</p>
      <p><strong>Endereço:</strong> Rua Exemplo, 123 - São Paulo/SP</p>
    </section>
  `,

  projetos: () => `
    <section class="projetos">
      <h1>Nossos projetos</h1>

      <div class="feedback feedback--success" role="status">
        <strong>Novidade:</strong> confira as iniciativas abertas para participação da comunidade.
      </div>

      <div class="cards">
        <article class="card">
          <span class="badge badge--educacao">Educação</span>
          <h2>Educação</h2>
          <p>Projeto de reforço escolar para crianças e adolescentes, com apoio pedagógico e atividades lúdicas.</p>
        </article>

        <article class="card">
          <span class="badge badge--assistencia">Assistência</span>
          <h2>Assistência social</h2>
          <p>Ações de apoio a famílias em situação de vulnerabilidade, incluindo alimentação, orientação e acolhimento.</p>
        </article>

        <article class="card">
          <span class="badge badge--voluntariado">Voluntariado</span>
          <h2>Voluntariado</h2>
          <p>Espaço para pessoas que desejam contribuir com seu tempo, habilidades e solidariedade para a comunidade.</p>
        </article>
      </div>

      <button class="btn" type="button" data-modal-open>Como participar</button>

      <dialog class="modal" data-modal>
        <div class="modal__content">
          <button class="modal__close" type="button" aria-label="Fechar orientações" data-modal-close>&times;</button>
          <p class="tag">Participação comunitária</p>
          <h2>Faça parte da transformação</h2>
          <p>Cadastre-se como voluntário e ajude a ampliar o impacto dos nossos projetos.</p>
          <a class="btn" href="#/cadastro">Ir para cadastro</a>
        </div>
      </dialog>

      <div class="toast" role="status" aria-live="polite" data-toast>
        Informações carregadas com sucesso.
      </div>
    </section>
  `,

  cadastro: () => `
    <section class="form-section">
      <h1>Cadastro de Voluntários</h1>

      <div class="feedback feedback--error" role="alert" aria-live="assertive" data-form-alert hidden></div>

      <form class="formulario">
        <fieldset>
          <legend>Dados pessoais</legend>

          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>

          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="seuemail@email.com" required>

          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" placeholder="(11) 99999-9999" required>
        </fieldset>

        <button type="submit" class="btn">Enviar cadastro</button>
      </form>

      <div class="toast" role="status" aria-live="polite" data-toast>
        Cadastro enviado com sucesso.
      </div>
    </section>
  `
};

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "").trim();

  if (hash in routes) {
    return hash;
  }

  return "home";
}

function atualizarMenu() {
  const links = document.querySelectorAll(".menu a");

  links.forEach((link) => {
    const rota = link.getAttribute("href")?.replace("#/", "") ?? "";
    const ativo = window.location.hash === `#/${rota}`;
    link.setAttribute("aria-current", ativo ? "page" : "false");
  });
}

function configurarFormulario() {
  const formulario = document.querySelector(".formulario");

  if (!formulario) return;

  formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = formulario.querySelector("#nome")?.value.trim() ?? "";
    const email = formulario.querySelector("#email")?.value.trim() ?? "";
    const telefone = formulario.querySelector("#telefone")?.value.trim() ?? "";
    const regex = /^\([0-9]{2}\)\s[0-9]{4,5}-[0-9]{4}$/;
    const feedback = document.querySelector("[data-form-alert]");
    const toast = document.querySelector("[data-toast]");

    if (!regex.test(telefone)) {
      if (feedback) {
        feedback.textContent = "Telefone inválido. Use o formato (11) 99999-9999.";
        feedback.hidden = false;
      }
      return;
    }

    const voluntarios = obterVoluntarios();
    voluntarios.push({ nome, email, telefone });
    salvarVoluntarios(voluntarios);

    if (feedback) {
      feedback.hidden = true;
    }

    if (toast) {
      toast.textContent = "Cadastro enviado com sucesso.";
      toast.classList.add("is-visible");
      setTimeout(() => toast.classList.remove("is-visible"), 3500);
    }
  });
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-atualizar-grafico]")) {
    atualizarGraficoComDados();
  }

  if (event.target.closest("[data-toggle-theme]")) {
    const controleTema = event.target.closest("[data-toggle-theme]");
    const altoContrasteAtivo = document.body.classList.toggle("alto-contraste");

    controleTema.setAttribute("aria-pressed", String(altoContrasteAtivo));
    controleTema.textContent = altoContrasteAtivo ? "Tema original" : "Alto contraste";
  }
});

function configurarModal() {
  const modal = document.querySelector("[data-modal]");
  const abrirModal = document.querySelector("[data-modal-open]");
  const fecharModal = document.querySelector("[data-modal-close]");

  if (!modal) return;

  abrirModal?.addEventListener("click", () => modal.showModal());
  fecharModal?.addEventListener("click", () => modal.close());

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

function renderizarRota() {
  const app = document.querySelector("#app");
  const rota = getRouteFromHash();

  if (!app) return;

  app.innerHTML = routes[rota]();
  atualizarMenu();
  configurarFormulario();
  configurarModal();

  if (rota === "home") {
    inicializarGrafico();
  }
}

window.addEventListener("hashchange", renderizarRota);

window.addEventListener("DOMContentLoaded", () => {
  const voluntarios = obterVoluntarios();
  console.log("Cadastros salvos:", voluntarios);

  if (!window.location.hash) {
    window.location.hash = "#/home";
  }

  renderizarRota();
});
