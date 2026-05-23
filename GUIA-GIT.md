# 📘 Guia Rápido de Git - JeniPass

## 🎯 Comandos Essenciais

### 1️⃣ Primeira Vez (Configuração Inicial)

```bash
# Configure seu nome
git config --global user.name "Seu Nome"

# Configure seu email
git config --global user.email "seu.email@exemplo.com"

# Clone o projeto
git clone [URL_DO_REPOSITORIO]
cd jenipass-projeto
```

---

### 2️⃣ Fluxo Diário de Trabalho

```bash
# ANTES de começar a trabalhar
git pull origin main

# Edite seus arquivos...

# Veja o que mudou
git status

# Adicione o arquivo que você editou
git add js/dados.js

# OU adicione todos os arquivos modificados
git add .

# Faça commit com mensagem clara
git commit -m "Adiciona rota do Delta do Parnaíba"

# Envie para o GitHub
git push origin main
```

---

### 3️⃣ Mensagens de Commit (Exemplos)

✅ **BOM:**
```bash
git commit -m "Adiciona nova rota turística do Parque da Cidadania"
git commit -m "Corrige bug no cálculo de Jenicoins"
git commit -m "Melhora design do botão de resgate"
git commit -m "Atualiza descrição do Museu do Piauí"
```

❌ **RUIM:**
```bash
git commit -m "mudanças"
git commit -m "arrumei"
git commit -m "aaa"
```

---

### 4️⃣ Verificar Status

```bash
# Ver quais arquivos foram modificados
git status

# Ver histórico de commits
git log

# Ver histórico simplificado
git log --oneline
```

---

### 5️⃣ Desfazer Mudanças (Socorro!)

```bash
# Desfazer mudanças em um arquivo (antes do add)
git checkout -- nome-do-arquivo.js

# Remover arquivo do staging (depois do add)
git reset nome-do-arquivo.js

# Ver diferenças do que foi modificado
git diff
```

---

## 🚨 Regras de Ouro

1. ✅ **SEMPRE** faça `git pull` antes de começar a trabalhar
2. ✅ **SEMPRE** teste o código antes de fazer commit
3. ✅ **SEMPRE** use mensagens de commit descritivas
4. ❌ **NUNCA** dê commit em código que não funciona
5. ❌ **NUNCA** edite arquivos de outra equipe sem combinar

---

## 👥 Divisão de Arquivos por Equipe

### Equipe 1 - Dados
```bash
git add js/dados.js
git commit -m "Adiciona 3 novas rotas turísticas"
```

### Equipe 2 - Interface
```bash
git add css/estilos.css js/navegacao.js
git commit -m "Melhora animação de transição entre telas"
```

### Equipe 3 - Rotas
```bash
git add js/telaRotas.js js/telaDetalheRota.js
git commit -m "Adiciona filtro de rotas sazonais"
```

### Equipe 4 - Recompensas
```bash
git add js/telaCatalogo.js js/telaHistorico.js
git commit -m "Corrige validação de saldo no resgate"
```

### Equipe 5 - Scanner
```bash
git add js/scanner.js
git commit -m "Adiciona novos códigos de validação"
```

### Equipe 6 - Backend
```bash
git add js/estado.js js/autenticacao.js
git commit -m "Implementa limpeza de cache ao fazer logout"
```

---

## 🆘 Problemas Comuns

### Conflito de Merge

```
CONFLICT (content): Merge conflict in js/dados.js
```

**Solução:**
1. Abra o arquivo com conflito
2. Procure por `<<<<<<`, `======`, `>>>>>>`
3. Escolha qual código manter
4. Remova as marcações
5. Salve o arquivo
6. `git add js/dados.js`
7. `git commit -m "Resolve conflito em dados.js"`

---

### Esqueci de fazer Pull

```bash
# Salve suas mudanças temporariamente
git stash

# Puxe as atualizações
git pull origin main

# Restaure suas mudanças
git stash pop
```

---

### Commit na Branch Errada

```bash
# Desfaz o último commit (mantém as mudanças)
git reset --soft HEAD~1

# Agora pode fazer git add e commit novamente
```

---

## 📱 Extensões Úteis para VS Code

- **GitLens** - Visualiza histórico de commits
- **Git Graph** - Mostra árvore de commits visual
- **GitHub Pull Requests** - Gerencia pull requests

---

## 🎓 Glossário

- **Repository (Repo):** Pasta do projeto versionada
- **Commit:** Salvar um snapshot das mudanças
- **Push:** Enviar commits para o GitHub
- **Pull:** Baixar atualizações do GitHub
- **Clone:** Copiar repositório do GitHub
- **Branch:** Linha alternativa de desenvolvimento
- **Merge:** Juntar mudanças de branches
- **Conflict:** Quando duas pessoas editam a mesma linha

---

## 📞 Precisa de Ajuda?

1. Consulte este guia
2. Pergunte ao colega de equipe
3. Chame o professor/coordenador
4. Verifique o [README.md](README.md)

---

**Lembre-se:** Git parece difícil no começo, mas com prática fica natural! 💪
