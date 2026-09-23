const STORAGE_VOLUNTARIOS = "ong-voluntarios";
const STORAGE_GRAFICO_DADOS = "ong-dados";

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
  salvarLista(STORAGE_VOLUNTARIOS, voluntarios);
}

export function obterVoluntarios() {
  return lerLista(STORAGE_VOLUNTARIOS, []);
}

export function salvarDados(dados) {
  salvarLista(STORAGE_GRAFICO_DADOS, dados);
}

function salvarLista(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // Storage indisponivel: a interface continua funcionando sem persistencia.
  }
}

export function carregarDados() {
  return lerLista(STORAGE_GRAFICO_DADOS, [5, 8, 7, 10]);
}
