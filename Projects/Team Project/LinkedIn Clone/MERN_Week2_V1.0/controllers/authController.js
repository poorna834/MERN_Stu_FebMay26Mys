const users = require('../data/users');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
  const { email, password } = req.body;

  const exists = users.find(u => u.email === email);

  if (exists) {
    return res.status(400).json({ error: "User exists" });
  }

  const user = {
    id: Date.now().toString(),
    email,
    password,
    role: "user"
  };

  users.push(user);

  res.status(201).json({ message: "Registered" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    "jwt-secret",
    { expiresIn: "1h" }
  );

  req.session.user = user.id;

  res.cookie("token", token, { httpOnly: true });

  res.json({
    message: "Login successful",
    token
  });
};