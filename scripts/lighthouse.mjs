/**
 * Auditoria Lighthouse opcional (SEO + Acessibilidade).
 *
 * Pré-requisito: servidor local rodando (`npm start`).
 * Uso: npm run lighthouse
 *
 * Não faz parte do build de produção — é ferramenta de QA.
 */

import { spawn } from "node:child_process";

const URL = process.env.LIGHTHOUSE_URL || "http://127.0.0.1:3000/";

const args = [
  "lighthouse",
  URL,
  "--only-categories=seo,accessibility",
  "--quiet",
  "--chrome-flags=--headless --no-sandbox",
  "--output=json",
  "--output-path=./lighthouse-report.json",
];

console.log(`Lighthouse → ${URL}`);
console.log("Categorias: SEO + Accessibility (meta ≥ 90)\n");

const child = spawn("npx", ["--yes", ...args], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => {
  if (code === 0) {
    console.log("\nRelatório salvo em lighthouse-report.json");
    console.log("Abra o JSON ou rode com --view para UI do Chrome.");
  } else {
    console.error("\nLighthouse falhou. Confirme que `npm start` está ativo na porta 3000.");
  }
  process.exit(code ?? 1);
});
