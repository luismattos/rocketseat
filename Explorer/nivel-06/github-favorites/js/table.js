import User from "./user.js";

const table = Table();
export default table;

function Table() {
  const tbody = document.querySelector("tbody");

  async function addUserRow(userId, doItOnRemove) {
    const user = User(userId);
    const userView = await user.view();

    if (!userView) {
      return false;
    }

    const rmBtn = userView.querySelector(".user-remove");

    rmBtn.addEventListener("click", function (evt) {
      doItOnRemove(evt);
      tbody.removeChild(userView);
    });

    tbody.appendChild(userView);

    return true;
  }

  return { addUserRow };
}
