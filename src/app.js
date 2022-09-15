"use strict";

const express = require("express"),
      app = express();

// Settings
app.set("port", process.env.PORT || 3000);

// Middleware
app.use(express.json());

// Routers
app.use("/api/v1/products", require("./routers/products"))
   .use("/api/v1/users", require("./routers/users"))
   .use("/api/v1/roles", require("./routers/roles"))
   .use("/api/v1/sales", require("./routers/sales"))
   .use("/api/v1/sales-date", require("./routers/salesDate"));

module.exports = app;