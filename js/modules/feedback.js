/**
 * Feedback inline (aria-live) + toast flutuante
 */

/**
 * @param {HTMLElement | null} inlineEl
 * @param {string} message
 * @param {"success" | "info" | "error"} [tone="info"]
 */
export function showFormFeedback(inlineEl, message, tone = "info") {
  if (inlineEl) {
    inlineEl.hidden = false;
    inlineEl.textContent = message;
    inlineEl.className = `form-feedback${inlineEl.id === "search-feedback" ? " form-feedback--section" : ""} form-feedback--${tone}`;
  }

  const toast = document.getElementById("form-toast");
  if (!toast) return;

  toast.hidden = false;
  toast.textContent = message;
  toast.className = `form-toast form-toast--${tone} is-visible`;

  window.clearTimeout(showFormFeedback._timer);
  showFormFeedback._timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
    window.setTimeout(() => {
      toast.hidden = true;
      toast.textContent = "";
    }, 250);
  }, 4500);
}
