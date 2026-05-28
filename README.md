# JeniPass - Turismo Cultural do Piauí

Aplicativo web que transforma turismo em moeda local, conectando turistas, artesãos e cidades.

![Versão](https://img.shields.io/badge/versão-1.0.0-blue)
![Status](https://img.shields.io/badge/status-MVP-green)
![Hackathon](https://img.shields.io/badge/Do_Piauí_Para_o_Mundo-2026-orange)

---

## O Problema

Por que criamos JeniPass?

**Situação real no Piauí:**
- 700 mil turistas visitam o Piauí em 2025
- Tiram selfie no monumento e vão embora
- 40% dos comerciantes não recebem turistas
- 68% dependem só de "boca a boca" para vender
- Turista não sabe onde gastar dinheiro
- Estudante não aprende história enquanto visita

**Validação real:**
Entrevistamos 38 comerciantes piauienses:
- 89,5% quiseram usar a plataforma
- 80% toparam dar desconto
- O problema é real, não é achismo

---

## A Solução

JeniPass conecta 3 coisas que não se tocam:

**Turista** → Quer visitar, quer conhecer  
**Artesão** → Quer vender, quer renda  
**Prefeitura** → Quer mais turismo  

Como funciona:
- Turista escaneia QR Code e ganha Jenicoins (moeda virtual)
- Resgata desconto real na loja
- Aprende história local
- Artesão vende de verdade
- Prefeitura promove turismo educativo

---

## Fluxo: Ganhar Jenicoins

1. Abrir app → Fazer login
2. Escolher rota turística
3. Ver detalhes dos locais
4. Clicar "Ganhar Jenicoins"
5. Simular QR ou digitar código (LOC001-LOC010)
6. Sistema valida:
   - Código existe?
   - Já ganhou nesse local?
7. Se OK: Recebe 50 Jenicoins

---

## Fluxo: Resgatar Desconto

1. Abrir "Catálogo"
2. Escolher uma recompensa (custa 250 Jenicoins)
3. Clicar "Resgatar"
4. Sistema valida saldo
5. Cupom criado com PIN único
6. Turista mostra PIN pro artesão
7. Artesão valida (presencial)
8. Desconto aplicado

---

## Tecnologias

- HTML5 - Estrutura da página
- Tailwind CSS (CDN) - Design responsivo
- JavaScript Vanilla - Lógica (sem frameworks pesados)
- LocalStorage - Guarda dados no navegador
- Font Awesome - Ícones

Por que Vanilla JS? MVP pequeno não precisa React. Framework pesado seria overkill. Prototipagem rápida com JavaScript puro.

---

## Estrutura do Projeto

```
jenipass/
├── index.html              # Tela principal
├── css/
│   └── estilos.css        # Estilos
├── js/
│   ├── estado.js          # Gerencia dados
│   ├── dados.js           # Informações das rotas
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

## Como Usar

Instalação:
```bash
git clone https://github.com/klarays09/jenipass.git
cd jenipass

# Duplo clique em index.html no Windows
# Ou abra no navegador (Chrome, Firefox, Safari)
```

Login:
- Usuário: qualquer nome
- Senha: qualquer coisa
- (MVP não tem segurança real)

Testar fluxo completo (5 minutos):
1. Ganhar Jenicoins - Rotas → Simular QR
2. Resgatar Desconto - Catálogo → Resgatar
3. Validar Cupom - Histórico → Ver PIN
4. Testar Offline - Desativa WiFi → Continua funcionando

---

## Funcionalidades

Implementadas:
- Login/logout
- 3 rotas turísticas
- QR Code simulado
- Ganhar Jenicoins
- Resgatar cupons
- PIN único por cupom
- Histórico de transações
- Funciona 100% offline
- Design mobile-first

Futuro:
- Backend Node.js + PostgreSQL
- QR Code real (câmera)
- Portal B2B (artesão gerenciar vendas)
- Portal B2G (prefeitura ver estatísticas)
- Integração com redes sociais
- Notificações push
- Sistema de desafios com fotos (turista tira foto bonita e ganha prêmio real)
- Galeria comunitária (melhores fotos em destaque)
- Chat com artesão
- Mapa interativo

---

## Diferencial

O que JeniPass faz que outros não fazem:

|  | JeniPass | TripAdvisor | App Turismo PI |
|---|---|---|---|
| Turista ganha moeda | Sim | Não | Não |
| Artesão recebe renda | Sim | Não | Não |
| Funciona offline | Sim | Não | Não |
| Ensina história | Sim | Não | Não |

---

## Equipe


1. Ananda Lys Moura dos Santos 
2. Bruno Farias da Silva Chaves 
3. João Gabriel Portela de Abreu 
4. Julyanna da Silva Costa 
5. Klara Alanys Gomes Teixeira 

Orientador: Olimpio Passos de Carvalho Segundo

---

## Validação de Mercado

Entrevistamos 38 comerciantes piauienses:
- 89,5% quiseram usar JeniPass
- 80% toparam dar desconto
- Demanda está comprovada

---

## Visão

JeniPass é a ponte entre patrimônio e economia.

Turista ganha incentivo para visitar.
Artesão ganha cliente que realmente compra.
Piauí ganha turismo educativo e renda local.

Do Piauí para o Mundo.


