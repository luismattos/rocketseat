import updateUsersTableView from "./userstableview.js";
import persistence from "./persistence.js";
import GitHubUser from "./githubuser.js";
import configForm from "./form.js";

configForm(onSubmit);

const users = persistence.get();

viewUpdate();

async function onSubmit(loginInValue) {
  const users = persistence.get();
  const newUser = await GitHubUser(loginInValue);
  let canAdd = true;

  users.forEach((user) => {
    if (newUser.isEqual(user)) {
      canAdd = false;
    }
  });

  if (!canAdd) {
    return;
  }

  persistence.update([newUser.user, ...users]);

  viewUpdate();
}

async function onRemove(loginValue) {
  console.log("login", loginValue);
  const userToBeRemoved = await GitHubUser(loginValue);

  console.log("userToBeRemoved: ", userToBeRemoved);

  const users = persistence
    .get()
    .filter((user) => !userToBeRemoved.isEqual(user));

  persistence.update(users);

  viewUpdate();
}

function viewUpdate() {
  updateUsersTableView(persistence.get(), onRemove);
}
