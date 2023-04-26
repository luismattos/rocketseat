const home = document.getElementById("home");
const sorte = document.getElementById("sorte");

console.log(home, sorte);

const cookie = document.querySelector("#cookie");
const btn = document.querySelector("button");

console.log(cookie, btn);

function action() {
  home.classList.toggle("visible");
  home.classList.toggle("hidden");

  sorte.classList.toggle("visible");
  sorte.classList.toggle("hidden");
}

cookie.addEventListener("click", () => {
  action();
});

btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  action();
});
