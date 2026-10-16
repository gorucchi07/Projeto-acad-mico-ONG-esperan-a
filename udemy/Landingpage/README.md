# Landing Page de Game of Thrones

Site estático desenvolvido com HTML e CSS, com conteúdo sobre casas e personagens de Westeros, galeria, tabela de atores e formulário de contato.

## Como visualizar

Abra `html/landingpage.html` usando uma extensão de servidor local, como o Live Server do VS Code. Servir o projeto localmente permite que o navegador carregue corretamente os arquivos de estilo, imagens e fontes.

## Publicação

O GitHub Actions publica esta Landingpage no GitHub Pages quando há alterações em `udemy/Landingpage/` na branch `develop`.

Depois de habilitar o GitHub Pages com a opção **GitHub Actions** em **Settings > Pages** do repositório, o site ficará disponível em:

<https://gorucchi07.github.io/Projeto-acad-mico-ONG-esperan-a/>

O workflow prepara a página como `index.html` na raiz publicada e inclui apenas os estilos, imagens e fontes usados pela Landingpage.

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
