// ==========================================
// TELA DE HISTÓRICO DE RESGATES
// Arquivo: js/telaHistorico.js
// Responsável: Equipe de Histórico
// ==========================================

/**
 * Renderiza a tela de histórico de resgates
 */
function renderizarHistorico() {
  const container = document.getElementById('telaHistorico');
  
  container.innerHTML = `
    <!-- Cabeçalho azul -->
    <div class="bg-jeni-blue text-white px-4 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold">Histórico</h1>
      <div class="bg-jeni-orange text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
        <i class="fas fa-coins text-sm"></i>
        <span id="saldoHistorico" class="font-bold text-sm">9.999</span>
      </div>
    </div>

    <!-- Lista de resgates -->
    <div id="listaHistorico" class="p-4 space-y-3 bg-gray-50 min-h-screen"></div>

    <!-- Mensagem quando vazio -->
    <div id="historicoVazio" class="hidden text-center py-12 px-4">
      <i class="fas fa-inbox text-gray-300 text-6xl mb-3"></i>
      <p class="text-gray-500">Você ainda não resgatou nenhuma recompensa</p>
    </div>
  `;

  const listaHistorico = document.getElementById('listaHistorico');
  const mensagemVazia = document.getElementById('historicoVazio');

  // Verifica se há itens no histórico
  if (estadoApp.historico.length === 0) {
    listaHistorico.classList.add('hidden');
    mensagemVazia.classList.remove('hidden');
    return;
  }

  listaHistorico.classList.remove('hidden');
  mensagemVazia.classList.add('hidden');

  // Renderiza cada item do histórico
  estadoApp.historico.forEach((item, indice) => {
    const data = new Date(item.dataResgate);
    const dataFormatada = data.toLocaleDateString('pt-BR');

    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-sm overflow-hidden';
    
    // Só permite clicar se estiver ativo
    if (item.status === 'ativo') {
      card.onclick = () => abrirModalPin(indice);
      card.classList.add('cursor-pointer', 'hover:shadow-md', 'transition-all');
    }

    card.innerHTML = `
      <div class="flex gap-3 p-3">
        <img src="${item.imagem}" alt="${item.nome}" class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
        <div class="flex-1 min-w-0">
          <div class="flex items-start justify-between mb-1">
            <h4 class="font-bold text-gray-900 text-sm">${item.nome}</h4>
            <span class="text-xs px-2 py-1 rounded-full font-semibold ${
              item.status === 'usado' 
                ? 'bg-gray-200 text-gray-600' 
                : 'bg-green-100 text-green-700'
            }">
              ${item.status === 'usado' ? 'Usado' : 'Ativo'}
            </span>
          </div>
          <p class="text-xs text-gray-600 mb-1">${item.descricao}</p>
          <p class="text-xs text-gray-500">${item.validade}</p>
          ${item.status === 'usado' && item.dataUso ? `
            <p class="text-xs text-gray-500 mt-1">Usado dia ${new Date(item.dataUso).toLocaleDateString('pt-BR')}</p>
          ` : ''}
        </div>
      </div>
    `;

    listaHistorico.appendChild(card);
  });
}
