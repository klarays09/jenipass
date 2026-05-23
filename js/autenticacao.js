// ==========================================
// SISTEMA DE AUTENTICAÇÃO
// Arquivo: js/autenticacao.js
// Responsável: Equipe de Login/Segurança
// ==========================================

/**
 * Realiza o login do usuário
 * Para o MVP, aceita qualquer credencial
 */
function fazerLogin() {
  const usuario = document.getElementById('inputUsuario').value.trim();
  const senha = document.getElementById('inputSenha').value.trim();

  // Validação básica
  if (!usuario || !senha) {
    alert('⚠️ Preencha todos os campos');
    return;
  }

  // Salva estado de login
  localStorage.setItem('jenipass_logado', 'true');
  estadoApp.logado = true;
  
  // Esconde tela de login
  document.getElementById('telaLogin').classList.add('hidden');
  
  // Mostra barra de navegação
  document.getElementById('barraNavegacao').classList.remove('hidden');
  
  // Navega para tela de rotas
  navegarPara('rotas');
}

/**
 * Realiza o logout do usuário
 */
function fazerLogout() {
  // Confirmação antes de sair
  if (confirm('Deseja realmente sair da sua conta?')) {
    // Remove estado de login
    localStorage.removeItem('jenipass_logado');
    estadoApp.logado = false;
    
    // Esconde barra de navegação
    document.getElementById('barraNavegacao').classList.add('hidden');
    
    // Esconde todas as telas
    esconderTodasTelas();
    
    // Mostra tela de login
    document.getElementById('telaLogin').classList.remove('hidden');
  }
}
