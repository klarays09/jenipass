// ==========================================
// SISTEMA DE SCANNER QR CODE
// Arquivo: js/scanner.js
// Responsável: Equipe de Scanner/Validação
// ==========================================

/**
 * Abre o modal de scanner QR Code
 */
function abrirScannerQR() {
  // Fecha modal de descrição
  document.getElementById('modalDescricaoLocal').classList.add('hidden');
  
  // Abre modal de scanner
  const modal = document.getElementById('modalScannerQR');
  modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-50 max-w-md mx-auto';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-6 m-4 w-full max-w-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-gray-800">Escanear QR Code</h3>
        <button onclick="fecharScannerQR()" class="text-gray-400 hover:text-gray-600">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <p class="text-sm text-gray-600 mb-4">
        Aponte a câmera para o QR Code do local turístico
      </p>
      
      <!-- Simulação de câmera com scanner -->
      <div class="bg-gray-900 rounded-xl aspect-square flex items-center justify-center mb-4 relative overflow-hidden">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-48 h-48 border-4 border-jeni-orange rounded-lg relative">
            <div class="absolute top-0 left-0 right-0 h-1 bg-jeni-orange linha-scan"></div>
          </div>
        </div>
        <i class="fas fa-qrcode text-white/30 text-6xl"></i>
      </div>

      <p class="text-xs text-center text-gray-500 mb-4">
        <strong>Modo simulação:</strong> clique em um dos botões abaixo
      </p>

      <div class="space-y-2">
        <button 
          onclick="simularScanQR()"
          class="w-full bg-jeni-blue text-white py-3 rounded-xl font-semibold hover:bg-jeni-blue-dark transition-all flex items-center justify-center gap-2"
        >
          <i class="fas fa-qrcode"></i>
          Simular QR Code
        </button>
        
        <button 
          onclick="abrirInputCodigo()"
          class="w-full bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
        >
          <i class="fas fa-keyboard"></i>
          Digitar Código Manualmente
        </button>
      </div>
    </div>
  `;
}

/**
 * Fecha o modal de scanner
 */
function fecharScannerQR() {
  document.getElementById('modalScannerQR').classList.add('hidden');
}

/**
 * Simula a leitura de um QR Code
 */
function simularScanQR() {
  ganharJenicoinsLocal();
}

/**
 * Abre modal para digitação manual do código
 */
function abrirInputCodigo() {
  document.getElementById('modalScannerQR').classList.add('hidden');
  
  const modal = document.getElementById('modalCodigoManual');
  modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 max-w-md mx-auto';
  modal.innerHTML = `
    <div class="bg-white rounded-2xl p-6 m-4 w-full max-w-sm modal-slide-up">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold text-gray-800">Código do Local</h3>
        <button onclick="fecharInputCodigo()" class="text-gray-400 hover:text-gray-600">
          <i class="fas fa-times text-2xl"></i>
        </button>
      </div>
      
      <p class="text-sm text-gray-600 mb-4">
        Digite o código que está no local turístico
      </p>
      
      <input 
        type="text" 
        id="inputCodigoLocal"
        placeholder="Ex: LOC001"
        class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-jeni-blue uppercase text-center text-lg font-mono tracking-wider"
        maxlength="10"
      >

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
        <p class="text-xs text-blue-800">
          <i class="fas fa-info-circle mr-1"></i>
          <strong>Dica:</strong> O código de validação está disponível no local turístico
        </p>
      </div>

      <button 
        onclick="validarCodigoManual()"
        class="w-full bg-jeni-blue text-white py-3 rounded-xl font-bold hover:bg-jeni-blue-dark transition-all flex items-center justify-center gap-2"
      >
        <i class="fas fa-check"></i>
        Validar Código
      </button>
    </div>
  `;
  
  // Auto-focus no input e Enter para validar
  setTimeout(() => {
    const input = document.getElementById('inputCodigoLocal');
    input.focus();
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') validarCodigoManual();
    });
  }, 100);
}

/**
 * Fecha modal de código manual
 */
function fecharInputCodigo() {
  document.getElementById('modalCodigoManual').classList.add('hidden');
}

/**
 * Valida o código digitado manualmente
 */
function validarCodigoManual() {
  const codigoDigitado = document.getElementById('inputCodigoLocal').value.trim().toUpperCase();
  
  if (!codigoDigitado) {
    alert('Digite um código válido!');
    return;
  }

  // Busca o local pelo código
  let localEncontrado = null;
  rotasTuristicas.forEach(rota => {
    const local = rota.locais.find(l => l.codigo === codigoDigitado);
    if (local) localEncontrado = local;
  });

  if (!localEncontrado) {
    alert('❌ Código inválido!\n\nVerifique o código no local turístico.');
    return;
  }

  // Verifica se já visitou
  if (estadoApp.locaisVisitados.includes(localEncontrado.id)) {
    alert('Você já visitou este local!');
    fecharInputCodigo();
    return;
  }

  // Validação bem-sucedida
  estadoApp.localSelecionado = localEncontrado.id;
  fecharInputCodigo();
  ganharJenicoinsLocal();
}

/**
 * Adiciona Jenicoins ao visitar um local
 */
function ganharJenicoinsLocal() {
  const localId = estadoApp.localSelecionado;
  if (!localId) return;

  let localEncontrado = null;
  rotasTuristicas.forEach(rota => {
    const local = rota.locais.find(l => l.id === localId);
    if (local) localEncontrado = local;
  });

  if (!localEncontrado) return;

  if (estadoApp.locaisVisitados.includes(localId)) {
    alert('Você já visitou este local!');
    fecharScannerQR();
    return;
  }

  // Adiciona local aos visitados
  estadoApp.locaisVisitados.push(localId);
  estadoApp.saldo += localEncontrado.recompensa;
  
  salvarLocaisVisitados();
  salvarSaldo();
  atualizarSaldoEmTodasTelas();

  fecharScannerQR();
  
  // Re-renderiza tela de detalhe se estiver nela
  if (estadoApp.rotaSelecionada) {
    abrirDetalheRota(estadoApp.rotaSelecionada);
  }

  alert(`🎉 Parabéns!\n\nVocê ganhou ${localEncontrado.recompensa} Jenicoins por visitar ${localEncontrado.nome}!`);
}
