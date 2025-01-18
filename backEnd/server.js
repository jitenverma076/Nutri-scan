const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const constituentRoutes = require("./routes/constituent.routes");
const dishRoutes = require("./routes/dish.routes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/constituents", constituentRoutes);
app.use("/api/dishes", dishRoutes);

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: "Something went wrong!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
