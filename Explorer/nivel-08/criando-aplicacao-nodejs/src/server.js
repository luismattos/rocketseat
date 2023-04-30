import express from "express";
import routes from "./routes/index.js";
import AppError from "./utils/appError.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/", routes);

app.use((error, req, res, next) => {
  console.error(error);

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  }

  return res.status(500).json({
    status: 500,
    message: "Internal server error",
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
