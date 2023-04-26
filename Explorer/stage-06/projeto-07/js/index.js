import router from "./router.js";

const pages = document.querySelectorAll("nav a");

populaRouter();
config();

function config() {
  pages.forEach((page) => {
    page.addEventListener("click", router.route);
  });

  // Para navegacao do site funcionar(voltar e avancar)
  window.addEventListener("popstate", router.handle);

  router.handle();
}

function populaRouter() {
  const path = "/pages";

  router.add("/", path + "/home.html");
  router.add("/about", path + "/about.html");
  router.add("/contato", path + "/contato.html");
  router.add(404, path + "/404.html");
}
