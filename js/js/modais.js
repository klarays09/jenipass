// ==========================================
// SISTEMA DE MODAIS
// Arquivo: js/modais.js
// Responsável: Equipe de Interface/Modais
// ==========================================

/**
 * Abre modal com descrição detalhada do local turístico
 */
function abrirModalDescricao(localId) {
  estadoApp.localSelecionado = localId;
  
  // Busca o local nas rotas
  let localEncontrado = null;
  rotasTuristicas.forEach(rota => {
    const local = rota.locais.find(l => l.id === localId);
    if (local) localEncontrado = local;
  });

  if (!localEncontrado) return;

  // Cria o modal dinamicamente
  const modal = document.getElementById('modalDescricaoLocal');
  modal.className = 'fixed inset-0 bg-black/50 flex items-end justify-center z-50 max-w-md mx-auto';
  modal.innerHTML = `
    <div class="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto modal-slide-up">
      <img src="${localEncontrado.imagem}" alt="${localEncontrado.nome}" class="w-full h-52 object-cover">
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-jeni-blue mb-4">Descrição do local</h3>
        <p class="text-gray-700 leading-relaxed mb-6">${localEncontrado.descricao}</p>
        
        <button 
          onclick="abrirScannerQR()"
          class="w-full bg-jeni-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-jeni-blue-dark transition-all flex items-center justify-center gap-2"
        >
          <i class="fas fa-qrcode text-xl"></i>
          Ganhar Jenicoins
        </button>
      </div>
    </div>
  `;
}

/**
 * Abre modal de validação de PIN (histórico)
 */
function abrirModalPin(indice) {
  estadoApp.indiceItemSelecionado = indice;
  const item = estadoApp.historico[indice];
  
  const modal = document.getElementById('modalPin');
  modal.className = 'fixed inset-0 bg-black/50 flex items-end justify-center z-50 max-w-md mx-auto';
  modal.innerHTML = `
    <div class="bg-white rounded-t-3xl w-full max-h-[80vh] overflow-y-auto modal-slide-up">
      <img src="${item.imagem}" alt="${item.nome}" class="w-full h-52 object-cover">
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-1">${item.nome}</h3>
        <p class="text-sm text-gray-600 mb-4">${item.descricao}</p>
        <p class="text-sm text-gray-700 mb-4">
          Vá até o estabelecimento e solicite o PIN para efetivar o seu desconto
        </p>
        
        <div class="mb-6">
          <label class="text-sm text-gray-600 mb-2 block">Código PIN</label>
          <input 
            type="text" 
            id="inputPin"
            placeholder="Digite o PIN fornecido"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jeni-blue uppercase text-center text-lg font-mono tracking-wider"
            maxlength="6"
          >
        </div>

        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <p class="text-xs text-yellow-800">
            <i class="fas fa-exclamation-triangle mr-1"></i>
            <strong>PIN correto:</strong> <span class="font-mono font-bold">${item.pin}</span>
          </p>
        </div>
        
        <button 
          onclick="validarPinDesconto()"
          class="w-full bg-jeni-blue text-white py-4 rounded-xl font-bold text-lg hover:bg-jeni-blue-dark transition-all"
        >
          Gerar desconto
        </button>
      </div>
    </div>
  `;
  
  // Adiciona event listener para Enter
  setTimeout(() => {
    document.getElementById('inputPin').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') validarPinDesconto();
    });
  }, 100);
}

/**
 * Valida o PIN digitado pelo usuário
 */
function validarPinDesconto() {
  const indice = estadoApp.indiceItemSelecionado;
  if (indice === null) return;

  const pinDigitado = document.getElementById('inputPin').value.trim().toUpperCase();
  const pinCorreto = estadoApp.historico[indice].pin;

  if (!pinDigitado) {
    alert('Digite o PIN fornecido pelo estabelecimento!');
    return;
  }

  if (pinDigitado !== pinCorreto) {
    alert(`PIN incorreto!\n\nPIN correto: ${pinCorreto}\n\nSolicite o PIN ao lojista.`);
    return;
  }

  // Marca como usado
  estadoApp.historico[indice].status = 'usado';
  estadoApp.historico[indice].dataUso = new Date().toISOString();
  
  salvarHistorico();
  document.getElementById('modalPin').className = 'hidden';
  renderizarHistorico();
  
  alert('✅ Desconto validado com sucesso!');
}

// Event listeners para fechar modais ao clicar fora
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(e) {
    const modais = ['modalDescricaoLocal', 'modalPin', 'modalScannerQR', 'modalCodigoManual'];
    modais.forEach(modalId => {
      const modal = document.getElementById(modalId);
      if (modal && e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
});
