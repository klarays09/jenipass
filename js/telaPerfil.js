// ==========================================
// TELA DE PERFIL DO USUÁRIO
// Arquivo: js/telaPerfil.js
// Responsável: Equipe de Perfil
// ==========================================

/**
 * Renderiza a tela de perfil do usuário
 */
function renderizarPerfil() {
  const container = document.getElementById('telaPerfil');
  
  container.innerHTML = `
    <!-- Cabeçalho azul -->
    <div class="bg-jeni-blue text-white px-4 py-4">
      <h1 class="text-xl font-bold">Perfil</h1>
    </div>

    <div class="p-4 bg-gray-50 min-h-screen">
      <!-- Card do usuário -->
      <div class="bg-white rounded-xl p-6 mb-4 shadow-sm">
        <div class="flex items-center gap-4 mb-4">
          <div class="w-16 h-16 bg-jeni-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
            <i class="fas fa-user"></i>
          </div>
          <div>
            <h2 class="text-xl font-bold text-gray-800">Turista</h2>
            <p class="text-sm text-gray-600">Explorador Cultural</p>
          </div>
        </div>
        
        <div class="bg-gray-50 rounded-xl p-4 flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-600">Saldo Total</p>
            <p id="saldoPerfil" class="text-2xl font-bold text-jeni-blue">9.999 Jenicoins</p>
          </div>
          <i class="fas fa-coins text-jeni-orange text-4xl"></i>
        </div>
      </div>

      <!-- Estatísticas -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <p class="text-sm text-gray-600 mb-1">Locais Visitados</p>
          <p id="totalLocaisVisitados" class="text-2xl font-bold text-gray-800">${estadoApp.locaisVisitados.length}</p>
        </div>
        <div class="bg-white rounded-xl p-4 shadow-sm">
          <p class="text-sm text-gray-600 mb-1">Resgates</p>
          <p id="totalResgates" class="text-2xl font-bold text-gray-800">${estadoApp.historico.length}</p>
        </div>
      </div>

      <!-- Botão de logout -->
      <button 
        onclick="fazerLogout()"
        class="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all shadow-sm flex items-center justify-center gap-2"
      >
        <i class="fas fa-sign-out-alt"></i>
        Sair da Conta
      </button>
    </div>
  `;
}
