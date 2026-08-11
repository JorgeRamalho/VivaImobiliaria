/**
 * Viva Imobiliária — main.js (entry ES module)
 * Inicializa navegação, filtros, forms, carrossel e header
 */

import { initMobileNav } from "./modules/nav.js";
import { initPropertyFilters } from "./modules/filters.js";
import { initForms } from "./modules/forms.js";
import { initHeaderScroll } from "./modules/header.js";
import { initHeroCarousel } from "./modules/carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initPropertyFilters();
  initForms();
  initHeaderScroll();
  initHeroCarousel();
});
