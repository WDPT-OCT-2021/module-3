const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        name: String,
        seller: { type: Schema.Types.ObjectId, ref: "User" },
        description: String,
        price: String,
    },
    {
        timestamp: true,
    }
);

const Product = model("Product", productSchema);

module.exports = Product;
