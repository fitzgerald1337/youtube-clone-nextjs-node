import express from "express";

const app = express();
const port = 1337;

app.get("/", (req, res) => {
  res.send("hello world!");
})

app.listen(port, () => {
  console.log(`Video processing service listening at http://localhost:${port}`);
})
