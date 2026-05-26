# 🗺️ JeniPass - Turismo Cultural do Piauí

> Aplicativo web de incentivo ao turismo cultural com sistema de recompensas em Jenicoins

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Status](https://img.shields.io/badge/status-MVP-green)
![Do Piauí Para o Mundo](https://img.shields.io/badge/Do_Piaui_Para_O_mundo-2026-orange)

---

## 📋 Sobre o Projeto

O **JeniPass** é um aplicativo web desenvolvido para incentivar o turismo cultural no estado do Piauí. Através de um sistema de recompensas gamificado, os usuários ganham **Jenicoins** ao visitarem pontos turísticos e podem resgatar descontos em estabelecimentos parceiros com selo cultural.

### 🎯 Objetivos

- ✅ Promover o turismo cultural do Piauí
- ✅ Valorizar artesãos e estabelecimentos locais
- ✅ Gamificar a experiência turística

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** (CDN) - Estilização moderna
- **JavaScript Vanilla** - Lógica sem frameworks
- **Font Awesome** - Biblioteca de ícones
- **LocalStorage** - Persistência de dados offline

---

## 📁 Estrutura do Projeto

```
jenipass-projeto/
├── index.html                 # Arquivo principal (HTML)
├── css/
│   └── estilos.css           # Estilos customizados
├── js/
│   ├── dados.js              # Rotas e recompensas (mock)
│   ├── estado.js             # Gerenciamento de estado global
│   ├── autenticacao.js       # Sistema de login/logout
│   ├── navegacao.js          # Navegação entre telas
│   ├── telaRotas.js          # Tela de listagem de rotas
│   ├── telaDetalheRota.js    # Tela de detalhes da rota
│   ├── telaCatalogo.js       # Tela de catálogo de recompensas
│   ├── telaHistorico.js      # Tela de histórico de resgates
│   ├── telaPerfil.js         # Tela de perfil do usuário
│   ├── modais.js             # Sistema de modais
│   ├── scanner.js            # Scanner QR Code + código manual
│   └── inicializacao.js      # Inicialização do app
├── imagens/                  # Pasta para imagens locais (futuro)
└── README.md                 # Este arquivo
```

---

## 🎮 Como Usar

### 1️⃣ Instalação

Não requer instalação! Basta:

```bash
# Clone ou baixe o projeto
git clone [URL_DO_REPOSITORIO]

# Entre na pasta
cd jenipass-projeto

# Abra o index.html no navegador
# Windows: clique duplo no arquivo
# Mac: abra com Safari/Chrome
# Linux: firefox index.html
```

### 2️⃣ Login

- **Usuário:** qualquer nome
- **Senha:** qualquer senha
- (MVP aceita qualquer credencial)

### 3️⃣ Navegação

Use a barra inferior para navegar entre:
- 🗺️ **Rotas** - Explore rotas turísticas
- 🎁 **Catálogo** - Resgate recompensas
- 🕐 **Histórico** - Veja seus cupons
- 👤 **Perfil** - Estatísticas e logout

### 4️⃣ Ganhando Jenicoins

1. Vá em **Rotas**
2. Escolha uma rota
3. Clique em **Ver detalhes** de um local
4. Clique em **Ganhar Jenicoins**
5. **Simular QR Code** OU **Digitar código manual**
   - Códigos disponíveis: LOC001, LOC002, LOC003, etc.

### 5️⃣ Resgatando Recompensas

1. Vá em **Catálogo**
2. Escolha entre **Selo Cultural** ou **Serviços e Comércios**
3. Clique em **Resgatar** (se tiver saldo)
4. Vá em **Histórico** para ver o cupom
5. Clique no cupom ativo
6. Digite o **PIN** (mostrado em amarelo)
7. Cupom validado! ✅

---

## 📝 Funcionalidades

### ✅ Implementadas

- [x] Sistema de login/logout
- [x] Navegação SPA (Single Page Application)
- [x] Listagem de rotas turísticas
- [x] Detalhamento de rotas com progresso
- [x] Scanner QR Code (simulado)
- [x] Validação de código manual
- [x] Sistema de Jenicoins (ganhar/gastar)
- [x] Catálogo de recompensas
- [x] Resgate com validação de saldo
- [x] Histórico de cupons
- [x] Validação de PIN
- [x] Perfil com estatísticas
- [x] Persistência total via localStorage
- [x] Design responsivo (mobile-first)

### 🔮 Futuras (Pós-MVP)

- [ ] Integração com backend real
- [ ] Scanner QR Code real (câmera)
- [ ] Sistema de autenticação robusto
- [ ] Geolocalização
- [ ] Notificações push
- [ ] Modo offline (PWA completo)
- [ ] Dashboard administrativo




---

## 🎉 Agradecimentos

- Governo do Estado do Piauí
- Secretaria de Turismo
- Artesãos e estabelecimentos parceiros
- Comunidade educacional

---
## 👤 Componentes 
1. ANANDA LYS MOURA DOS SANTOS 
2. BRUNO FARIAS DA SILVA CHAVES 
3. JOÃO GABRIEL PORTELA DE ABREU 
4. JULYANNA DA SILVA COSTA 
5. KLARA ALANYS GOMES TEIXEIRA 
6. Orientador: Olimpio Passos de Carvalho 
Segundo 


