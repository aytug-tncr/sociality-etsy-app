const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");

const productRoutes = require("./routers/productRoute");

/* Middleware */

app.use(express.json());
app.use(cors());
/* Middleware */

/* All Routes */

app.use("/post", productRoutes);

/* All Routes */

const port = 4000;

app.listen(port, () => {
  console.log(`Rest Api Working http://localhost:${port}`);
});
