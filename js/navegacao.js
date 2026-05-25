// ==========================================
// SISTEMA DE NAVEGAÇÃO ENTRE TELAS
// Arquivo: js/navegacao.js
// Responsável: Equipe de Interface
// ==========================================

/**
 * Esconde todas as telas do aplicativo
 */
function esconderTodasTelas() {
  const telas = [
    'telaLogin',
    'telaRotas',
    'telaDetalheRota',
    'telaCatalogo',
    'telaHistorico',
    'telaPerfil'
  ];
  
  telas.forEach(telaId => {
    const elemento = document.getElementById(telaId);
    if (elemento) {
      elemento.classList.add('hidden');
    }
  });
}

/**
 * Navega para uma tela específica
 * @param {string} tela - Nome da tela (rotas, catalogo, historico, perfil)
 */
function navegarPara(tela) {
  // Atualiza estado
  estadoApp.telaAtiva = tela;
  estadoApp.rotaSelecionada = null;
  
  // Esconde todas as telas
  esconderTodasTelas();
  
  // Atualiza botões da navegação
  atualizarBotaoNavegacao(tela);

  // Renderiza e mostra a tela solicitada
  switch (tela) {
    case 'rotas':
      renderizarRotas();
      document.getElementById('telaRotas').classList.remove('hidden');
      break;
      
    case 'catalogo':
      renderizarCatalogo();
      document.getElementById('telaCatalogo').classList.remove('hidden');
      break;
      
    case 'historico':
      renderizarHistorico();
      document.getElementById('telaHistorico').classList.remove('hidden');
      break;
      
    case 'perfil':
      renderizarPerfil();
      document.getElementById('telaPerfil').classList.remove('hidden');
      break;
  }

  // Atualiza saldo em todas as telas
  atualizarSaldoEmTodasTelas();
}

/**
 * Atualiza o estilo dos botões da barra de navegação
 * Destaca o botão da tela ativa
 */
function atualizarBotaoNavegacao(telaAtiva) {
  // Remove destaque de todos os botões
  const botoes = [
    'botaoNavRotas',
    'botaoNavCatalogo',
    'botaoNavHistorico',
    'botaoNavPerfil'
  ];
  
  botoes.forEach(botaoId => {
    const botao = document.getElementById(botaoId);
    if (botao) {
      botao.classList.remove('text-jeni-blue');
      botao.classList.add('text-gray-400');
    }
  });

  // Adiciona destaque no botão ativo
  const mapaBotoes = {
    'rotas': 'botaoNavRotas',
    'catalogo': 'botaoNavCatalogo',
    'historico': 'botaoNavHistorico',
    'perfil': 'botaoNavPerfil',
  };

  const botaoAtivo = mapaBotoes[telaAtiva];
  if (botaoAtivo) {
    const botao = document.getElementById(botaoAtivo);
    if (botao) {
      botao.classList.remove('text-gray-400');
      botao.classList.add('text-jeni-blue');
    }
  }
}
