// ==========================================
// INICIALIZAÇÃO DO APLICATIVO
// Arquivo: js/inicializacao.js
// Responsável: Equipe de Coordenação
// ==========================================

/**
 * Função principal de inicialização
 * Executada quando o DOM estiver carregado
 */
function inicializarApp() {
  console.log('🚀 Iniciando JeniPass...');
  
  // Carrega estado salvo do localStorage
  carregarEstado();
  console.log('✅ Estado carregado do localStorage');
  
  // Verifica se usuário já está logado
  if (estadoApp.logado) {
    console.log('✅ Usuário já autenticado');
    
    // Esconde tela de login
    document.getElementById('telaLogin').classList.add('hidden');
    
    // Mostra barra de navegação
    document.getElementById('barraNavegacao').classList.remove('hidden');
    
    // Navega para tela de rotas
    navegarPara('rotas');
  } else {
    console.log('ℹ️ Aguardando login do usuário');
  }
  
  // Adiciona event listener para Enter no campo de senha
  const inputSenha = document.getElementById('inputSenha');
  if (inputSenha) {
    inputSenha.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        fazerLogin();
      }
    });
  }
  
  console.log('✅ JeniPass inicializado com sucesso!');
}

// Aguarda o DOM estar pronto antes de inicializar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarApp);
} else {
  inicializarApp();
}
