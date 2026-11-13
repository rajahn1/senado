const votes = [
  { party: "Republicanos", state: "AC", name: "Alan Rick", vote: "NÃO" },
  { party: "MDB", state: "SE", name: "Alessandro Vieira", vote: "NÃO" },
  { party: "PSB", state: "MA", name: "Ana Paula Lobato", vote: "SIM" },
  { party: "PL", state: "SP", name: "Astr. Marcos Pontes", vote: "NÃO" },
  { party: "PT", state: "PA", name: "Beto Faro", vote: "SIM" },
  { party: "PT", state: "CE", name: "Camilo Santana", vote: "SIM" },
  { party: "PSD", state: "MT", name: "Carlos Fávaro", vote: "SIM" },
  { party: "PL", state: "RJ", name: "Carlos Portinho", vote: "NÃO" },
  { party: "PSD", state: "MG", name: "Carlos Viana", vote: "NÃO" },
  { party: "PSB", state: "RR", name: "Chico Rodrigues", vote: "SIM" },
  { party: "PSB", state: "CE", name: "Cid Gomes", vote: "SIM" },
  { party: "Progressistas", state: "PI", name: "Ciro Nogueira", vote: "NÃO" },
  { party: "Republicanos", state: "MG", name: "Cleitinho", vote: "NÃO" },
  { party: "MDB", state: "RO", name: "Confúcio Moura", vote: "SIM" },
  { party: "Republicanos", state: "DF", name: "Damares Alves", vote: "NÃO" },
  { party: "Progressistas", state: "PB", name: "Daniella Ribeiro", vote: "SIM" },
  { party: "Progressistas", state: "RR", name: "Dr. Hiran", vote: "NÃO" },
  { party: "PSDB", state: "AL", name: "Dra. Eudócia", vote: "SIM" },
  { party: "MDB", state: "AM", name: "Eduardo Braga", vote: "SIM" },
  { party: "PL", state: "TO", name: "Eduardo Gomes", vote: "NÃO" },
  { party: "PL", state: "PB", name: "Efraim Filho", vote: "NÃO" },
  { party: "PSD", state: "MA", name: "Eliziane Gama", vote: "SIM" },
  { party: "Progressistas", state: "SC", name: "Esperidião Amin", vote: "NÃO" },
  { party: "PT", state: "ES", name: "Fabiano Contarato", vote: "SIM" },
  { party: "PSD", state: "PE", name: "Fernando Dueire", vote: "SIM" },
  { party: "PSB", state: "PR", name: "Flávio Arns", vote: "NÃO" },
  { party: "PL", state: "RJ", name: "Flávio Bolsonaro", vote: "NÃO" },
  { party: "Republicanos", state: "RS", name: "Hamilton Mourão", vote: "NÃO" },
  { party: "PT", state: "PE", name: "Humberto Costa", vote: "SIM" },
  { party: "PSD", state: "TO", name: "Irajá", vote: "SIM" },
  { party: "MDB", state: "SC", name: "Ivete da Silveira", vote: "SIM" },
  { party: "PL", state: "DF", name: "Izalci Lucas", vote: "NÃO" },
  { party: "MDB", state: "PA", name: "Jader Barbalho", vote: "SIM" },
  { party: "PL", state: "RO", name: "Jaime Bagattoli", vote: "NÃO" },
  { party: "PT", state: "BA", name: "Jaques Wagner", vote: "SIM" },
  { party: "UNIÃO", state: "MT", name: "Jayme Campos", vote: "SIM" },
  { party: "PSB", state: "GO", name: "Jorge Kajuru", vote: "SIM" },
  { party: "PL", state: "SC", name: "Jorge Seif", vote: "NÃO" },
  { party: "PSD", state: "PI", name: "Jussara Lima", vote: "SIM" },
  { party: "Progressistas", state: "SE", name: "Laércio Oliveira", vote: "NÃO" },
  { party: "PSB", state: "DF", name: "Leany Lemos", vote: "SIM" },
  { party: "PSD", state: "AP", name: "Lucas Barreto", vote: "NÃO" },
  { party: "Progressistas", state: "RS", name: "Luis Carlos Heinze", vote: "NÃO" },
  { party: "PL", state: "ES", name: "Magno Malta", vote: "NÃO" },
  { party: "PSD", state: "SP", name: "Mara Gabrilli", vote: "NÃO" },
  { party: "MDB", state: "PI", name: "Marcelo Castro", vote: "SIM" },
  { party: "PL", state: "AC", name: "Marcio Bittar", vote: "NÃO" },
  { party: "AVANTE", state: "ES", name: "Marcos do Val", vote: "NÃO" },
  { party: "PL", state: "RO", name: "Marcos Rogério", vote: "NÃO" },
  { party: "PSD", state: "MS", name: "Nelsinho Trad", vote: "NÃO" },
  { party: "PSD", state: "AM", name: "Omar Aziz", vote: "SIM" },
  { party: "PSDB", state: "PR", name: "Oriovisto Guimarães", vote: "NÃO" },
  { party: "PSD", state: "BA", name: "Otto Alencar", vote: "SIM" },
  { party: "PT", state: "RS", name: "Paulo Paim", vote: "SIM" },
  { party: "PSDB", state: "AM", name: "Plínio Valério", vote: "SIM" },
  { party: "UNIÃO", state: "TO", name: "Prof. Dorinha Seabra", vote: "SIM" },
  { party: "PT", state: "AP", name: "Randolfe Rodrigues", vote: "SIM" },
  { party: "MDB", state: "AL", name: "Renan Calheiros", vote: "SIM" },
  { party: "MDB", state: "AL", name: "Renan Filho", vote: "SIM" },
  { party: "Progressistas", state: "MG", name: "Renzo Braz", vote: "NÃO" },
  { party: "Republicanos", state: "RR", name: "Roberta Acioly", vote: "NÃO" },
  { party: "PT", state: "SE", name: "Rogério Carvalho", vote: "SIM" },
  { party: "PL", state: "RN", name: "Rogério Marinho", vote: "NÃO" },
  { party: "Sem partido", state: "RJ", name: "Romário", vote: "SIM" },
  { party: "PSDB", state: "CE", name: "Sargento Reginauro", vote: "NÃO" },
  { party: "PL", state: "PR", name: "Sergio Moro", vote: "NÃO" },
  { party: "PSD", state: "AC", name: "Sérgio Petecão", vote: "SIM" },
  { party: "PSB", state: "MS", name: "Soraya Thronicke", vote: "SIM" },
  { party: "Podemos", state: "RN", name: "Styvenson Valentim", vote: "SIM" },
  { party: "PT", state: "PE", name: "Teresa Leitão", vote: "SIM" },
  { party: "Progressistas", state: "MS", name: "Tereza Cristina", vote: "NÃO" },
  { party: "PSD", state: "GO", name: "Vanderlan Cardoso", vote: "NÃO" },
  { party: "MDB", state: "PB", name: "Veneziano Vital Rêgo", vote: "SIM" },
  { party: "PL", state: "MT", name: "Wellington Fagundes", vote: "NÃO" },
  { party: "PDT", state: "MA", name: "Weverton", vote: "SIM" },
  { party: "PL", state: "GO", name: "Wilder Morais", vote: "NÃO" },
  { party: "PSD", state: "RN", name: "Zenaide Maia", vote: "SIM" },
  { party: "Podemos", state: "PA", name: "Zequinha Marinho", vote: "NÃO" },
];

const orientations = [
  { label: "PL", vote: "NÃO" },
  { label: "PSD", vote: "SIM" },
  { label: "MDB", vote: "SIM" },
  { label: "PT", vote: "SIM" },
  { label: "Progressistas", vote: "NÃO" },
  { label: "Republicanos", vote: "NÃO" },
  { label: "PSDB", vote: "NÃO" },
  { label: "Governo", vote: "SIM" },
  { label: "Oposição", vote: "NÃO" },
];

const elements = {
  body: document.querySelector("#votes-body"),
  search: document.querySelector("#search-input"),
  party: document.querySelector("#party-filter"),
  vote: document.querySelector("#vote-filter"),
  clear: document.querySelector("#clear-filters"),
  count: document.querySelector("#result-count"),
  empty: document.querySelector("#empty-state"),
  orientation: document.querySelector("#orientation-list"),
};

const normalize = (text) =>
  text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

function votePill(vote) {
  const modifier = vote === "SIM" ? "yes" : "no";
  return `<span class="vote-pill vote-pill--${modifier}">${vote}</span>`;
}

function renderOrientations() {
  elements.orientation.innerHTML = orientations
    .map(
      (item) => `
        <div class="orientation-item">
          <strong>${item.label}</strong>
          ${votePill(item.vote)}
        </div>`,
    )
    .join("");
}

function populatePartyFilter() {
  const parties = [...new Set(votes.map((item) => item.party))].sort((a, b) =>
    a.localeCompare(b, "pt-BR"),
  );

  parties.forEach((party) => {
    const option = document.createElement("option");
    option.value = party;
    option.textContent = party;
    elements.party.appendChild(option);
  });
}

function filteredVotes() {
  const query = normalize(elements.search.value.trim());
  return votes.filter((item) => {
    const matchesName = !query || normalize(item.name).includes(query);
    const matchesParty = elements.party.value === "todos" || item.party === elements.party.value;
    const matchesVote = elements.vote.value === "todos" || item.vote === elements.vote.value;
    return matchesName && matchesParty && matchesVote;
  });
}

function renderVotes() {
  const filtered = filteredVotes();
  elements.body.innerHTML = filtered
    .map(
      (item) => `
        <tr>
          <td>${item.name}</td>
          <td class="party-cell">${item.party}</td>
          <td class="uf-cell">${item.state}</td>
          <td>${votePill(item.vote)}</td>
        </tr>`,
    )
    .join("");

  const noun = filtered.length === 1 ? "voto exibido" : "votos exibidos";
  elements.count.textContent = `${filtered.length} ${noun}`;
  elements.empty.hidden = filtered.length !== 0;
}

function clearFilters() {
  elements.search.value = "";
  elements.party.value = "todos";
  elements.vote.value = "todos";
  renderVotes();
}

function aggregateByParty() {
  const grouped = new Map();

  votes.forEach(({ party, vote }) => {
    if (!grouped.has(party)) grouped.set(party, { party, yes: 0, no: 0 });
    const group = grouped.get(party);
    if (vote === "SIM") group.yes += 1;
    if (vote === "NÃO") group.no += 1;
  });

  return [...grouped.values()].sort((a, b) => b.yes + b.no - (a.yes + a.no));
}

function initChart() {
  const container = document.querySelector("#party-chart");
  const fallback = document.querySelector("#chart-fallback");

  if (!window.echarts) {
    container.hidden = true;
    fallback.hidden = false;
    return;
  }

  const data = aggregateByParty();
  const chart = echarts.init(container, null, { renderer: "canvas" });
  chart.setOption({
    animationDuration: 700,
    textStyle: { fontFamily: "Arial, Helvetica, sans-serif", color: "#101b2d" },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "#091f38",
      borderWidth: 0,
      textStyle: { color: "#ffffff" },
      formatter(params) {
        const yes = params.find((item) => item.seriesName === "Sim")?.value || 0;
        const no = params.find((item) => item.seriesName === "Não")?.value || 0;
        const total = yes + no;
        return `<strong>${params[0].axisValue}</strong><br/>Sim: ${yes}<br/>Não: ${no}<br/>Total: ${total}`;
      },
    },
    toolbox: {
      right: 8,
      bottom: 2,
      feature: {
        saveAsImage: { title: "Baixar gráfico", pixelRatio: 2 },
        restore: { title: "Restaurar" },
      },
      iconStyle: { borderColor: "#5d6673" },
      emphasis: { iconStyle: { borderColor: "#123358" } },
    },
    grid: { left: 18, right: 35, top: 58, bottom: 42, containLabel: true },
    xAxis: {
      type: "value",
      minInterval: 1,
      axisLabel: { color: "#6a7078" },
      splitLine: { lineStyle: { color: "#e5e5df" } },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: data.map((item) => item.party),
      axisLabel: { color: "#101b2d", fontSize: 12, margin: 13 },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [
      {
        name: "Sim",
        type: "bar",
        stack: "total",
        barMaxWidth: 22,
        itemStyle: { color: "#16845b" },
        emphasis: { focus: "series" },
        data: data.map((item) => item.yes),
      },
      {
        name: "Não",
        type: "bar",
        stack: "total",
        barMaxWidth: 22,
        itemStyle: { color: "#c7463a" },
        emphasis: { focus: "series" },
        data: data.map((item) => item.no),
      },
    ],
  });

  chart.on("click", (params) => {
    if (!params.name) return;
    elements.party.value = params.name;
    renderVotes();
    document.querySelector("#lista-votos").scrollIntoView({ behavior: "smooth" });
  });

  window.addEventListener("resize", () => chart.resize());
}

[elements.search, elements.party, elements.vote].forEach((control) => {
  control.addEventListener("input", renderVotes);
});
elements.clear.addEventListener("click", clearFilters);

renderOrientations();
populatePartyFilter();
renderVotes();
initChart();
