import { carregarDados, salvarDados } from "./storage.js";

export function inicializarGrafico() {
  const canvas = document.getElementById("ongChart");

  if (!canvas || typeof Chart === "undefined") return;

  new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr"],
      datasets: [{
        label: "Projetos realizados",
        data: carregarDados(),
        backgroundColor: ["#2f5d50", "#6d865a", "#c28a3d", "#385d5a"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true
        }
      }
    }
  });
}

export function atualizarGraficoComDados() {
  const dados = [6, 9, 11, 13];
  salvarDados(dados);

  const canvas = document.getElementById("ongChart");
  if (!canvas || typeof Chart === "undefined") return;

  const chart = Chart.getChart(canvas);
  if (chart) {
    chart.data.datasets[0].data = dados;
    chart.update();
  }
}
