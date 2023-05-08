export default function (router, { list, create, read, update, destroy }) {
  router.get("/", list);
  router.post("/", create);
  router.get("/:id", read);
  router.put("/:id", update);
  router.delete("/:id", destroy);
}
