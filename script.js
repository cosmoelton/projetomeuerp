function app() {
  return {
    menuAberto: true,
    larguraSidebar: "w-64",
    totalProdutos: 150,
    totalVendas: 25000.0,
    totalClientesAtivos: 45,

    init() {
      // Inicializa os gráficos
      this.inicializarGraficoVendas();
      this.inicializarGraficoFluxo();
    },

    inicializarGraficoVendas() {
      const ctx = document.getElementById("graficoVendas");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            datasets: [
              {
                label: "Vendas por Mês",
                data: [12000, 19000, 15000, 25000, 22000, 30000],
                borderColor: "rgb(22 163 74)",
                tension: 0.1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    },

    inicializarGraficoFluxo() {
      const ctx = document.getElementById("graficoFluxo");
      if (ctx) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["Entradas", "Saídas", "Saldo"],
            datasets: [
              {
                label: "Fluxo de Caixa",
                data: [50000, 30000, 20000],
                backgroundColor: [
                  "rgb(22 163 74)",
                  "rgb(220 38 38)",
                  "rgb(59 130 246)",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      }
    },
  };
}
