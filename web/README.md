# 📦 **Guia de Atualização e Gerenciamento de Node.js, npm e Angular**

Este README fornece os comandos essenciais para:  
✅ Atualizar **Node.js** para a versão 22-  ** podemos testar se roda com a LTS mais recente  
✅ Atualizar o **npm**  
✅ Usar **nvm** para gerenciar múltiplas versões do Node.js  
✅ Manter o **Angular** na versão 20 até decidir atualizar  

---

## **1️⃣ Atualizar Node.js para a versão LTS mais recente**

### **Windows/macOS (via instalador oficial)**
- Baixe a versão LTS em: [https://nodejs.org/](https://nodejs.org/)  
- Execute o instalador e siga as instruções.

### **Linux/macOS (via `nvm` - recomendado)**
```bash
nvm install --lts  # Instala a última versão LTS
nvm use --lts      # Usa a versão LTS
```

### **Ubuntu/Debian (via NodeSource)**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### **macOS (via Homebrew)**
```bash
brew update
brew install node@lts
brew link --overwrite node@lts
```

---

## **2️⃣ Atualizar o npm para a versão mais recente**
```bash
npm install -g npm@latest
```

---

## **3️⃣ Usando o `nvm` para gerenciar versões do Node.js**
### **Instalar o `nvm` (Node Version Manager)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
Reinicie o terminal após a instalação.

### **Comandos úteis do `nvm`**
| Comando | Descrição |
|---------|-----------|
| `nvm install 22` | Instala o Node.js 22 |
| `nvm use 22` | Define o Node.js 20 como padrão |
| `nvm ls` | Lista versões instaladas |
| `nvm alias default 22` | Define o Node.js 22 como padrão permanentemente |

---

## **4️⃣ Manter o Angular na versão 20**
### **Instalar Angular CLI globalmente (se ainda não tiver)**
```bash
npm install -g @angular/cli@20
```

### **Criar um novo projeto com Angular 20**
```bash
ng new meu-projeto --strict
```

### **Verificar/atualizar Angular em um projeto existente**
```bash
ng version  # Verifica a versão do Angular
npm install @angular/core@20 @angular/cli@20  # Força a versão 20
```

### **Evitar atualização acidental do Angular**
Edite o `package.json` e fixe as versões:
```json
"dependencies": {
  "@angular/core": "~20.0.0",
  "@angular/cli": "~20.0.0"
},
"devDependencies": {
  "@angular-devkit/build-angular": "~20.0.0"
}
```
Depois execute:
```bash
npm install
```

---

## **🔹 Resumo dos Comandos Principais**
| Tarefa | Comando |
|--------|---------|
| **Instalar Node.js 22** | `nvm install 22` |
| **Usar Node.js LTS** | `nvm use 22` |
| **Instalar Node.js LTS** | `nvm install --lts` |
| **Usar Node.js LTS** | `nvm use --lts` |
| **Atualizar npm** | `npm install -g npm@latest` |
| **Instalar Angular 20** | `npm install -g @angular/cli@20` |
| **Fixar Angular 20 no projeto** | `npm install @angular/core@20 @angular/cli@20` |

---

## **⚠️ Dicas Importantes**
- **Sempre teste atualizações em um ambiente de desenvolvimento antes de aplicar em produção.**  
- **Use `nvm` para alternar entre versões do Node.js facilmente.**  
- **Projetos Angular podem ter dependências específicas, verifique a compatibilidade antes de atualizar.**  

Se precisar de ajuda, consulte a [documentação oficial do Angular](https://angular.io/guide/updating) ou do [Node.js](https://nodejs.org/en/docs/).  

🚀 **Happy Coding!**