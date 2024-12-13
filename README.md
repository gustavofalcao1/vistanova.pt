# Vista Nova Website

Website institucional da Vista Nova, desenvolvido com Next.js e hospedado no GitHub Pages.

## Objetivo

O projeto foi desenvolvido tendo como base dois layouts principais:
- `desktop.png`: Layout para visualização em dispositivos desktop
- `mobile.png`: Layout otimizado para dispositivos móveis

## Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Começando

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/vistanova.pt.git
cd vistanova.pt
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Responsividade

O site foi desenvolvido seguindo o conceito mobile-first, garantindo uma experiência consistente em diferentes dispositivos:
- Layout mobile otimizado para smartphones
- Layout desktop com experiência rica para telas maiores

## Estrutura do Projeto

- `/assets` - Arquivos de design e imagens base
- `/public` - Arquivos estáticos
- `/src` - Código fonte da aplicação
  - `/app` - Rotas e componentes principais
  - `/components` - Componentes reutilizáveis
  - `/styles` - Estilos globais e configurações do Tailwind

## Deploy

O site é automaticamente deployado no GitHub Pages quando alterações são enviadas para a branch main.

Para fazer deploy manualmente:

1. Execute o script de deploy:
```bash
npm run deploy
# ou
yarn deploy
```

Este comando irá:
- Fazer build do projeto
- Criar/atualizar a branch gh-pages
- Fazer push das alterações para o GitHub

O site estará disponível em: https://seu-usuario.github.io/vistanova.pt

## Imagens

Para garantir que as imagens funcionem corretamente no GitHub Pages:

1. Todas as imagens devem estar na pasta `public`
2. Ao referenciar imagens no código, use o caminho completo incluindo `/vistanova.pt`, exemplo:
```jsx
<img src="/vistanova.pt/images/exemplo.jpg" />
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
