import keyValues from "./keyvalues.js";

/**
 *
 * @throws Will throw an error if the user is not found.
 */
export default async function GitHubUser(userLogin) {
  async function get() {
    return filter(await load(userLogin));
  }

  /**
   *
   * @throws Will throw an error if the user is not found.
   */
  async function load() {
    const response = await fetch(
      `${keyValues.gitHubUsersApiEndPoint}/${userLogin}`
    );

    if (!response.ok) {
      const errorMsg = "Load GitHub User: User not found.";
      // console.error(errorMsg);
      throw Error(errorMsg);
    }

    const ghUser = await response.json();

    return ghUser;
  }

  function filter(ghUser) {
    const { login, avatar_url, html_url, name, public_repos, followers } =
      ghUser;

    const filteredUser = {
      login,
      avatarUrl: avatar_url,
      url: html_url,
      name,
      repositories: public_repos,
      followers,
    };

    return filteredUser;
  }

  function isEqual(other) {
    if (other.login != user.login) {
      return false;
    }

    if (other.avatarUrl != user.avatarUrl) {
      return false;
    }

    if (other.url != user.url) {
      return false;
    }

    if (other.name != user.name) {
      return false;
    }

    if (other.repositories != user.repositories) {
      return false;
    }

    if (other.followers != user.followers) {
      return false;
    }

    return true;
  }

  const user = await get();

  return { user, isEqual };
}
