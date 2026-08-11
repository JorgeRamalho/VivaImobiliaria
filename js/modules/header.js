/**
 * Header com estado ao rolar
 */

export function initHeaderScroll() {
  const header = document.querySelector(".header");
  if (!header) return;

  const updateHeader = () => {
    header.classList.toggle("header--scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}
