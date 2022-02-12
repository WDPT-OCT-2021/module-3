const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get("/", (req, res, next) => {
    // res.render("index");
    // when creating an api, the only rez you need is a json res. (ei. res.json)

    Product.find()
        .populate("seller")
        .then((productsFromDb) => {
            res.json({ products: productsFromDb, success: true });
        })
        .catch((err) =>
            res.json({
                error: err,
                success: false,
                message: "Error Getting Products",
            })
        );
});

router.get("/:productId", (req, res, next) => {
    Product.findById(req.params.productId)
        .populate("seller")
        .then((productsFromDb) => {
            res.json({ product: productsFromDb, success: true });
        })
        .catch((err) =>
            res.json({
                error: err,
                success: false,
                message: `Error Getting Product ${req.params.productId}`,
            })
        );
});

router.post("/", (req, res, next) => {
    if (!req.user) {
        return res.json({
            success: false,
            message: "Please Log In to create a product",
        });
    }
    Product.create({ ...req.body, seller: req.user._id })
        .then((createdProduct) => {
            res.json({ success: true, product: createdProduct });
        })
        .catch((err) =>
            res.json({
                success: false,
                message: `Error while creating product ${req.body.name}`,
            })
        );
});

router.put("/", (req, res, next) => {
    Product.findByIdAndUpdate(req.body.productId, req.body, { new: true })
        .then((updatedProduct) => {
            res.json({ product: updatedProduct, success: true });
        })
        .catch((err) =>
            res.json({
                error: err,
                success: false,
                message: `Error When Updating Product ${req.body.name}`,
            })
        );
});

router.delete("/:productId", (req, res, next) => {
    Product.findByIdAndDelete(req.params.productId)
        .then(() => {
            res.json({
                success: true,
                message: "You Have Successfully Deleted A Product",
            });
        })
        .catch((err) =>
            res.json({
                error: err,
                success: false,
                message: `Error While Trying To Delete Product ${req.params.productId}`,
            })
        );
});

module.exports = router;
