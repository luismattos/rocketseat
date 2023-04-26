const keyValues = KeyValues();

export default keyValues;

function KeyValues() {
  const userClasseNames = {
    name: "user-name",
    login: "user-login",
    avatar: "user-avatar",
    repositories: "user-repositories",
    followers: "user-followers",
    removeAction: "user-remove",
    noUsers: "empty-table",
    hidden: "hidden",
  };

  const formIds = {
    submitBtn: "btn-submit",
    userLoginInput: "in-login",
  };

  const removeActionText = "Remove";

  const gitHubUsersApiEndPoint = "https://api.github.com/users";

  const whiteStarChar = 0x2606;

  return {
    userClasseNames,
    formIds,
    gitHubUsersApiEndPoint,
    whiteStarChar,
    removeActionText,
  };
}
