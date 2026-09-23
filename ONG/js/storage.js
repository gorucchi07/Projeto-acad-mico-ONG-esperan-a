const STORAGE_KEY = "ong-voluntarios";
const STORAGE_GRAFICO = "ong-dados";

function lerLista(chave, valorPadrao) {
  try {
    const dados = localStorage.getItem(chave);

    if (!dados) return valorPadrao;

    const valor = JSON.parse(dados);
    return Array.isArray(valor) ? valor : valorPadrao;
  } catch {
    try {
      localStorage.removeItem(chave);
    } catch {
      // Storage indisponivel: use o valor padrao em memoria.
    }
    return valorPadrao;
  }
}

export function salvarVoluntarios(voluntarios) {
  salvarLista(STORAGE_KEY, voluntarios);
}

export function obterVoluntarios() {
  return lerLista(STORAGE_KEY, []);
}

export function salvarDados(dados) {
  salvarLista(STORAGE_GRAFICO, dados);
}

function salvarLista(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // Storage indisponivel: a interface continua funcionando sem persistencia.
  }
}

export function carregarDados() {
  return lerLista(STORAGE_GRAFICO, [5, 8, 7, 10]);
}
