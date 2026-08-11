/**
 * Carrossel do hero — respeita prefers-reduced-motion
 */

import { prefersReducedMotion } from "./utils.js";

export function initHeroCarousel() {
  const carousel = document.querySelector(".hero__carousel");
  const slides = document.querySelectorAll(".hero__slide");
  const prevBtn = document.querySelector(".hero__carousel-btn--prev");
  const nextBtn = document.querySelector(".hero__carousel-btn--next");
  const dotsContainer = document.querySelector(".hero__carousel-dots");

  if (!carousel || !slides.length || !dotsContainer) return;

  let current = 0;
  /** @type {ReturnType<typeof setInterval> | null} */
  let intervalId = null;
  const delay = 5000;
  const reduceMotion = prefersReducedMotion();

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

  /** @param {number} index */
  function goTo(index) {
    slides[current].classList.remove("hero__slide--active");
    dots[current].classList.remove("hero__carousel-dot--active");
    dots[current].setAttribute("aria-selected", "false");

    current = (index + slides.length) % slides.length;

    slides[current].classList.add("hero__slide--active");
    dots[current].classList.add("hero__carousel-dot--active");
    dots[current].setAttribute("aria-selected", "true");
  }

  function next() {
    goTo(current + 1);
  }

  function prev() {
    goTo(current - 1);
  }

  function startAutoplay() {
    if (reduceMotion) return;
    stopAutoplay();
    intervalId = setInterval(next, delay);
  }

  function stopAutoplay() {
    if (intervalId) clearInterval(intervalId);
  }

  prevBtn?.addEventListener("click", () => {
    prev();
    startAutoplay();
  });
  nextBtn?.addEventListener("click", () => {
    next();
    startAutoplay();
  });

  if (!reduceMotion) {
    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    startAutoplay();
  }
}
