const router = require("express").Router();
const multer = require("multer");
const os = require("os");
const { police_check } = require("../../middlewares");

const productController = require("./controller");

router.get("/products", productController.index);

module.exports = router;
