const router = Router();
export default router;

function Router() {
  const routesMap = new Map();

  function add(page, route) {
    routesMap.set(page, route);
  }

  function remove(page) {
    routesMap.delete(page);
  }

  function get(page) {
    return routesMap.get(page);
  }

  function has(page) {
    return routesMap.has(page);
  }

  function clear() {
    routesMap.clear();
  }

  function size() {
    return routesMap.size();
  }

  function route(evt) {
    evt = evt || window.event;
    evt.preventDefault();

    window.history.pushState({}, "", evt.target.href);

    console.log(this.routesMap);
    handle();
  }

  function handle() {
    const { pathname } = window.location;
    const route = get(pathname) || get(404);

    fetch(route)
      .then((data) => {
        return data.text();
      })
      .then((html) => {
        console.log(html);
        document.getElementById("app").innerHTML = html;
      });
  }

  return {
    add,
    remove,
    get,
    has,
    clear,
    size,
    route,
    handle,
  };
}
