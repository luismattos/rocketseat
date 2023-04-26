import table from "./table.js";
import User from "./user.js";

const form = document.querySelector("form");
const btnSearch = document.getElementById("btn-search");
const inUser = document.getElementById("in-user");

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
} else {
  load();
}

form.addEventListener("submit", async function (evt) {
  evt.preventDefault();

  // {}
  // if()
  const user = User(inUser.value);
  const userModel = await user.model();
  const users = JSON.parse(localStorage.getItem("users"));

  if (!userModel) {
    return false;
  }

  await table.addUserRow(inUser.value, function () {
    const newUsers = users.filter((u) => {
      return u.login != userModel.login;
    });

    localStorage.setItem("users", JSON.stringify(newUsers));
  });

  persist(userModel);
});

function persist(userModel) {
  const userModels = JSON.parse(localStorage.getItem("users"));
  userModels.push(userModel);

  localStorage.setItem("users", JSON.stringify(userModels));
}

function load() {
  const userModels = JSON.parse(localStorage.getItem("users"));

  userModels.forEach((userModel) => {
    table.addUserRow(userModel.login, function () {
      const newUsers = JSON.parse(localStorage.getItem("users")).filter((u) => {
        return u.login != userModel.login;
      });

      localStorage.setItem("users", JSON.stringify(newUsers));
    });
  });
}
