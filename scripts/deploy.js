const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

async function deploy() {
  try {
    console.log('🏗️ Iniciando processo de deploy...');

    // Faz o build do projeto
    console.log('📦 Fazendo build do projeto...');
    execSync('npm run build', { stdio: 'inherit' });

    // Cria e alterna para a branch gh-pages
    try {
      execSync('git checkout gh-pages', { stdio: 'inherit' });
    } catch {
      execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
    }

    // Copia os arquivos de build
    console.log('📋 Copiando arquivos de build...');
    fs.copySync('out', '.', { overwrite: true });

    // Adiciona o arquivo .nojekyll
    fs.writeFileSync('.nojekyll', '');

    // Comandos Git
    console.log('🚀 Enviando para o GitHub...');
    execSync('git add -A', { stdio: 'inherit' });
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
    execSync('git push origin gh-pages --force', { stdio: 'inherit' });

    // Volta para a branch main
    execSync('git checkout main', { stdio: 'inherit' });

    console.log('✅ Deploy concluído com sucesso!');
  } catch (error) {
    console.error('❌ Erro durante o deploy:', error);
    process.exit(1);
  }
}

deploy();
