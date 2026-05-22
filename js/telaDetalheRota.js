// ==========================================
// TELA DE DETALHE DA ROTA
// Arquivo: js/telaDetalheRota.js
// Responsável: Equipe de Rotas
// ==========================================

/**
 * Abre a tela de detalhe de uma rota específica
 * @param {Object} rota - Objeto da rota selecionada
 */
function abrirDetalheRota(rota) {
  estadoApp.rotaSelecionada = rota;
  esconderTodasTelas();

  // Calcula progresso da rota
  const locaisVisitados = rota.locais.filter(local => 
    estadoApp.locaisVisitados.includes(local.id)
  ).length;
  const totalLocais = rota.locais.length;
  const porcentagem = Math.round((locaisVisitados / totalLocais) * 100);

  // Renderiza a tela
  const container = document.getElementById('telaDetalheRota');
  container.innerHTML = `
    <!-- Cabeçalho azul com nome da rota e saldo -->
    <div class="bg-jeni-blue text-white px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <button onclick="voltarParaRotas()" class="hover:bg-white/10 p-1 rounded-lg transition-all">
          <i class="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 class="text-base font-bold leading-tight">${rota.nome.replace(' aos ', ' aos<br>')}</h1>
      </div>
      <div class="bg-jeni-orange text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
        <i class="fas fa-coins text-sm"></i>
        <span id="saldoDetalhe" class="font-bold text-sm">9.999</span>
      </div>
    </div>

    <!-- Barra de progresso da rota -->
    <div class="px-4 pt-4 pb-3 bg-white">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-sm font-semibold text-gray-700">Progresso da Rota</h3>
        <span class="text-sm text-gray-500">${porcentagem}% concluído</span>
      </div>
      <div class="barra-progresso">
        <div class="barra-progresso-preenchida" style="width: ${porcentagem}%"></div>
      </div>
    </div>

    <!-- Título "Atrativos" -->
    <div class="px-4 pt-4 pb-3 bg-gray-50">
      <h3 class="text-lg font-bold text-gray-900">Atrativos</h3>
    </div>

    <!-- Lista de locais da rota -->
    <div id="listaLocaisRota" class="px-4 space-y-3 bg-gray-50 pb-4"></div>
  `;

  // Renderiza os locais da rota
  const containerLocais = document.getElementById('listaLocaisRota');

  rota.locais.forEach(local => {
    const jaVisitado = estadoApp.locaisVisitados.includes(local.id);
    
    const cardLocal = document.createElement('div');
    cardLocal.className = 'bg-white rounded-xl shadow-sm overflow-hidden';

    cardLocal.innerHTML = `
      <div class="flex gap-3 p-3">
        <img src="${local.imagem}" alt="${local.nome}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-gray-900 mb-1">${local.nome}</h4>
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-jeni-orange text-white text-xs px-2 py-1 rounded-full font-semibold inline-flex items-center gap-1">
              Ganhe ${local.recompensa} Jenicoins
            </span>
          </div>
          ${!jaVisitado ? `
            <button 
              onclick="event.stopPropagation(); abrirModalDescricao('${local.id}')"
              class="text-jeni-blue text-sm font-semibold hover:underline"
            >
              Ver detalhes →
            </button>
          ` : `
            <span class="text-sm text-gray-500">
              <i class="fas fa-check-circle text-green-600 mr-1"></i>Local visitado
            </span>
          `}
        </div>
      </div>
    `;

    containerLocais.appendChild(cardLocal);
  });

  document.getElementById('telaDetalheRota').classList.remove('hidden');
  atualizarSaldoEmTodasTelas();
}

/**
 * Volta para a tela de listagem de rotas
 */
function voltarParaRotas() {
  estadoApp.rotaSelecionada = null;
  navegarPara('rotas');
}
