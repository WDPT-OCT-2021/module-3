import React from "react";
import { Link } from "react-router-dom";
import { productService } from "../../services/products";

export default function List(props) {
    const displayList = () => {
        // console.log("display products: ", props);
        return props.products.map((product) => {
            // console.log({ product });
            return (
                <div key={product._id}>
                    <Link
                        // to={{
                        //     pathname: `/product/${product.id}`,
                        //     state: { product },
                        // }}
                        to={`/product/${product._id}`}
                    >
                        {product.name}
                    </Link>{" "}
                    <button
                        style={{ color: "red" }}
                        onClick={() =>
                            productService
                                .deleteProduct(product._id)
                                .then(() => props.getProductData())
                        }
                    >
                        X
                    </button>
                </div>
            );
        });
    };
    return (
        <div>
            {!!props.user && <Link to="/product/create">Add a Product</Link>}
            <br />
            {!!props.products && !!props.products?.length ? (
                displayList()
            ) : (
                <h3>No Products to Display</h3>
            )}
        </div>
    );
}
