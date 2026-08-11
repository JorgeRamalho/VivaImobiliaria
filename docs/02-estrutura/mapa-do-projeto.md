# Mapa do projeto — estrutura e organização

**Última atualização:** 11/08/2026

---

## 1. Pasta raiz (repositório Git)

Caminho absoluto:

`J:\area de trabalho\Fron_End\Projetos\Projeto-Vivaimobiliaria`

### 1.1 Inventário ordenado

| Ordem | Item | Tipo | Função |
|------:|------|------|--------|
| 01 | `README.md` | Doc | Porta de entrada do projeto |
| 02 | `package.json` | Config | Scripts e dependências (live-server) |
| 03 | `.gitignore` | Config | Ignora `node_modules` etc. |
| 04 | `index.html` | Entry | **Landing principal** (deploy na raiz) |
| 05 | `robots.txt` / `sitemap.xml` | SEO | Crawl / índice |
| 06 | `docs/` | Doc | Documentação profissional numerada |
| 07 | `html/` | Compat | Redirect → `/` (URLs antigas) |
| 08 | `css/` | Source | Estilos em camadas |
| 09 | `js/` | Source | ES modules |
| 10 | `images/` | Assets | `hero/`, `properties/`, `institutional/`, `brand/` |
| 11 | `scripts/` | Tooling | Lighthouse opcional |
| 12 | `.git/` | VCS | Histórico e branches |

### 1.2 Responsabilidades por pasta

```
index.html → conteúdo e semântica (SEO on-page) na raiz
html/      → redirect de compatibilidade
css/       → apresentação, tokens, responsividade
js/        → comportamento (nav, filtros, carrossel, forms)
images/    → mídia estática (subpastas por uso)
docs/      → governança, auditoria, roadmap
```

### 1.3 Convenção de nomes (assets)

Ver `images/README.md` (estrutura `hero/`, `properties/`, `institutional/`, `brand/`).

---

## 2. Pastas fora da raiz do repositório

### 2.1 Ecossistema local

```
Fron_End/
├── Arquivos/          ← material geral (fora deste Git)
└── Projetos/          ← portfólio de projetos front-end
    ├── Projeto-Vivaimobiliaria/   ← ESTE REPO
    ├── Projeto-VivaPay/           ← projeto irmão (nome Viva*)
    ├── Projeto-Locar/             ← possível referência imobiliária
    └── Projeto-* (dezenas)        ← outros trabalhos locais
```

| Caminho relativo à raiz do repo | Relação | Observação |
|----------------------------------|---------|------------|
| `../` (`Projetos/`) | Irmãos | Outros `Projeto-*`; **sem imports cruzados** |
| `../../Arquivos/` | Tio | Arquivos gerais do workspace Fron_End |
| `Projeto-VivaPay` | Irmão nominal | Marca “Viva” — alinhar naming se forem da mesma família |

**Conclusão:** o site é **autocontido**. Não há CSS/JS/imagens fora do repositório. O mapeamento externo serve para contexto de portfólio e evitar confusão de pastas.

### 2.2 Branches Git (histórico de organização)

| Branch | Tema |
|--------|------|
| `main` | Integração atual |
| `feat/landing-page` | Markup e seções |
| `feat/interatividade` | Carrossel, filtros, menu |
| `feat/assets` | Imagens |
| `feat/dev-server` | live-server |

---

## 3. Fluxo de arquivos em runtime

```
Browser
  → /index.html              ← landing (deploy)
       ├── css/style.css
       ├── js/main.js
       └── images/**/*
  → /html/index.html         ← redirect → /
```

URLs tipicas (Live Server na raiz):

- `http://127.0.0.1:5502/` → página principal
- `http://127.0.0.1:5502/html/index.html` → redirect para a raiz

---

## 4. Organização atual (pós raiz + P3)

```
/
├── index.html              ← landing
├── robots.txt / sitemap.xml
├── favicon.ico / .svg
├── html/index.html         ← compat redirect
├── css/tokens|base|components|style.css
├── js/main.js + modules/
├── images/hero|properties|institutional|brand/
└── scripts/lighthouse.mjs
```

---

## 5. Checklist de higiene da raiz

- [x] README na raiz
- [x] docs/ numerada
- [x] Separação css / js / images
- [x] Favicon na raiz
- [x] Landing na raiz (`index.html`) para deploy
- [x] `html/` só como redirect de compatibilidade
- [x] Remover ou usar `hero-casa.jpg` órfã → `images/hero/casa.jpg` no carrossel
- [x] Extrair CSS monolítico em camadas (`tokens` / `base` / `components`)
- [x] Modularizar JS (`js/modules/`)
- [x] `robots.txt` + `sitemap.xml` na raiz
