import AppError from "../utils/appError.js";

export default function UsersCtrl() {
  function index() {}

  function show() {}

  function create(req, res) {
    const { name, email, password, isAdmin } = req.body;

    if (!name) {
      throw new AppError("Name is required");
    }

    res.status(201).json({ name, email, password, isAdmin });
  }

  function update() {}

  function destroy() {}

  return { index, show, create, update, destroy };
}
