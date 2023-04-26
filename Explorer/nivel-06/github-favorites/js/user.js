export default function User(id) {
  const userId = id;

  async function model() {
    const gitHubEndPoint = "https://api.github.com";
    const usersEndPoint = `${gitHubEndPoint}/users`;

    const response = await fetch(`${usersEndPoint}/${userId}`);

    if (response.status != 200) {
      return false;
    }

    const data = await response.json();

    const {
      avatar_url,
      followers,
      followers_url,
      login,
      name,
      public_repos,
      repos_url,
      url,
    } = data;

    return {
      avatar_url,
      followers,
      followers_url,
      login,
      name,
      public_repos,
      repos_url,
      url,
    };
  }

  async function view() {
    const removeStr = String.fromCharCode(0x2718);
    const user = await model(userId);

    if (!user) {
      return false;
    }

    function createTdUserInfo() {
      const divAux = document.createElement("div");
      divAux.appendChild(ImgUserImg());
      divAux.appendChild(DivUserNameIdWrapper());

      const tdUserInfo = document.createElement("td");
      tdUserInfo.classList.add("user-info");
      tdUserInfo.appendChild(divAux);

      function DivUserNameIdWrapper() {
        const userNameElem = document.createElement("div");
        userNameElem.classList.add("user-name");
        userNameElem.textContent = `${user.name}`;

        const userIdElem = document.createElement("a");
        userIdElem.classList.add("user-id");
        userIdElem.textContent = `${user.login}`;
        userIdElem.href = `${user.url}`;

        const userNameIdWrapperElem = document.createElement("div");
        userNameIdWrapperElem.appendChild(userNameElem);
        userNameIdWrapperElem.appendChild(userIdElem);

        return userNameIdWrapperElem;
      }

      function ImgUserImg() {
        const userImgElem = document.createElement("img");
        userImgElem.classList.add("user-img");
        userImgElem.src = `${user.avatar_url}`;
        userImgElem.alt = `Avatar de ${user.name}`;

        return userImgElem;
      }

      return tdUserInfo;
    }

    function createTdUserRepositories() {
      const tdUserRepositories = document.createElement("td");
      tdUserRepositories.classList.add("user-repositories");
      tdUserRepositories.appendChild(
        document.createTextNode(`${user.public_repos}`)
      );
      return tdUserRepositories;
    }

    function createTdUserFollowers() {
      const tdUserFollowers = document.createElement("td");
      tdUserFollowers.classList.add("user-followers");
      tdUserFollowers.appendChild(document.createTextNode(`${user.followers}`));
      return tdUserFollowers;
    }

    function createTdUserRemove() {
      const tdUserRemove = document.createElement("td");
      tdUserRemove.classList.add("user-remove");
      tdUserRemove.appendChild(document.createTextNode(removeStr));
      return tdUserRemove;
    }

    function assemble() {
      const trUser = document.createElement("tr");
      trUser.classList.add("user");
      trUser.appendChild(createTdUserInfo());
      trUser.appendChild(createTdUserRepositories());
      trUser.appendChild(createTdUserFollowers());
      trUser.appendChild(createTdUserRemove());
      return trUser;
    }

    return assemble();
  }

  return { id: userId, model, view };
}
