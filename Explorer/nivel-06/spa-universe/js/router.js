const router = Router();
export default router;

function Router() {
  const routes = new Map();

  function add(page, route) {
    routes.set(page, route);
  }

  function remove(page) {
    routes.delete(page);
  }

  function clear() {
    routes.clear();
  }

  function has(page) {
    return routes.has(page);
  }

  function get(page) {
    return routes.get(page);
  }

  function size() {
    return routes.size();
  }

  function route(evt) {
    evt = evt || window.event;
    evt.preventDefault();

    window.history.pushState({}, "", evt.target.href);

    handle();
  }

  function handle() {
    const { pathname } = window.location;

    const route = get(pathname) || get(404);

    fetch(route)
      .then((response) => {
        console.log(response);
        return response.text();
      })
      .then((html) => {
        console.log(html);
        document.getElementById("app").innerHTML = html;
      });
  }

  return { add, remove, clear, has, get, size, handle, route };
}
