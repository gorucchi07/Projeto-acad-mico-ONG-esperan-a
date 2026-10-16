# Landing Page de Game of Thrones

Site estático desenvolvido com HTML e CSS, com conteúdo sobre casas e personagens de Westeros, galeria, tabela de atores e formulário de contato.

## Como visualizar

Abra `html/landingpage.html` usando uma extensão de servidor local, como o Live Server do VS Code. Servir o projeto localmente permite que o navegador carregue corretamente os arquivos de estilo, imagens e fontes.

## Publicação

O GitHub Actions publica automaticamente este site no GitHub Pages quando há alterações nos arquivos do site na branch `main`.

Para habilitar a publicação, abra **Settings > Pages** no repositório [`landingpage-game-of-thrones`](https://github.com/gorucchi07/landingpage-game-of-thrones/settings/pages) e selecione **GitHub Actions** em **Build and deployment > Source**. Essa configuração só precisa ser feita uma vez por alguém com permissão de administrador no repositório.

O site ficará disponível em:

<https://gorucchi07.github.io/landingpage-game-of-thrones/>

O workflow monta `index.html` na raiz publicada e inclui os estilos, imagens e fontes necessários, sem publicar outros projetos.

## Estrutura

```text
Landingpage/
├── css/
│   └── landing.css
├── fonts/
│   └── game-of-thrones.ttf
├── html/
│   └── landingpage.html
├── img/
│   └── imagens referenciadas pelo HTML e CSS
```

O HTML e o CSS estão em `html/` e `css/`. A pasta `img/` contém apenas as imagens referenciadas nesses arquivos, e `fonts/` contém a fonte utilizada pelo CSS.

## Tecnologias

- HTML5
- CSS3
- JavaScript (diretório reservado em `js/`)

Publique ou redistribua os arquivos de mídia somente se tiver autorização ou licença compatível.
