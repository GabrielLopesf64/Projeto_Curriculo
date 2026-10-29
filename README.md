# Currículo — Marty McFly

Currículo em página única feito com Vue 3 + Vite, com modo claro/escuro.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar a build

```bash
npm run build
```

A pasta `dist/` é gerada com os arquivos prontos para publicação.

## Publicar no GitHub Pages

1. Envie o projeto para um repositório no GitHub, na branch `main`.
2. No repositório, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions**.
4. A cada push na `main`, o workflow em `.github/workflows/deploy.yml` faz o build e publica o site.

O site ficará em `https://<seu-usuario>.github.io/<nome-do-repositorio>/`.
