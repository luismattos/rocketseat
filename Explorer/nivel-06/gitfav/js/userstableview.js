import keyValues from "./keyvalues.js";

export default function updateUsersTableView(users = [], onRemove = () => {}) {
  const tbodyElem = document.querySelector("tbody");

  const noUsersElem = document.querySelector(
    `.${keyValues.userClasseNames.noUsers}`
  );

  function update() {
    clear();

    users.forEach((user) => {
      addUserRow(user);
    });
  }

  function addUserRow(user) {
    try {
      hideNoUsers();
    } catch (e) {
      // console.error(e);
    }

    tbodyElem.appendChild(createUserRow(user));
  }

  function createUserRow(user) {
    const UserRow = document.createElement("tr");
    UserRow.appendChild(
      createMainTd(user.avatarUrl, user.name, user.login, user.url)
    );
    UserRow.appendChild(createRepositoriesTd(user.repositories));
    UserRow.appendChild(createFollowersTd(user.followers));
    UserRow.appendChild(createActionTd(user.login));

    //cria main td
    function createMainTd(avatarUrl, userName, userLogin, url) {
      function createMainWrapperDiv() {
        const mainWrapperDiv = document.createElement("div");
        mainWrapperDiv.appendChild(createAvatarImage());
        mainWrapperDiv.appendChild(createNameLoginWrapperDiv());

        function createNameLoginWrapperDiv() {
          const nameLoginWrapperDiv = document.createElement("div");
          nameLoginWrapperDiv.appendChild(createUserNameDiv());
          nameLoginWrapperDiv.appendChild(createUserLoginDiv());

          function createUserLoginDiv() {
            const userLoginDiv = document.createElement("div");
            userLoginDiv.classList.add(keyValues.userClasseNames.login);
            userLoginDiv.appendChild(createLoginUrlAnchor());

            function createLoginUrlAnchor() {
              const loginUrlAnchor = document.createElement("a");
              loginUrlAnchor.href = url;
              loginUrlAnchor.target = "_blank";
              loginUrlAnchor.rel = "noopener noreferrer";
              setValue(loginUrlAnchor, userLogin);
              return loginUrlAnchor;
            }

            return userLoginDiv;
          }

          function createUserNameDiv() {
            const userNameDiv = document.createElement("div");
            userNameDiv.classList.add(keyValues.userClasseNames.name);
            setValue(userNameDiv, userName);
            return userNameDiv;
          }

          return nameLoginWrapperDiv;
        }

        function createAvatarImage() {
          const avatarImg = document.createElement("img");
          avatarImg.classList.add(keyValues.userClasseNames.avatar);
          avatarImg.src = avatarUrl;
          avatarImg.alt = "Avatar Image";
          return avatarImg;
        }

        return mainWrapperDiv;
      }

      const td = document.createElement("td");
      td.appendChild(createMainWrapperDiv());

      return td;
    }

    //cria repositories td
    function createRepositoriesTd(repositories) {
      return createDefaultTd(
        repositories,
        keyValues.userClasseNames.repositories
      );
    }

    //cria followers td
    function createFollowersTd(followers) {
      return createDefaultTd(followers, keyValues.userClasseNames.followers);
    }

    //cria action td
    function createActionTd(login) {
      const div = document.createElement("div");
      div.classList.add(keyValues.userClasseNames.removeAction);
      setValue(div, keyValues.removeActionText);
      div.addEventListener("click", function (evt) {
        onRemove(login);
      });

      const td = document.createElement("td");
      td.appendChild(div);

      return td;
    }

    function createDefaultTd(textContent, className) {
      const div = document.createElement("div");
      div.classList.add(className);
      setValue(div, textContent);

      const td = document.createElement("td");
      td.appendChild(div);

      return td;
    }

    function setValue(elem, value) {
      // elem.textContent = value;
      elem.appendChild(document.createTextNode(String(value)));
    }

    return UserRow;
  }

  function clear() {
    tbodyElem.replaceChildren();

    try {
      showNoUsers();
    } catch (e) {
      // console.error(e);
    }
  }

  /**
   *
   * @throws Will throw an error if NoUsers is already visible
   */
  function showNoUsers() {
    const noUserElem = noUsersElem;

    if (!noUserElem.classList.contains(keyValues.userClasseNames.hidden)) {
      throw Error(`Show NoUsers: NoUsers is already visible.`);
    }

    noUserElem.classList.remove(keyValues.userClasseNames.hidden);
  }

  /**
   *
   * @throws Will throw an error if NoUsers is already hidden
   */
  function hideNoUsers() {
    const noUserElem = noUsersElem;

    if (noUserElem.classList.contains(keyValues.userClasseNames.hidden)) {
      throw Error(`Hide NoUsers: NoUsers is already hidden.`);
    }

    noUserElem.classList.add(keyValues.userClasseNames.hidden);
  }

  return update();
}
