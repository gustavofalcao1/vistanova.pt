# Vista Nova Website

Este é um projeto desenvolvido em Next.js para o website da Vista Nova, baseado em um design moderno e responsivo.

## Objetivo

O projeto foi desenvolvido tendo como base dois layouts principais:
- `desktop.png`: Layout para visualização em dispositivos desktop
- `mobile.png`: Layout otimizado para dispositivos móveis

## Tecnologias

- [Next.js](https://nextjs.org) - Framework React para produção
- TypeScript - Superset JavaScript com tipagem estática
- Tailwind CSS - Framework CSS utilitário
- ESLint - Linter para JavaScript/TypeScript

## Começando

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

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

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
