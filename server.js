const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});