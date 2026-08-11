# Plano de melhorias — roadmap

**Baseline:** auditoria Playwright 11/08/2026 (nota 51/100)  
**Horizonte:** 14–30 dias para P0–P2

---

## Visão

Elevar a landing de MVP genérico para **campanha imobiliária com marca clara**, SEO compartilhável e 1º viewport focado em conversão.

---

## Backlog priorizado

### P0 — Impacto imediato (esta semana) — CONCLUÍDO 11/08/2026

| ID | Entrega | Critério de aceite | Status |
|----|---------|--------------------|--------|
| P0-1 | Enxugar hero | 1ª dobra: marca, H1, 1 subtítulo, 1 CTA, imagem; busca e stats fora | Feito |
| P0-2 | Compactar `.campaign-strip` no mobile | Altura 44px; texto curto em 1 linha | Feito |
| P0-3 | Favicon + apple-touch-icon | Sem 404 no console (`favicon.ico` / `.svg`) | Feito |
| P0-4 | Open Graph + Twitter Card | Meta tags no `<head>` | Feito |
| P0-5 | JSON-LD `RealEstateAgent` | Schema no HTML | Feito |

### P1 — Marca e confiança (semana 2) — CONCLUÍDO 11/08/2026

| ID | Entrega | Critério de aceite | Status |
|----|---------|--------------------|--------|
| P1-1 | Logo SVG (sem emoji) | Wordmark + mark no header/footer | Feito |
| P1-2 | Trocar tipografia do corpo | Inter → Manrope; design doc atualizado | Feito |
| P1-3 | Feedback de formulário sem `alert` | Inline + toast com `aria-live` | Feito |
| P1-4 | Links reais WhatsApp / Instagram | URLs válidas + wa.me com mensagem | Feito |
| P1-5 | Remover copy meta em `#servicos` | Texto voltado ao cliente | Feito |

### P2 — Produto e a11y (semana 3) — CONCLUÍDO 11/08/2026

| ID | Entrega | Critério de aceite | Status |
|----|---------|--------------------|--------|
| P2-1 | Busca filtrar `#imoveis` | Submit aplica tipo/cidade/preço + scroll | Feito |
| P2-2 | Skip link + `:focus-visible` | Tab order usável | Feito |
| P2-3 | `prefers-reduced-motion` | Carrossel sem autoplay se reduced | Feito |
| P2-4 | Organizar `images/` em subpastas | hero / properties / institutional / brand | Feito |
| P2-5 | Usar `hero-casa.jpg` | Slide no carrossel (`images/hero/casa.jpg`) | Feito |

### P3 — Governança e escala — CONCLUÍDO 11/08/2026

| ID | Entrega | Critério de aceite | Status |
|----|---------|--------------------|--------|
| P3-1 | Extrair CSS em camadas | `tokens.css` / `base.css` / `components.css` | Feito |
| P3-2 | Modularizar `main.js` | ES modules em `js/modules/` | Feito |
| P3-3 | `robots.txt` + `sitemap.xml` | Na raiz do repo | Feito |
| P3-4 | Lighthouse CI opcional | `npm run lighthouse` (npx, SEO+A11y) | Feito |

---

## Ordem sugerida de PRs

1. `fix/seo-head-favicon-og`  
2. `fix/hero-budget-mobile-strip`  
3. `feat/form-feedback-social-links`  
4. `feat/brand-logo-typography`  
5. `feat/search-wires-filters`  
6. `chore/assets-docs-css-split`

---

## Métricas de sucesso

| Métrica | Antes | Meta |
|---------|------:|-----:|
| Nota auditoria interna | 51 | ≥ 75 |
| Erros console (favicon) | 1 | 0 |
| Elementos interativos 1ª tela mobile | 10 | ≤ 4 |
| Emojis no 1º viewport | muitos | ≤ 2 |
| OG tags | 0 | ≥ 4 |

---

## Já concluído nesta organização

- [x] Auditoria Playwright documentada  
- [x] Plano de pesquisas  
- [x] Mapa raiz + pastas externas  
- [x] Design principles documentados  
- [x] README na raiz  
- [x] Estrutura `docs/01`–`05`  
- [x] **P0** — hero enxuto, strip mobile, favicon, OG/Twitter, JSON-LD  
- [x] **P1** — logo SVG, Manrope, feedback forms, redes, copy serviços  
- [x] **P2** — busca→grade, skip-link, reduced-motion, images/ organizadas  
- [x] **P3** — CSS em camadas, ES modules, robots/sitemap, lighthouse script  

## Roadmap completo (P0–P3)

Todas as entregas do plano inicial estão concluídas. Landing na **raiz** para deploy. Próximos passos opcionais: hospedagem (Netlify/Vercel), formulário real (backend).
