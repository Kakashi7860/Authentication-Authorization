const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();
const port = process.env.PORT || 5001;

// parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

// mount routes
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});