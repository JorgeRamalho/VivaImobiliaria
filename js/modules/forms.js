/**
 * Formulários de busca e contato
 */

import { showFormFeedback } from "./feedback.js";
import { applySearchFilter, setActiveFilterButton } from "./filters.js";
import { prefersReducedMotion } from "./utils.js";

export function initForms() {
  const searchForm = document.querySelector(".search-box");
  const contactForm = document.querySelector(".contact-form");
  const searchFeedback = document.getElementById("search-feedback");
  const contactFeedback = document.getElementById("contact-feedback");

  if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const tipo =
        /** @type {HTMLSelectElement | null} */ (searchForm.querySelector("#tipo"))
          ?.value || "";
      const cidade =
        /** @type {HTMLInputElement | null} */ (searchForm.querySelector("#cidade"))
          ?.value.trim() || "";
      const preco =
        /** @type {HTMLSelectElement | null} */ (searchForm.querySelector("#preco"))
          ?.value || "";

      setActiveFilterButton("todos");
      const visible = applySearchFilter({ tipo, cidade, preco });

      const grid = document.getElementById("properties-grid");
      grid?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });

      if (visible === 0) {
        showFormFeedback(
          searchFeedback,
          "Nenhum imóvel encontrado. Tente outros critérios ou limpe a busca.",
          "info"
        );
        return;
      }

      const parts = [];
      if (tipo) parts.push(tipo);
      if (cidade) parts.push(cidade);
      if (preco) parts.push("faixa de preço");
      const detail = parts.length ? ` · ${parts.join(" · ")}` : "";

      showFormFeedback(
        searchFeedback,
        `${visible} imóvel${visible > 1 ? "eis" : ""} encontrado${visible > 1 ? "s" : ""}${detail}.`,
        "success"
      );
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nome = /** @type {HTMLInputElement | null} */ (contactForm.querySelector("#nome"));
      const email = /** @type {HTMLInputElement | null} */ (contactForm.querySelector("#email"));

      if (!nome?.value.trim() || !email?.value.trim()) {
        showFormFeedback(
          contactFeedback,
          "Preencha nome e e-mail para enviarmos sua mensagem.",
          "error"
        );
        (nome?.value.trim() ? email : nome)?.focus();
        return;
      }

      if (email && !email.checkValidity()) {
        showFormFeedback(contactFeedback, "Informe um e-mail válido.", "error");
        email.focus();
        return;
      }

      showFormFeedback(
        contactFeedback,
        "Mensagem enviada com sucesso. Entraremos em contato em até 2 horas úteis.",
        "success"
      );
      contactForm.reset();
    });
  }
}
