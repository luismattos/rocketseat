const persistence = Persistence();

export default persistence;

function Persistence() {
  const lsUsersName = "users";

  function get() {
    const users = JSON.parse(localStorage.getItem(lsUsersName)) || [];

    return users;
  }

  function update(newUsers) {
    localStorage.setItem(lsUsersName, JSON.stringify(newUsers));
  }

  return { get, update };
}
