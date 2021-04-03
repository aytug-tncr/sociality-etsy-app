const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

router.post("/", productController.create_product);

router.get("/", productController.get_products);

router.get("/:id", productController.get_singleProduct);

module.exports = router;
