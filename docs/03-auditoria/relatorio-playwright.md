# Relatório de auditoria — Playwright

**URL:** http://127.0.0.1:5502/html/index.html  
**Data:** 11/08/2026  
**Ferramenta:** Playwright MCP (navigate, evaluate, screenshot, resize, console)  
**Viewports:** Desktop 1440×900 · Mobile 390×844  
**Nota geral:** **51 / 100**

Canvas visual: `canvases/viva-auditoria-completa.canvas.tsx`

---

## 1. Resumo executivo

Landing de campanha **Chave na Mão** com seções completas (hero, campanha, imóveis, serviços, sobre, depoimentos, contato). Técnica base razoável (lang pt-BR, 1 H1, alts, landmarks), porém:

1. **1º viewport saturado** — busca, stats, faixa de campanha e CTAs competem.
2. **SEO técnico incompleto** — sem Open Graph, favicon, canonical, JSON-LD.
3. **Identidade genérica** — Inter + fundo creme + dourado + emoji como logo.
4. **Forms mock** — `alert()`; redes sociais com `href="#"`.

---

## 2. Scores

| Dimensão | Nota | Comentário |
|----------|-----:|------------|
| SEO | 42 | Title/description ok; falta social + schema + favicon |
| Usabilidade | 55 | Labels e barra mobile ok; feedback e links fracos |
| Responsividade | 68 | Sem overflow-X; strip/hero inchados no mobile |
| Layout / Hero | 38 | Viola orçamento de hero (muitos jobs na 1ª dobra) |
| Identidade visual | 48 | Tokens existem; marca fraca e padrão “AI default” |
| Tipografia | 52 | Hierarquia Playfair/Inter; Inter é genérico |
| UX / UI | 50 | A11y parcial; 137 emojis; autoplay sem reduced-motion |
| Estrutura projeto | 58 | Pastas claras; faltava docs (agora criada) |
| Estratégia de dev | 55 | Vanilla ok para MVP; sem lint/build/tests |

---

## 3. Evidências técnicas (evaluate)

### 3.1 Head / SEO

| Item | Resultado |
|------|-----------|
| `lang` | `pt-BR` |
| `title` | Viva Imobiliária \| Chave na Mão — 15% em até 3x |
| `meta description` | Presente |
| `viewport` | Presente |
| Open Graph | Ausente |
| Twitter Card | Ausente |
| `canonical` | Ausente |
| `favicon` | Ausente (console 404 em `/favicon.ico`) |
| JSON-LD | Ausente |
| `robots` / sitemap | Ausente |

### 3.2 Semântica e a11y

| Item | Resultado |
|------|-----------|
| Contagem H1 | 1 (ok) |
| Imagens sem alt | 0 |
| Labels em inputs | Todos com `<label for>` |
| `main` / `nav` | Presentes |
| Skip link | Ausente |
| Botões sem nome | 0 |
| Links `href="#"` | Instagram, WhatsApp, LinkedIn |

### 3.3 Tipografia e cor (computed)

| Token | Valor |
|-------|-------|
| Body font | Inter, system-ui, sans-serif |
| H1 font | Playfair Display, Georgia, serif |
| Body bg | `#FAFAF8` |
| CTA bg | `#C9A227` |
| H1 no hero | branco |

### 3.4 Mobile

| Métrica | Valor |
|---------|-------|
| Overflow-X | Não |
| Altura da faixa campanha | ~118px |
| Altura do hero | ~1125px (maior que a viewport) |
| Interativos na 1ª tela | 10 |
| Menu hambúrguer | Visível e abre |
| Mobile bar | `position: fixed` |

### 3.5 Console

```
ERROR Failed to load resource: 404 favicon.ico
```

---

## 4. Avaliação por critério pedido

### SEO

Pontos positivos: title alinhado à campanha, description, hierarquia de headings, alts descritivos, lazy-load em imagens abaixo da dobra.

Gaps: compartilhamento social sem preview, sem entidade LocalBusiness/RealEstateAgent, telefone placeholder, sem sitemap.

### Usabilidade

Barra mobile (Buscar / Ligar / Mensagem) é boa. Filtros de imóveis funcionam. Busca do hero **não** filtra a grade (só `alert`). Contato também só `alert`.

### Responsividade

Grid e tipografia fluida (`clamp`) ajudam. No mobile, a faixa da campanha e o hero empilhado destroem a hierarquia da 1ª tela.

### Layout

Seções bem nomeadas (`#campanha`, `#imoveis`…). Cards demais no hero (busca + stats). Hero não é full-bleed “limpo”: overlay + muitos controles.

### Identidade visual

Paleta documentada no CSS (60-30-10). Marca depende de emoji 🏠 + texto. Pouca diferenciação frente a landings genéricas.

### Conceitos e estratégia

Conceito de campanha clara (**15% / 3x**). Estratégia de funil misturada: campanha + busca genérica + aluguel + comercial no mesmo hero.

### Texto / tipografia

Tom de campanha repetitivo (“simples, fácil e prático”). Em serviços há meta-copy de design (“Layout limpo, CTAs visíveis…”) inadequada ao usuário final. Playfair nos títulos funciona; Inter no corpo é seguro demais.

### UX / UI Design

Padrões reconhecíveis (header sticky, filters, cards). Ruído visual por emoji. Carrossel com autoplay sem respeito explícito a `prefers-reduced-motion`. Header ao scroll usa gradiente azul–verde — pode destoar do dourado de CTA.

---

## 5. Achados priorizados

| Sev. | Achado | Evidência |
|------|--------|-----------|
| Alta | Hero sobrecarregado | Screenshot desktop/mobile; 10 controles na 1ª tela |
| Alta | SEO social/técnico ausente | evaluate meta/og/favicon |
| Alta | Identidade por emoji + stack tipográfica genérica | HTML + computed styles |
| Média | Campaign strip alta no mobile | ~118px medidos |
| Média | Forms com `alert` | `js/main.js` |
| Média | Redes `href="#"` | evaluate links |
| Média | Copy de design no conteúdo | seção `#servicos` |
| Baixa | Imagem `hero-casa.jpg` órfã | inventário `images/` |
| Baixa | Página ~12,7k px de altura | evaluate scrollHeight |

---

## 6. Metodologia

1. `browser_navigate` na URL alvo  
2. `browser_console_messages`  
3. `browser_evaluate` (SEO, a11y, tipografia, seções)  
4. `browser_resize` + screenshots desktop/mobile  
5. Clique no `.nav-toggle` (menu mobile)  
6. Revisão estática de `html/index.html`, `css/style.css`, `js/main.js`, `package.json`

---

## 7. Próximos passos

Ver [plano de melhorias](../05-roadmap/plano-de-melhorias.md).
