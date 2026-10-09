# Projeto Acadêmico ONG Esperança

SPA front-end desenvolvida para a ONG Esperança, com navegação por hash routes, cadastro de voluntários, persistência local e visualização de atividades.

## Funcionalidades

- Navegação SPA pelas rotas `#/home`, `#/projetos` e `#/cadastro`.
- Cadastro de voluntários com validação de nome, e-mail e telefone.
- Persistência dos cadastros no `localStorage`.
- Gráfico de barras com dados das atividades da ONG.
- Atualização e persistência dos dados do gráfico.
- Modal de participação comunitária.
- Tratamento de dados corrompidos ou indisponíveis no Web Storage.
- Layout responsivo com Bootstrap e CSS próprio.

## Tecnologias

- HTML5
- CSS3
- JavaScript ES6 Modules
- Bootstrap 5.3.3 via CDN
- Chart.js via CDN
- Web Storage API (`localStorage`)
- Vite para build de produção e minificação

## Estrutura principal

```text
.
├── .github/
│   └── workflows/
│       └── deploy-pages.yml  # Build e publicação no GitHub Pages
├── ONG/
│   ├── backup/               # Versões estáticas anteriores
│   ├── css/
│   │   └── ONG.css           # Estilos da aplicação
│   ├── html/
│   │   └── index.html        # Entrada da SPA
│   ├── imagens/
│   │   ├── bird.avif         # Imagem da página inicial
│   │   └── feedback-*.png    # Capturas de referência da interface
│   └── js/
│       ├── ong-app.js        # Rotas, telas e eventos
│       ├── grafico.js        # Gráfico de atividades
│       └── storage.js        # Persistência no localStorage
├── package.json              # Scripts e dependências de desenvolvimento
├── package-lock.json
└── vite.config.js            # Configuração de desenvolvimento e build
```

## Como executar

Clone o repositório, instale as dependências e inicie o servidor de desenvolvimento do Vite:

```bash
git clone https://github.com/gorucchi07/Projeto-acad-mico-ONG-esperan-a.git
cd Projeto-acad-mico-ONG-esperan-a
npm ci
npm run dev
```

Abra no navegador a URL local exibida pelo Vite no terminal. O Vite está configurado para servir `ONG/html/index.html` como entrada do projeto.

Também é possível servir `ONG/html/index.html` com outra ferramenta de servidor local, mas não abra o arquivo diretamente via `file://`: a aplicação usa módulos ES6. Bootstrap e Chart.js são carregados por CDN, então é necessária conexão com a internet para esses recursos.

### Build de produção

Com as dependências instaladas, gere a versão otimizada:

```bash
npm run build
```

Os arquivos minificados são gerados na pasta `dist/`. Para visualizar essa versão localmente:

```bash
npm run preview
```

### Deploy no GitHub Pages

O deploy é feito pelo workflow `.github/workflows/deploy-pages.yml`. A cada push na branch `main`, o GitHub Actions instala as dependências, executa `npm run build` e publica a pasta `dist/` no GitHub Pages.

No repositório, ative **Settings > Pages > Source: GitHub Actions**. Depois da execução do workflow, o GitHub disponibilizará o URL público da aplicação na seção **Environments**.

## Rotas da aplicação

- `#/home`: apresentação da ONG, gráfico e contato.
- `#/projetos`: projetos sociais e modal de participação.
- `#/cadastro`: formulário de cadastro de voluntários.

## Organização modular

O código JavaScript foi dividido por responsabilidade:

- `ong-app.js` controla o fluxo da SPA e os eventos da interface.
- `storage.js` encapsula as operações de persistência local.
- `grafico.js` concentra a criação e atualização do gráfico.

A comunicação entre os módulos ocorre por `export` e `import`, evitando dependências circulares e reduzindo o acoplamento.

## GitFlow utilizado

O projeto utiliza branches organizadas conforme o fluxo GitFlow:

- `main`: versão estável.
- `develop`: integração do desenvolvimento.
- `feature/modularizacao-javascript`: implementação da modularização.
- `hotfix/correcao-storage`: correções urgentes relacionadas ao armazenamento.
- `release/1.0.0`: preparação da primeira versão.

## Persistência local

Os dados são armazenados no navegador nas chaves:

- `ong-voluntarios`: cadastros realizados no formulário.
- `ong-dados`: dados utilizados no gráfico.

Não existe servidor ou banco de dados nesta versão. A persistência é local ao navegador utilizado.

## Projetos

- [Projeto Acadêmico ONG Esperança](https://github.com/gorucchi07/Projeto-acad-mico-ONG-esperan-a) — este repositório.
- [Landingpage de Game of Thrones](https://github.com/gorucchi07/landingpage-game-of-thrones) — projeto separado, feito com HTML e CSS.
