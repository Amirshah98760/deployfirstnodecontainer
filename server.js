const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello from my Dockerized Node.js app!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1><p>Built with Express and Docker.</p>");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date() });
});

app.get("/api/hello/:name", (req, res) => {
  res.json({ message: `Hello, ${req.params.name}!` });
});

app.listen(PORT, "0.0.0.0",() => {
  console.log(`Server running on port ${PORT}`);
});