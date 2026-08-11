/**
 * Filtros por categoria e busca (tipo / cidade / preço)
 */

/**
 * @param {string} filter
 * @returns {number}
 */
export function applyCategoryFilter(filter) {
  const cards = document.querySelectorAll(".property-card");
  const empty = document.getElementById("properties-empty");
  let visible = 0;

  cards.forEach((card) => {
    const categories = (card.dataset.category || "").split(" ");
    const show = filter === "todos" || categories.includes(filter);
    card.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });

  if (empty) empty.hidden = visible > 0;
  return visible;
}

/** @param {string} filter */
export function setActiveFilterButton(filter) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("filter-btn--active", btn.dataset.filter === filter);
  });
}

/**
 * @param {HTMLElement} card
 * @param {string} precoFilter
 */
function matchesPrice(card, precoFilter) {
  if (!precoFilter) return true;
  if (card.dataset.negocio === "aluguel") return false;

  const price = Number(card.dataset.preco);
  if (Number.isNaN(price)) return false;

  if (precoFilter.startsWith("min:")) {
    return price >= Number(precoFilter.slice(4));
  }

  return price <= Number(precoFilter);
}

/**
 * @param {{ tipo: string, cidade: string, preco: string }} criteria
 * @returns {number}
 */
export function applySearchFilter(criteria) {
  const cards = document.querySelectorAll(".property-card");
  const empty = document.getElementById("properties-empty");
  const cidadeQuery = criteria.cidade.toLowerCase();
  let visible = 0;

  cards.forEach((card) => {
    const tipoOk = !criteria.tipo || card.dataset.tipo === criteria.tipo;
    const cidadeOk =
      !cidadeQuery || (card.dataset.cidade || "").includes(cidadeQuery);
    const precoOk = matchesPrice(card, criteria.preco);
    const show = Boolean(tipoOk && cidadeOk && precoOk);
    card.classList.toggle("is-hidden", !show);
    if (show) visible += 1;
  });

  if (empty) empty.hidden = visible > 0;
  return visible;
}

export function initPropertyFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter || "todos";
      setActiveFilterButton(filter);
      applyCategoryFilter(filter);
    });
  });
}
