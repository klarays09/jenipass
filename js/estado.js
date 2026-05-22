// ==========================================
// GERENCIAMENTO DE ESTADO DO APLICATIVO
// Arquivo: js/estado.js
// Responsável: Equipe de Backend/Dados
// ==========================================

// Estado global do aplicativo
let estadoApp = {
  logado: false,
  telaAtiva: 'rotas',
  saldo: 9999,
  historico: [],
  locaisVisitados: [],
  rotaSelecionada: null,
  localSelecionado: null,
  abaCatalogoAtiva: 'cultural',
  indiceItemSelecionado: null,
};

// ==========================================
// FUNÇÕES DE LOCALSTORAGE
// ==========================================

/**
 * Carrega o estado salvo do localStorage
 */
function carregarEstado() {
  const saldoSalvo = localStorage.getItem('jenipass_saldo');
  const historicoSalvo = localStorage.getItem('jenipass_historico');
  const visitadosSalvo = localStorage.getItem('jenipass_locais_visitados');
  const logadoSalvo = localStorage.getItem('jenipass_logado');

  if (saldoSalvo !== null) {
    estadoApp.saldo = parseInt(saldoSalvo, 10);
  }
  if (historicoSalvo) {
    estadoApp.historico = JSON.parse(historicoSalvo);
  }
  if (visitadosSalvo) {
    estadoApp.locaisVisitados = JSON.parse(visitadosSalvo);
  }
  if (logadoSalvo === 'true') {
    estadoApp.logado = true;
  }
}

/**
 * Salva o saldo atual no localStorage
 */
function salvarSaldo() {
  localStorage.setItem('jenipass_saldo', estadoApp.saldo.toString());
}

/**
 * Salva o histórico de resgates no localStorage
 */
function salvarHistorico() {
  localStorage.setItem('jenipass_historico', JSON.stringify(estadoApp.historico));
}

/**
 * Salva a lista de locais visitados no localStorage
 */
function salvarLocaisVisitados() {
  localStorage.setItem('jenipass_locais_visitados', JSON.stringify(estadoApp.locaisVisitados));
}

/**
 * Atualiza o saldo exibido em todas as telas
 */
function atualizarSaldoEmTodasTelas() {
  const saldoFormatado = estadoApp.saldo.toLocaleString('pt-BR');
  
  // Atualiza todos os elementos que mostram o saldo
  const elementosSaldo = [
    'saldoRotas',
    'saldoDetalhe', 
    'saldoCatalogo',
    'saldoHistorico'
  ];
  
  elementosSaldo.forEach(id => {
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.textContent = saldoFormatado;
    }
  });

  // Saldo do perfil tem formato diferente
  const saldoPerfil = document.getElementById('saldoPerfil');
  if (saldoPerfil) {
    saldoPerfil.textContent = `${saldoFormatado} Jenicoins`;
  }
}

/**
 * Gera um PIN aleatório de 6 caracteres
 */
function gerarPin() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}
