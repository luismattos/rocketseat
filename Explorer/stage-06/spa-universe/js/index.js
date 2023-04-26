import router from "./router.js";

run();

function run() {
  populaRouter();
  config();
  router.handle();

  function config() {
    const pages = document.querySelectorAll("nav a");

    pages.forEach((page) => {
      page.addEventListener("click", router.route);
    });
  }

  function populaRouter() {
    const path = "/pages/";

    router.add("/", path + "home.html");
    router.add("/home", path + "home.html");
    router.add("/exploracao", path + "exploracao.html");
    router.add("/o-universo", path + "o-universo.html");
    router.add(404, path + "404.html");
  }
}
