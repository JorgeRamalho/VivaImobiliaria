# Identidade visual, tipografia e UX/UI

**Última atualização:** 11/08/2026  
**Fonte de tokens:** `css/style.css` (`:root`)

---

## 1. Estado atual (as-is)

### 1.1 Paleta (regra 60-30-10 no CSS)

| Papel | Token | Hex | Uso |
|-------|-------|-----|-----|
| Neutro 60% | `--color-bg` | `#FAFAF8` | Fundo |
| Neutro | `--color-bg-alt` | `#F0EDE8` | Seções alternadas |
| Marca 30% | `--color-primary` | `#1B3A4B` | Textos / header scrolled |
| Marca | `--color-primary-light` | `#2C5282` | Links |
| Destaque 10% | `--color-accent` | `#C9A227` | CTAs |
| Texto | `--color-text` | `#2D3748` | Corpo |

### 1.2 Tipografia (atualizado P1 — 11/08/2026)

| Papel | Família | Origem |
|-------|---------|--------|
| Títulos | Playfair Display | Google Fonts |
| Corpo | **Manrope** | Google Fonts |

Inter foi removido. Manrope traz geometria mais própria para marca boutique sem cair no default genérico.

### 1.3 Marca no UI (atualizado P1)

- Logo = **SVG mark** (portal/chave dourada sobre quadrado da marca) + wordmark “Viva **Imobiliária**”
- Arquivo estático: `images/logo.svg` (também inline no header/footer para `currentColor`)
- Marca reforçada no hero via `.hero__brand` (P0)

---

## 2. Princípios-alvo (to-be)

1. **Uma composição na 1ª dobra** — marca + uma headline + uma frase + um grupo de CTA + imagem full-bleed.
2. **Marca primeiro** — se remover o nav, ainda deve ser reconhecível como Viva.
3. **Sem emoji como sistema de ícones** — SVG/stroke consistentes.
4. **Tipografia expressiva e própria** — evitar Inter como default; manter contraste serif/sans com famílias menos saturadas.
5. **Uma função por seção** — campanha, catálogo, serviços, prova social, contato.
6. **Cards só onde há interação** (ex.: card de imóvel clicável), não como decoração do hero.

---

## 3. Direção visual recomendada

| Elemento | Evitar | Preferir |
|----------|--------|----------|
| Fundo | Creme flat único | Textura fotográfica / overlay controlado / neutro frio da marca |
| Display | Playfair genérico em tudo | Serif ou grotesk com personalidade + tracking cuidadoso |
| Corpo | Inter | Source Sans / Manrope / Satoshi / similar (testar licença) |
| Logo | Emoji | Wordmark + símbolo geométrico (chave / portal / V) |
| CTAs | Dourado + emoji | Accent da marca com contraste AA |
| Motion | Autoplay sem controle | 2–3 motions: fade hero, sticky header, reveal cards |

---

## 4. UX — fluxos

### 4.1 Primário (campanha)

```
Landing → entender 15%/3x → ver imóveis da campanha → reservar / contato
```

Hoje a busca genérica no hero **desvia** deste funil.

### 4.2 Secundário (catálogo)

```
Filtros (venda / aluguel / lançamento / campanha) → card → contato
```

Este fluxo já funciona melhor que a busca.

### 4.3 Contato

Feedback com banner inline + toast (`aria-live`), sem `alert()`.

Estados: sucesso, info e erro (validação de nome/e-mail).

---

## 5. UI — componentes existentes

| Componente | Classe | Avaliação |
|------------|--------|-----------|
| Header | `.header` | Bom sticky; gradiente scrolled pode ser excessivo |
| Campaign strip | `.campaign-strip` | Útil; precisa versão compacta mobile |
| Hero + carousel | `.hero` | Conteúdo demais; carousel ok com dots |
| Search box | `.search-box` | Mover para `#imoveis` ou 2ª dobra |
| Property card | `.property-card` | Bom para interação; preço/entrada claros |
| Filters | `.filter-btn` | Padrão claro |
| Service cards | `.service-card` | Demasiados; copy meta |
| Testimonials | `.testimonial` | Ok; estrelas emoji → SVG |
| Contact form | `.contact-form` | Labels ok; feedback fraco |
| Mobile bar | `.mobile-bar` | Bom padrão de corretora |

---

## 6. Acessibilidade (checklist)

- [x] `lang="pt-BR"`
- [x] Labels associados
- [x] Alts em imagens
- [x] `aria-expanded` no menu
- [x] Skip link para `#conteudo`
- [x] `prefers-reduced-motion` no carrossel e transitions
- [x] Foco visível reforçado (`:focus-visible`)
- [ ] Contraste AA em badge dourado sobre fotos
- [ ] Não depender só de emoji para significado (parcial — cards limpos em P2)

---

## 7. Conteúdo / tom de voz

| Evitar | Preferir |
|--------|----------|
| “Layout limpo, CTAs visíveis…” | Benefício do cliente |
| Repetir “simples, fácil e prático” 4+ vezes | Uma vez na campanha + prova |
| Emoji em todo H3 | Título limpo + ícone opcional |

---

## 8. Ligação com pesquisa

Validar nova tipografia e hero enxuto com o [plano de pesquisas](../01-pesquisa/plano-de-pesquisas.md) (5-second test + preferência de marca).
