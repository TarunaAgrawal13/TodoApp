// Import express
const express = require("express");

// Create app
const app = express();

// Define port
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Server is running successfully");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

// POST route example
app.post("/data", (req, res) => {
  console.log(req.body);

  res.json({
    message: "Data received",
    data: req.body,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
