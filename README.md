# Viva Imobiliária

Site institucional / landing da campanha **Chave na Mão** (15% da reserva em até 3x).

| | |
|---|---|
| **Stack** | HTML5 · CSS3 · JavaScript (vanilla) |
| **Servidor local** | Live Server / `npm start` |
| **URL local** | `http://127.0.0.1:3000/` (ou Live Server `:5502/`) |
| **Site online** | [vivaimobiliária.netlify.app](https://vivaimobiliária.netlify.app/) |
| **Repositório** | [github.com/JorgeRamalho/Vivaimobiliaria](https://github.com/JorgeRamalho/Vivaimobiliaria) |
| **Nota auditoria** | **51/100** baseline (11/08/2026); P0–P3 aplicados |

---

## Início rápido

```bash
git clone https://github.com/JorgeRamalho/Vivaimobiliaria.git
cd Vivaimobiliaria
npm install
npm start
# abre a raiz / (porta 3000)
```

Com a extensão Live Server no VS Code/Cursor, a porta pode ser **5502**.

A landing é o `index.html` na **raiz**. `html/index.html` só redireciona para `/` (URLs antigas).

---

## Estrutura do repositório

```
Projeto-Vivaimobiliaria/
├── README.md
├── package.json
├── index.html                ← página principal (deploy)
├── robots.txt
├── sitemap.xml
├── favicon.ico / .svg
├── html/
│   └── index.html            ← redirect → /
├── css/
│   ├── style.css             ← entry (@import)
│   ├── tokens.css
│   ├── base.css
│   └── components.css
├── js/
│   ├── main.js               ← entry ES module
│   └── modules/
├── images/
│   ├── hero/
│   ├── properties/
│   ├── institutional/
│   └── brand/
├── scripts/
│   └── lighthouse.mjs
└── docs/
    ├── 01-pesquisa/
    ├── 02-estrutura/
    ├── 03-auditoria/
    ├── 04-design/
    └── 05-roadmap/
```

Detalhes e mapa do ecossistema `Fron_End/Projetos/`: [docs/02-estrutura/mapa-do-projeto.md](docs/02-estrutura/mapa-do-projeto.md).

---

## Documentação

| Pasta | Conteúdo |
|-------|----------|
| [docs/01-pesquisa](docs/01-pesquisa/plano-de-pesquisas.md) | Plano de pesquisas (SEO, UX, mercado) |
| [docs/02-estrutura](docs/02-estrutura/mapa-do-projeto.md) | Mapa de pastas (raiz + fora da raiz) |
| [docs/03-auditoria](docs/03-auditoria/relatorio-playwright.md) | Relatório Playwright completo |
| [docs/04-design](docs/04-design/identidade-e-ux.md) | Identidade, tipografia, UX/UI |
| [docs/05-roadmap](docs/05-roadmap/plano-de-melhorias.md) | Priorização P0–P3 |

---

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm start` / `npm run dev` | Live Server na porta 3000 |
| `npm run lighthouse` | Auditoria SEO + A11y (servidor deve estar no ar) |

Arquivos de crawl na raiz: `robots.txt`, `sitemap.xml`.

---

## Autor

- **Jorge R. Barbosa**
- LinkedIn: [jorge-r-barbosa](https://www.linkedin.com/in/jorge-r-barbosa-aabb0417b/)
- GitHub: [JorgeRamalho](https://github.com/JorgeRamalho)
- Contato: 41 99143-4153

---

## Licença / CRECI

Conteúdo demonstrativo. CRECI e dados de contato no site são placeholders para a landing.
