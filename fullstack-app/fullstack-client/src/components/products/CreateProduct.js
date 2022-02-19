import React, { Component } from "react";
import { productService } from "../../services/products";

export default class CreateProduct extends Component {
    state = {
        name: "",
        description: "",
        price: "",
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submit = (e) => {
        e.preventDefault();
        productService.createProduct(this.state).then((data) => {
            console.log({ createdProduct: data });

            this.props.getProductData();
            window.location.href = "/products";
        });
    };

    render() {
        console.log({ createProps: this.props });
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>
                        Name:{" "}
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Phone"
                            onChange={this.handleChange}
                        />{" "}
                    </label>

                    <label>
                        Description:{" "}
                        <input
                            type="text"
                            name="description"
                            value={this.state.description}
                            placeholder="Cool Product"
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Price:{" "}
                        <input
                            type="text"
                            name="price"
                            value={this.state.price}
                            placeholder="$14.95"
                            onChange={this.handleChange}
                        />
                        <button>Create</button>
                    </label>
                </form>
            </div>
        );
    }
}
