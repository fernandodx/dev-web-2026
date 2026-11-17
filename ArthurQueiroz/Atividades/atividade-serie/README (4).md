# 3ª Avaliação: Página de Série

Página web sobre a série **O Mentalista** (*The Mentalist*), feita com HTML semântico e Bootstrap 5 via CDN para a 3ª Avaliação Oficial.

## Estrutura do projeto

```
atividade-serie/
├── index.html   # página completa (HTML + Bootstrap via CDN)
├── capa.jpg     # imagem da série (opcional, usada na seção Sinopse)
└── README.md    # descrição do projeto
```

## Conceitos aplicados

- **HTML semântico:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<figure>`, `<figcaption>` e `<footer>`.
- **Bootstrap via CDN:** CSS e JS carregados pelo jsDelivr, com grid responsivo (`container`, `row`, `col-*`) e classes utilitárias de espaçamento, cores e alinhamento.
- **Componentes novos estudados:**
  - **Card:** cada personagem do elenco principal aparece em um card com ator e descrição.
  - **Breadcrumb:** navegação de contexto no topo (Início > Séries > O Mentalista).
  - **Carousel:** carrossel com 3 slides de destaque (Patrick Jane, a equipe da CBI e a caçada a Red John), com indicadores e botões de navegação.

## Conteúdo da página

- Título da série
- Sinopse
- Elenco principal
- Imagem da série
- Ficha da série (criador, emissora, exibição, temporadas e gênero)

## Como visualizar

1. Baixe ou clone o repositório.
2. Abra o `index.html` no navegador **com a internet ativa**, para que o Bootstrap seja carregado pelo CDN.

## Autor

Arthur Felipe Queiroz Costa
