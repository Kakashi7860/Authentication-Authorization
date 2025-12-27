const jwt = require("jsonwebtoken");

exports.loginUser = (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    const token = jwt.sign(
      { username: "admin", role: "admin" },
      "secretkey",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

exports.profile = (req, res) => {
  res.json({
    message: "Profile accessed",
    user: req.user
  });
};

exports.adminData = (req, res) => {
  res.json({ message: "Welcome Admin" });
};