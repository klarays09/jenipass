// ==========================================
// TELA DE CATÁLOGO DE RECOMPENSAS
// Arquivo: js/telaCatalogo.js
// Responsável: Equipe de Catálogo/Recompensas
// ==========================================

/**
 * Muda a aba ativa no catálogo (Selo Cultural / Serviços)
 */
function mudarAbaCatalogo(aba) {
  estadoApp.abaCatalogoAtiva = aba;
  
  if (aba === 'cultural') {
    document.getElementById('abaCultural').className = 'flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-jeni-blue text-jeni-blue transition-colors';
    document.getElementById('abaServicos').className = 'flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 transition-colors';
  } else {
    document.getElementById('abaServicos').className = 'flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-jeni-blue text-jeni-blue transition-colors';
    document.getElementById('abaCultural').className = 'flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 transition-colors';
  }

  renderizarGridRecompensas();
}

/**
 * Renderiza o grid de recompensas baseado na aba ativa
 */
function renderizarGridRecompensas() {
  const container = document.getElementById('gridRecompensas');
  container.innerHTML = '';

  const itens = estadoApp.abaCatalogoAtiva === 'cultural' 
    ? recompensasCulturais 
    : recompensasServicos;

  itens.forEach(item => {
    const jaResgatado = estadoApp.historico.some(h => h.id === item.id);

    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-sm overflow-hidden';

    card.innerHTML = `
      <img src="${item.imagem}" alt="${item.nome}" class="w-full h-32 object-cover">
      <div class="p-3">
        <h4 class="font-bold text-gray-900 text-sm mb-1">${item.nome}</h4>
        <p class="text-xs text-gray-600 mb-3">${item.descricao}</p>
        <div class="flex items-center justify-center mb-3">
          <span class="bg-jeni-orange text-white text-sm px-3 py-1 rounded-full font-bold">
            ${item.preco} Jenicoins
          </span>
        </div>
        ${jaResgatado ? `
          <button 
            disabled
            class="w-full bg-jeni-green text-white py-2.5 rounded-lg text-sm font-bold cursor-not-allowed"
          >
            Resgatado
          </button>
        ` : `
          <button 
            onclick="resgatarItem('${item.id}')"
            class="w-full bg-jeni-orange text-white py-2.5 rounded-lg text-sm font-bold hover:bg-orange-600 transition-all"
          >
            Resgatar
          </button>
        `}
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Renderiza a tela completa do catálogo
 */
function renderizarCatalogo() {
  const container = document.getElementById('telaCatalogo');
  
  container.innerHTML = `
    <!-- Cabeçalho azul -->
    <div class="bg-jeni-blue text-white px-4 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold">Catálogo</h1>
      <div class="bg-jeni-orange text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
        <i class="fas fa-coins text-sm"></i>
        <span id="saldoCatalogo" class="font-bold text-sm">9.999</span>
      </div>
    </div>

    <!-- Mensagem de feedback (toast inline) -->
    <div id="mensagemResgate" class="hidden bg-white border-b border-gray-200 px-4 py-3">
      <p id="textoMensagemResgate" class="text-sm text-gray-700"></p>
    </div>

    <!-- Abas: Selo Cultural / Serviços e Comércios -->
    <div class="flex bg-white border-b border-gray-200">
      <button 
        id="abaCultural"
        onclick="mudarAbaCatalogo('cultural')"
        class="flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-jeni-blue text-jeni-blue transition-colors"
      >
        Selo Cultural
      </button>
      <button 
        id="abaServicos"
        onclick="mudarAbaCatalogo('servicos')"
        class="flex-1 pb-3 pt-4 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 transition-colors"
      >
        Serviços e Comércios
      </button>
    </div>

    <!-- Grid de recompensas -->
    <div id="gridRecompensas" class="grid grid-cols-2 gap-3 p-4 bg-gray-50"></div>
  `;

  renderizarGridRecompensas();
}

/**
 * Resgata uma recompensa do catálogo
 */
function resgatarItem(itemId) {
  const todasRecompensas = [...recompensasCulturais, ...recompensasServicos];
  const item = todasRecompensas.find(i => i.id === itemId);
  
  if (!item) return;

  // Valida saldo
  if (estadoApp.saldo < item.preco) {
    mostrarMensagemResgate('Saldo insuficiente para este resgate.');
    return;
  }

  // Verifica se já foi resgatado
  if (estadoApp.historico.some(h => h.id === itemId)) {
    mostrarMensagemResgate('Você já resgatou este item!');
    return;
  }

  // Deduz saldo
  estadoApp.saldo -= item.preco;
  salvarSaldo();

  // Adiciona ao histórico
  const registro = {
    ...item,
    dataResgate: new Date().toISOString(),
    status: 'ativo',
    pin: gerarPin()
  };
  estadoApp.historico.unshift(registro);
  salvarHistorico();

  // Atualiza interface
  atualizarSaldoEmTodasTelas();
  renderizarGridRecompensas();

  mostrarMensagemResgate('Efetive seu resgate na área de histórico');
}

/**
 * Mostra mensagem de feedback no catálogo
 */
function mostrarMensagemResgate(texto) {
  const mensagem = document.getElementById('mensagemResgate');
  const textoMensagem = document.getElementById('textoMensagemResgate');
  
  textoMensagem.textContent = texto;
  mensagem.classList.remove('hidden');

  setTimeout(() => {
    mensagem.classList.add('hidden');
  }, 4000);
}
