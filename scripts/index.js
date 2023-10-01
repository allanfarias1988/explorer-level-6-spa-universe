import { Router } from "./router.js";
import { setBackground } from "./setBackground.js";

const router = new Router();

router.add("/", "./pages/home.html");
router.add("/explorer", "./pages/explorer.html");
router.add("/universe", "./pages/universe.html");
router.add("/404", "./pages/404.html");

document.addEventListener("DOMContentLoaded", () => {
  router.handle(); // Inicializa a página com base na URL atual.
});

document.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "A") {
    router.route(event); // Navega para a nova rota quando um link é clicado.

    const targetHref = event.target.href;
    setBackground(targetHref);
  }
});

window.onpopstate = () => router.handle();
