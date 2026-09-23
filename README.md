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

## Estrutura principal

```text
ONG/
├── backup/              # Versões estáticas anteriores
├── css/
│   └── ONG.css          # Estilos próprios da aplicação
├── html/
│   └── index.html       # Shell principal da SPA
├── imagens/
│   └── bird.avif       # Imagem utilizada na página inicial
└── js/
    ├── boas.js          # Rotas, templates e eventos da interface
    ├── grafico.js       # Integração com Chart.js
    └── storage.js       # Leitura e gravação no localStorage
```

## Como executar

1. Clone o repositório:

```bash
git clone https://github.com/gorucchi07/Projeto-acad-mico-ONG-esperan-a.git
```

2. Abra a pasta clonada no VS Code.
3. Inicie um servidor local, como a extensão **Live Server**.
4. Abra o arquivo `ONG/html/index.html` pelo servidor local.

O uso de servidor local é recomendado porque a aplicação utiliza módulos ES6 com `import` e `export`. A aplicação também carrega Bootstrap e Chart.js por CDN, portanto a conexão com a internet deve estar disponível para carregar essas bibliotecas.

## Rotas da aplicação

- `#/home`: apresentação da ONG, gráfico e contato.
- `#/projetos`: projetos sociais e modal de participação.
- `#/cadastro`: formulário de cadastro de voluntários.

## Organização modular

O código JavaScript foi dividido por responsabilidade:

- `boas.js` controla o fluxo da SPA e os eventos da interface.
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

## Repositório

[Projeto-acadêmico-ONG-Esperança no GitHub](https://github.com/gorucchi07/Projeto-acad-mico-ONG-esperan-a)
