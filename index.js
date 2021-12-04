const app = require("express")();

app.get("/", (req, res) => {
  res.send("<h1>Hello world<h1>");
});

app.listen(3000, () => console.log("Iniciado na port 3000"));
