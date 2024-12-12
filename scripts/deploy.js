const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// Configurações
const PUBLIC_REPO_PATH = '../vistanova.pt';
const BUILD_DIR = 'out';
const FILES_TO_COPY = [
  'out',
  'public',
  'next.config.js',
  'package.json'
];

async function deploy() {
  try {
    console.log('🏗️ Iniciando processo de deploy...');

    // Verifica se o diretório do repositório público existe
    if (!fs.existsSync(PUBLIC_REPO_PATH)) {
      console.error('❌ Repositório público não encontrado em:', PUBLIC_REPO_PATH);
      console.log('Por favor, clone o repositório público primeiro:');
      console.log('git clone https://github.com/gustavofalcao1/vistanova.pt.git ../vistanova.pt');
      process.exit(1);
    }

    // Faz o build do projeto
    console.log('📦 Fazendo build do projeto...');
    execSync('npm run build', { stdio: 'inherit' });

    // Limpa o diretório de destino (mantém .git)
    console.log('🧹 Limpando diretório de destino...');
    const files = fs.readdirSync(PUBLIC_REPO_PATH);
    files.forEach(file => {
      if (file !== '.git') {
        fs.removeSync(path.join(PUBLIC_REPO_PATH, file));
      }
    });

    // Copia os arquivos necessários
    console.log('📋 Copiando arquivos...');
    FILES_TO_COPY.forEach(file => {
      fs.copySync(
        path.join(__dirname, '..', file),
        path.join(PUBLIC_REPO_PATH, file),
        { overwrite: true }
      );
    });

    // Cria ou atualiza o README no repositório público
    const readmeContent = `# Vista Nova - Site Estático

Este repositório contém a versão estática do site Vista Nova, gerada automaticamente a partir do repositório principal.

## ℹ️ Sobre

Este é um repositório público que contém apenas os arquivos de build necessários para o GitHub Pages.
O código fonte completo está mantido em um repositório privado separado.

## 🔗 Links Úteis

- [Site Ao Vivo](https://gustavofalcao1.github.io/vistanova.pt)
- [Repositório Principal](https://github.com/gustavofalcao1/vistanova) (Privado)

## 📅 Última Atualização

${new Date().toLocaleString()}
`;

    fs.writeFileSync(path.join(PUBLIC_REPO_PATH, 'README.md'), readmeContent);

    console.log('✅ Deploy concluído com sucesso!');
    console.log('\nPara finalizar o deploy:');
    console.log('1. cd ../vistanova.pt');
    console.log('2. git add .');
    console.log('3. git commit -m "Update site"');
    console.log('4. git push');

  } catch (error) {
    console.error('❌ Erro durante o deploy:', error);
    process.exit(1);
  }
}

deploy();
