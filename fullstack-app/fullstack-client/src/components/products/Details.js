import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { productService } from "../../services/products";

export default class Details extends Component {
    state = {};
    // let params = useParams().productId;

    componentDidMount() {
        console.log({ window: window.location.pathname.split("/product/")[1] });
        let params = window.location.pathname.split("/product/")[1];
        productService.getProduct(params).then((res) => {
            this.setState({ product: res.product });
        });
    }

    displayProduct() {
        return (
            <div>
                <h3>{this.state.product.name}</h3>
                <h4>Price: {this.state.product.price}</h4>
                <h4>Seller: {this.state.product.seller.username}</h4>
                <br />
                <p>{this.state.product.description}</p>
            </div>
        );
    }

    render() {
        return <div>{this.state.product && this.displayProduct()}</div>;
    }
}
