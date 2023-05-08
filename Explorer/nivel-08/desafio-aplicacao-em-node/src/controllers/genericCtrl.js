export default function GenericCtrl() {
  function create(req, res) {
    res.status(201).json({ message: "New resource created!" });
  }

  function read(req, res) {
    res.status(302).json({ message: "Resource found!" });
  }

  function list(req, res) {
    res.status(302).json({ message: "Resources found!" });
  }

  function update(req, res) {
    res.status(301).json({ message: "Resource updated!" });
  }

  function destroy(req, res) {
    res.status(202).json({ message: "Resource deleted!" });
  }

  return { create, read, list, update, destroy };
}
