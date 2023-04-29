const express = require("express");
const birds = require("./birds");
const app = express();
const port = 3000;

const routeHandleMap = new Map();
routeHandleMap.set("/", (req, res) => res.send("Hello World!"));

routeHandleMap.set("/404", (req, res) => res.send("404 Error"));

// route parameters (/user/Luis Paulo)
routeHandleMap.set("/user/:userName", (req, res) =>
  res.send(`Hello ${req.params.userName}`)
);

// query parameters (/users?name=Luis Paulo&age=34)
routeHandleMap.set("/users", (req, res) => {
  const { name, age } = req.query;

  res.send(`${name} is ${age} yo.`);
});

routeHandleMap.forEach((handle, route) => {
  app.get(route, handle);
});

app.use("/birds", birds);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
