# Plano de pesquisas — Viva Imobiliária

Documento vivo para estruturar descobertas antes de mudanças grandes de produto, marca ou SEO.

**Última atualização:** 11/08/2026  
**Status:** Planejado com baseline Playwright concluído

---

## 1. Objetivos de pesquisa

1. Validar se a campanha **Chave na Mão** comunica valor em menos de 5 segundos no 1º viewport.
2. Medir atrito mobile (faixa de campanha, hero, barra inferior, formulários).
3. Mapear lacunas técnicas de SEO que bloqueiam compartilhamento e rich results.
4. Definir direção de identidade visual distinta do padrão genérico (Inter + creme + dourado).
5. Entender jornada comprar / alugar / lançamento vs. oferta da campanha.

---

## 2. Hipóteses

| ID | Hipótese | Como validar | Status |
|----|----------|--------------|--------|
| H1 | O 1º viewport tem demasiados elementos e reduz conversão | Heatmap / 5-second test / A-B hero | Aberta |
| H2 | Emojis em excesso prejudicam percepção de marca boutique | Preferência de marca (5 usuários) | Aberta |
| H3 | “15% em 3x” é o mensagem principal; busca no hero compete com ela | Card sorting de CTAs | Aberta |
| H4 | Falta de OG/favicon reduz CTR em WhatsApp/social | Preview social + checklist SEO | **Confirmada** (auditoria) |
| H5 | Mobile strip da campanha consome atenção demais | Screenshot 390px + scroll depth | **Confirmada** |

---

## 3. Matriz de pesquisas

### 3.1 Desk research (semana 1)

| Tema | Fontes | Entregável |
|------|--------|------------|
| SEO imobiliário BR | Google Search Central, Schema.org RealEstateListing / RealEstateAgent | Checklist técnico |
| Benchmarks de landing | 3–5 sites de corretoras (QuintoAndar, Lopes, local) | Tabela comparativa |
| Tipografia imobiliária | Catálogos de fontes (evitar Inter como default) | 2–3 pares tipográficos |
| Acessibilidade | WCAG 2.2 AA (contraste, motion, foco) | Gaps vs. site atual |

### 3.2 Pesquisa com usuários (semana 2)

| Método | Amostra | Roteiro |
|--------|---------|---------|
| 5-second test | 5–8 pessoas | “O que a empresa oferece?” |
| Think-aloud mobile | 3–5 | Abrir site → achar imóvel da campanha → contato |
| Preferência de marca | 5 | Versão atual vs. mock sem emoji / tipografia nova |

### 3.3 Analytics (quando houver produção)

| Métrica | Evento |
|---------|--------|
| CTR CTA “Reservar” | click `.btn` em cards campanha |
| Submit contato | submit `.contact-form` |
| Uso filtros | click `.filter-btn` |
| Scroll hero | % que passa `#campanha` |

---

## 4. Perguntas de pesquisa (script curto)

1. Em uma frase, o que é a Viva Imobiliária?
2. Qual o benefício da campanha Chave na Mão?
3. Você confiaria nesta marca para financiar/reservar um imóvel? Por quê?
4. O que atrapalhou na tela inicial (mobile)?
5. O que você faria em seguida?

---

## 5. Critérios de sucesso (pós-redesign)

| Critério | Meta |
|----------|------|
| 5-second test — mensagem correta | ≥ 70% cita “15% / 3x / reserva” |
| Tempo até CTA campanha (mobile) | ≤ 8 s sem scroll excessivo |
| Lighthouse SEO | ≥ 90 |
| Lighthouse A11y | ≥ 90 |
| Emojis no 1º viewport | 0–2 (preferência: ícones SVG) |

---

## 6. Próximo passo

Executar **desk research SEO + tipografia** em paralelo ao backlog **P0** do [plano de melhorias](../05-roadmap/plano-de-melhorias.md).
