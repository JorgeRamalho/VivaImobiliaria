/**
 * Viva Imobiliária — main.js
 * Pasta: js/
 * Interações: menu mobile, filtros de imóveis, formulários
 */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initPropertyFilters();
  initForms();
  initHeaderScroll();
  initHeroCarousel();
});

/** Menu hambúrguer mobile */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/** Filtros de imóveis (venda, aluguel, lançamento) */
function initPropertyFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".property-card");

  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("filter-btn--active"));
      btn.classList.add("filter-btn--active");

      const filter = btn.dataset.filter;

      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");
        const show = filter === "todos" || categories.includes(filter);
        card.classList.toggle("is-hidden", !show);
      });
    });
  });
}

/** Formulários — feedback visual ao enviar */
function initForms() {
  const searchForm = document.querySelector(".search-box");
  const contactForm = document.querySelector(".contact-form");

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("🔍 Busca realizada! Em breve exibiremos os imóveis que correspondem aos seus critérios.");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("📨 Mensagem enviada com sucesso! Entraremos em contato em até 2 horas úteis.");
      contactForm.reset();
    });
  }
}

/** Carrossel do hero — famílias felizes */
function initHeroCarousel() {
  const carousel = document.querySelector(".hero__carousel");
  const slides = document.querySelectorAll(".hero__slide");
  const prevBtn = document.querySelector(".hero__carousel-btn--prev");
  const nextBtn = document.querySelector(".hero__carousel-btn--next");
  const dotsContainer = document.querySelector(".hero__carousel-dots");

  if (!carousel || !slides.length || !dotsContainer) return;

  let current = 0;
  let intervalId = null;
  const delay = 5000;

  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero__carousel-dot" + (index === 0 ? " hero__carousel-dot--active" : "");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Foto ${index + 1} de ${slides.length}`);
    dot.setAttribute("aria-selected", index === 0 ? "true" : "false");
    dot.addEventListener("click", () => goTo(index));
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".hero__carousel-dot");

  function goTo(index) {
    slides[current].classList.remove("hero__slide--active");
    dots[current].classList.remove("hero__carousel-dot--active");
    dots[current].setAttribute("aria-selected", "false");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("hero__slide--active");
    dots[current].classList.add("hero__carousel-dot--active");
    dots[current].setAttribute("aria-selected", "true");
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAutoplay() {
    stopAutoplay();
    intervalId = setInterval(next, delay);
  }

  function stopAutoplay() {
    if (intervalId) clearInterval(intervalId);
  }

  prevBtn?.addEventListener("click", () => { prev(); startAutoplay(); });
  nextBtn?.addEventListener("click", () => { next(); startAutoplay(); });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
}

/** Header com gradiente azul-verde ao rolar */
function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("header--scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
