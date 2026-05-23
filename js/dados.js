// ==========================================
// DADOS MOCK - ROTAS E RECOMPENSAS
// Arquivo: js/dados.js
// Responsável: Equipe de Conteúdo
// ==========================================

const rotasTuristicas = [
  {
    id: 'rota-jenipapo',
    nome: 'Monumento aos Heróis do Jenipapo',
    descricao: 'Conheça a história de independência do estado',
    imagem: 'imagens/monumento.jpg',
    sazonal: false,
    locais: [
      {
        id: 'loc-monumento',
        codigo: 'LOC001',
        nome: 'Monumento',
        imagem: 'imagens/monumento.jpg',
        descricao: 'O Monumento aos Heróis do Jenipapo é uma homenagem aos brasileiros que lutaram pela independência do Piauí na Batalha do Jenipapo, ocorrida em 13 de março de 1823.',
        recompensa: 50,
      },
      {
        id: 'loc-exposicao',
        codigo: 'LOC002',
        nome: 'Exposição dos artefatos',
        imagem: 'imagens/artefato.jpg',
        descricao: 'Exposição permanente de artefatos históricos encontrados no campo de batalha.',
        recompensa: 50,
      },
      {
        id: 'loc-escadaria',
        codigo: 'LOC003',
        nome: 'Escadaria',
        imagem: 'imagens/escada.jpg',
        descricao: 'A escadaria monumental oferece uma vista panorâmica do vale.',
        recompensa: 50,
      },
      {
        id: 'loc-cemiterio',
        codigo: 'LOC004',
        nome: 'Cemitério Histórico',
        imagem: 'imagens/cemiterio.jpg',
        descricao: 'Local sagrado onde foram sepultados os combatentes da Batalha do Jenipapo.',
        recompensa: 50,
      },
      {
        id: 'loc-mirante',
        codigo: 'LOC005',
        nome: 'Mirante do Jenipapo',
        imagem: 'imagens/mirante.jpg',
        descricao: 'Ponto mais alto do complexo com vista privilegiada para toda a região.',
        recompensa: 50,
      },
    ],
  },
  {
    id: 'rota-teresina',
    nome: 'Festejos de Santo Antônio',
    descricao: 'Evento disponível de 31/05 a 13/06',
    imagem: 'imagens/igreja.jpg',
    sazonal: true,
    locais: [
      {
        id: 'loc-teatro',
        codigo: 'LOC006',
        nome: 'Procissão (Abertura)',
        imagem: 'imagens/procissao.jpg',
        descricao: 'A procissão que abre os festejos destaca-se pelo tradicional "Pau de Santo Antônio". Conhecido por sua fama de "santo casamenteiro", a tradição dita que aqueles que alcançarem o mastro abençoado logo se casarão',
        recompensa: 40,
      },
      {
        id: 'loc-museu',
        codigo: 'LOC007',
        nome: 'Barraca do Leilão',
        imagem: 'imagens/barraca.JPG',
        descricao: 'A barraca do leilão é o coração da festa! É aqui onde você arremata "jóias" e as leva para casa quem der o maior lance.',
        recompensa: 40,
      },
      {
        id: 'loc-mercado',
        codigo: 'LOC008',
        nome: 'Dia do Vaqueiro',
        imagem: 'imagens/vaqueiro.jpg',
        descricao: 'O Dia do Vaqueiro celebra gerações de famílias — pais, filhos e irmãos — que dedicaram suas vidas à lida no campo. Mais que uma profissão, é uma herança de coragem e dedicação na tarefa de cuidar da criação e recolher o gado. No JeniPass, celebramos com orgulho essa tradição que define a força do nosso povo.',
        recompensa: 40,
      },
    ],
  },
];

const recompensasCulturais = [
  {
    id: 'rec-tecelagem',
    nome: 'Tecelagem Dona Maria',
    descricao: '10% de desconto',
    preco: 250,
    imagem: 'imagens/tecelagem.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-artesa-capivara',
    nome: 'Artesã Capivara',
    descricao: '10% de desconto',
    preco: 250,
    imagem: 'imagens/cap.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-mestre-opala',
    nome: 'Mestre Opala',
    descricao: '10% de desconto',
    preco: 150,
    imagem: 'imagens/op.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-artesa-lourdes',
    nome: 'Artesã Lourdes',
    descricao: '10% de desconto',
    preco: 100,
    imagem: 'imagens/lourdes.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
];

const recompensasServicos = [
  {
    id: 'rec-jose-carne',
    nome: 'José da Carne',
    descricao: '10% de desconto',
    preco: 250,
    imagem: 'imagens/carne.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-cheiro-verde',
    nome: 'Cheiro Verde',
    descricao: '10% de desconto',
    preco: 250,
    imagem: 'imagens/cheiro.png',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-cafe-ze',
    nome: 'Café do Zé',
    descricao: '10% de desconto',
    preco: 100,
    imagem: 'imagens/cafe.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
  {
    id: 'rec-maria-store',
    nome: 'Maria Store',
    descricao: '10% de desconto',
    preco: 150,
    imagem: 'imagens/ma.jpg',
    validade: 'Disponível até 31 dez 2026',
  },
];
