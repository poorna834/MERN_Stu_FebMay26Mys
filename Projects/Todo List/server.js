const { app } = require("./app");
const routes = require("./routes");


app.use("/todos", routes);


app.get("/", (req, res) => {
  res.send("Todo API Running...");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});