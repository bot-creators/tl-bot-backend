require("dotenv").config();
const express = require("express");
const adminRoutes = require("./routes/admin");
const app = express();
app.use(express.json());

app.use("/admin", adminRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server is running on port: ${process.env.PORT}`)
);
