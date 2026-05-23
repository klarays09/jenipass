
/**
 * Renderiza a lista de rotas turísticas disponíveis
 */
function renderizarRotas() {
  const container = document.getElementById('telaRotas');
  
  // HTML da tela de rotas
  container.innerHTML = `
    <!-- Cabeçalho AZUL sem arredondamento -->
    <div class="bg-jeni-blue text-white px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <!-- Logo pequena do cabeçalho -->
        <img src="imagens/logo2.svg" alt="JeniPass" class="h-14">
      </div>
      <!-- Saldo -->
      <div class="bg-jeni-orange text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
        <i class="fas fa-coins text-xs"></i>
        <span id="saldoRotas" class="font-bold text-sm">9.999</span>
      </div>
    </div>

    <!-- Conteúdo SEM arredondamento no topo -->
    <div class="bg-gray-50 min-h-screen">
      <!-- Título da seção -->
      <div class="px-4 pt-5 pb-4 bg-white">
        <h2 class="text-xl font-bold text-gray-900 mb-1">Rotas Disponíveis</h2>
        <p class="text-xs text-gray-500">
          Explore o patrimônio do Piauí e acumule Jenicoins
        </p>
      </div>

      <!-- Lista de Rotas -->
      <div id="listaRotas" class="px-4 pt-4 space-y-3 pb-24"></div>
    </div>
  `;

  // Renderiza os cards das rotas
  const listaRotas = document.getElementById('listaRotas');
  
  rotasTuristicas.forEach(rota => {
    // Calcula progresso da rota
    const locaisVisitados = rota.locais.filter(local => 
      estadoApp.locaisVisitados.includes(local.id)
    ).length;
    const totalLocais = rota.locais.length;
    const porcentagem = Math.round((locaisVisitados / totalLocais) * 100);

    // Cria card da rota
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all cursor-pointer';
    card.onclick = () => abrirDetalheRota(rota);

    card.innerHTML = `
      <!-- Imagem da rota -->
      <div class="relative">
        <img src="${rota.imagem}" alt="${rota.nome}" class="w-full h-36 object-cover">
        
        <!-- Título sobre a imagem (canto inferior esquerdo) -->
        <div class="absolute bottom-2 left-2 right-2">
          <div class="bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
            <p class="text-xs font-bold text-white">${rota.nome}</p>
          </div>
        </div>
        
        <!-- Badge SAZONAL (se aplicável) -->
        ${rota.sazonal ? `
          <div class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2.5 py-0.5 rounded-full font-bold uppercase">
            Sazonal
          </div>
        ` : ''}
      </div>
      
      <!-- Conteúdo do card -->
      <div class="p-3">
        <!-- Descrição -->
        <p class="text-xs text-gray-600 mb-2.5 leading-relaxed">${rota.descricao}</p>
        
        <!-- Informações de progresso -->
        <div class="flex items-center justify-between text-xs text-gray-500 mb-1.5">
          <span>${locaisVisitados}/${totalLocais} atrativos</span>
          <span>${porcentagem}% concluído</span>
        </div>
        
        <!-- Barra de progresso -->
        <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all" style="width: ${porcentagem}%"></div>
        </div>
      </div>
    `;

    listaRotas.appendChild(card);
  });
}