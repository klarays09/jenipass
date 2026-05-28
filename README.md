# 🗺️ JeniPass - Turismo Cultural do Piauí

> **Aplicativo web que transforma turismo em moeda local, conectando turistas, artesãos e cidades**

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Status](https://img.shields.io/badge/status-MVP-green)
![Hackathon](https://img.shields.io/badge/Do_Piauí_Para_o_Mundo-2026-orange)

---

## 🔴 O Problema

### Por que criamos JeniPass?

**Situação real no Piauí:**

```
700 mil turistas visitam o Piauí em 2025
            ⬇️
Tiram selfie no monumento histórico
            ⬇️
Vão embora sem gastar dinheiro no comércio local
            ⬇️
Artesão vê turista passar, mas não vende nada
```

### Dados que provam o problema:
- 📊 **40% dos comerciantes** não recebem turistas (mesmo durante temporada alta)
- 💔 **68% dependem só de "boca a boca"** para vender (sem ferramentas)
- 😞 **Turista não conhece** onde gastar dinheiro/artesanato local
- 🎓 **Estudante não aprende** história enquanto visita monumento

### Validação Real (Entrevistamos 38 comerciantes):
- ✅ **89,5% quiseram entrar na plataforma** (demanda existe!)
- ✅ **80% toparam dar desconto** para turista usar app
- ✅ **Problema é REAL**, não é achismo

---

## 💡 A Solução

### JeniPass = Uma Ponte

Conectar 3 coisas que não se tocam:

```
🧳 TURISTA               👨‍💼 ARTESÃO              🏛️ PREFEITURA
   Quer visitar    +    Quer vender      +    Quer mais turismo
   Quer conhecer        Quer renda             = SOLUÇÃO PERFEITA
```

### Como funciona:

**Turista:** 
- Chega na loja/monumento
- Escaneia QR Code
- Ganha Jenicoins (moeda virtual)
- Resgata desconto real
- Aprende história local

**Artesão:**
- Turista aparece na loja
- Vende de verdade
- Recebe desconto de forma organizada
- Não paga nada (é grátis)

**Prefeitura:**
- Promove turismo educativo
- Cobra R$30mil/ano de licença
- Recebe dados sobre visitantes

---

## 🎮 Fluxo: Como Ganhar Jenicoins

### Passo a Passo

```
1. ABRIR APP
   ├─ Fazer login (qualquer nome)
   └─ Entra na home

2. ESCOLHER ROTA
   ├─ Clica em "Rotas" (menu inferior)
   ├─ Vê lista de 3 rotas turísticas
   └─ Clica em uma (ex: "Batalha do Jenipapo")

3. VER DETALHES
   ├─ Vê os 3 locais da rota
   ├─ Vê imagem e história de cada local
   └─ Vê barra de progresso (0/3 visitado)

4. GANHAR JENICOINS
   ├─ Clica "Ganhar Jenicoins" no local
   ├─ Escolhe: "Simular QR" ou "Digitar código"
   │
   ├─ SE "SIMULAR QR":
   │  ├─ Sistema gera código (LOC001, LOC002, etc)
   │  ├─ Mostra na tela
   │  └─ Confirma
   │
   └─ SE "DIGITAR CÓDIGO":
      ├─ Turista digita código do QR físico
      ├─ Sistema valida
      └─ Confirma

5. RECEBER MOEDAS
   ├─ ✅ Saldo atualiza (+50 Jenicoins)
   ├─ ✅ Progresso atualiza (1/3 visitado)
   └─ ✅ Aparece notificação "Ganhou 50 Jenicoins!"
```

### Validações (por trás dos panos):
- ✅ Código existe? (LOC001-LOC010)
- ✅ Já ganhou nesse local? (não deixa ganhar 2x)
- ✅ Qual rota? (registra progresso)

---

## 🎁 Fluxo: Resgatar Desconto

### Passo a Passo

```
1. ABRIR CATÁLOGO
   ├─ Clica em "Catálogo" (menu inferior)
   └─ Vê 2 abas: "Selo Cultural" ou "Serviços"

2. ESCOLHER DESCONTO
   ├─ Vê cards com recompensas
   ├─ Card mostra:
   │  ├─ Nome da loja
   │  ├─ Tipo de desconto
   │  └─ Preço em Jenicoins (250)
   └─ Clica em uma

3. VERIFICAR SALDO
   ├─ Sistema confere: tem 250 Jenicoins?
   │
   ├─ SE SIM:
   │  └─ Continua para resgate
   │
   └─ SE NÃO:
      └─ Mostra alerta "Saldo insuficiente"

4. RESGATAR CUPOM
   ├─ Clica "Resgatar"
   ├─ ✅ Saldo deduzido (-250 Jenicoins)
   └─ ✅ Cupom criado com PIN único

5. USAR CUPOM NA LOJA
   ├─ Clica em "Histórico" (menu inferior)
   ├─ Vê lista de cupons
   ├─ Clica no cupom ativo
   │
   ├─ Aparece:
   │  ├─ Nome da loja
   │  ├─ PIN em amarelo (Ex: 4827)
   │  └─ Status "Ativo"
   │
   └─ Mostra PIN pro artesão validar

6. VALIDAR PIN (Na loja)
   ├─ Artesão recebe o PIN
   ├─ Anota no painel (ou via WhatsApp)
   ├─ Turista recebe desconto
   └─ ✅ Cupom fica "Resgastado"
```

### Validações:
- ✅ Tem saldo suficiente?
- ✅ Cupom já não foi usado?
- ✅ PIN é válido?

---

## 🚀 Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **Tailwind CSS** - Deixa bonito (via CDN)
- **JavaScript Vanilla** - Lógica do app (sem frameworks pesados)
- **LocalStorage** - Guarda dados no navegador (funciona offline)

**Por que não usar React?** Seria muito pesado para um MVP pequeno. Vanilla JS é mais rápido.

---

## 📁 Estrutura do Projeto

```
jenipass/
├── index.html              # Tela principal (1 arquivo)
├── css/
│   └── estilos.css        # Estilos (cores, botões, etc)
├── js/
│   ├── estado.js          # Guarda dados (saldo, histórico)
│   ├── dados.js           # Informações das rotas e lojas
│   ├── scanner.js         # Valida QR Code
│   ├── telaRotas.js       # Tela de rotas
│   ├── telaCatalogo.js    # Tela de cupons
│   ├── telaHistorico.js   # Tela de histórico
│   ├── autenticacao.js    # Login
│   └── navegacao.js       # Muda entre telas
├── imagens/               # Fotos dos pontos turísticos
└── README.md             # Este arquivo
```

---

## 🎮 Como Usar

### Instalação

Não precisa instalar nada! Basta:

```bash
git clone https://github.com/klarays09/jenipass.git
cd jenipass

# Duplo clique em index.html (ou abra no navegador)
```

### Login Rápido

- **Usuário:** Qualquer nome (João, Maria, etc)
- **Senha:** Qualquer coisa
- (MVP não tem segurança real, é só pra testar)

### Testar Fluxo Completo (5 minutos)

1. **Ganhar Jenicoins**
   - Rotas → Escolha uma → Ganhar Jenicoins → Simular QR

2. **Resgatar Desconto**
   - Catálogo → Escolha um cupom → Resgatar

3. **Validar Cupom**
   - Histórico → Clique no cupom → Veja o PIN

4. **Testar Offline**
   - Desativa WiFi → App continua funcionando!

---

## 🗓️ Roadmap - Do MVP para Produção

```
HOJE (MVP)              PRÓXIMOS MESES              6+ MESES
┌─────────────────┐     ┌──────────────────┐       ┌─────────────────┐
│  FASE 1: MVP    │     │  FASE 2-4: SCALE │       │  FASE 5: COMUNIDADE
│                 │────→│                  │──────→│
│ ✅ Ganhar Coins │     │ ✅ Backend real  │       │ ✅ Desafios fotos
│ ✅ Resgatar     │     │ ✅ Portal B2B    │       │ ✅ Galeria social
│ ✅ Offline      │     │ ✅ Portal B2G    │       │ ✅ Concursos
│ ✅ Validado     │     │ ✅ Geo + Auth    │       │ ✅ Produtos reais
└─────────────────┘     └──────────────────┘       └─────────────────┘
      7.0.0                   2.0.0                      3.0.0
```

---

## ✅ Funcionalidades

### ✅ Implementadas
- [x] Login/logout
- [x] 3 rotas turísticas
- [x] QR Code simulado
- [x] Ganhar Jenicoins
- [x] Resgate de cupons
- [x] PIN único por cupom
- [x] Histórico de transações
- [x] **Funciona 100% offline**
- [x] Design bonito (mobile-first)

### 🔮 Futuro - Fases de Expansão

**Fase 2 - Infraestrutura Real (Próximos 2-3 meses)**
- [ ] Backend Node.js + PostgreSQL
- [ ] QR Code real (câmera do celular)
- [ ] Autenticação segura (senha criptografada)
- [ ] Geolocalização (validar se turista tá perto)

**Fase 3 - Portais B2B e B2G (Mês 3-4)**

*Portal B2B (Para Artesão/Comerciante):*
- Dashboard com vendas do dia
- Gerenciar descontos oferecidos
- Validar PINs de cupons
- Ver quais turistas compraram
- Relatório de lucro

*Portal B2G (Para Prefeitura):*
- Mapa mostrando locais mais visitados
- Quanto de receita cada loja gerou
- Dados: qual turista, quando visitou
- Relatórios para imprensa
- Estatísticas de turismo

**Fase 4 - Integração com Outras Telas (Mês 4-5)**
- [ ] Compartilhar no Instagram/TikTok (turista mostra progresso)
- [ ] Notificações push (cupom vai vencer!)
- [ ] Sistema de avaliações (dar nota pra loja)
- [ ] Chat com artesão (fazer perguntas)
- [ ] Mapa mostrando lojas mais próximas

**Fase 5 - Sistema de Desafios com Fotos (Mês 5-6)**

*Desafios Visuais:*
- "Tire a foto mais bonita no monumento"
- "Foto com o comerciante/artesão"
- "Seu melhor momento visitando"
- "Arte local mais criativa"

*Como funciona:*
1. Turista completa desafio (tira foto bonita)
2. Envia para galeria comunitária
3. Comunidade vota nas melhores
4. Fotos escolhidas ganham:
   - **Turista:** 500 Jenicoins + Produto piauiense real
   - **Artesão:** Citado como "mais fotogênico" + Prêmio mensal
   - **Loja:** Destaque na galeria

*Galeria Comunitária:*
- Mostrar melhores fotos de turistas
- Histórias de experiências (por escrito)
- Criar comunidade ao redor de turismo
- Viralizar no Instagram/TikTok
- Marketing gratuito para Piauí

### Como Funcionaria o Sistema de Desafios:

```
TURISTA VISITA
    ⬇️
COMPLETA DESAFIO
    (Ex: Tira foto bonita no monumento)
    ⬇️
ENVIA FOTO
    ⬇️
COMUNIDADE VOTA
    (Qual foi melhor?)
    ⬇️
FOTO GANHA ⭐⭐⭐
    ⬇️
TURISTA RECEBE:
├─ 500 Jenicoins
├─ Produto piauiense real (artesanato, alimentos)
└─ Destacado como "Melhor Fotógrafo da Semana"

ARTESÃO/LOJA RECEBE:
├─ Foto deles em destaque
├─ Mais visibilidade
└─ Prêmio se for citado na foto
```

---

## 🏆 Diferenciais do JeniPass

**O que a gente faz que outros não fazem:**

| | JeniPass | TripAdvisor | App Turismo Padrão |
|---|---|---|---|
| Turista ganha moeda | ✅ | ❌ | ❌ |
| Artesão recebe renda | ✅ | ❌ | ❌ |
| Funciona offline | ✅ | ❌ | ❌ |
| Ensina história local | ✅ | ❌ | ⚠️ |

---

## 👥 Equipe (5 Alunos do Ensino Médio)

1. **Ananda Lys Moura dos Santos** - Frontend
2. **Bruno Farias da Silva Chaves** - Backend
3. **João Gabriel Portela de Abreu** - Full Stack
4. **Julyanna da Silva Costa** - Design
5. **Klara Alanys Gomes Teixeira** - Arquitetura

**Orientador:** Olimpio Passos de Carvalho Segundo

---

## 📊 Validação do Mercado

Entrevistamos 38 comerciantes piauienses:
- ✅ **89,5%** quiseram usar JeniPass
- ✅ **80%** toparam dar desconto
- ✅ **Demanda está comprovada**

---

## 🎯 Visão

> JeniPass é a ponte entre patrimônio e economia.
>
> Turista ganha incentivo para visitar.  
> Artesão ganha cliente que realmente compra.  
> Piauí ganha turismo educativo e renda local.
>
> **Do Piauí para o Mundo.**

---

## 📞 Contato

**GitHub:** https://github.com/klarays09/jenipass  
**Hackathon:** Do Piauí Para o Mundo 2026

---

*Criado por 5 alunos de ensino médio em 6 semanas*
