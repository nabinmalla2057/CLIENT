const e = require("express");
const express = require("express");

const app = express();
const port = +process.env.PORT || 3000;
const indexRouter = require("./routes");

mongoose.connect().then(() => {
  console.log("Database connected...");
});

app.use(express.json());

app.use("/", indexRouter);
app.use((err, res, req, next) => {
  err = err.toString() || "Something went wrong...";
  res.status(500).json({ data: "", msg: err });
});

app.listenerCount(port, () => {
  console.log("App is running on port:", port);
});
