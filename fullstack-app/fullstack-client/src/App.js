import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import authService from "./services/auth";
import { productService } from "./services/products";
import Home from "./components/home/Home";
import Nav from "./components/navbar/Nav";
import Auth from "./components/auth/Auth";
import List from "./components/products/List";
import Details from "./components/products/Details";
import CreateProduct from "./components/products/CreateProduct";

class App extends Component {
    state = {
        products: null,
        user: null,
        loading: true,
    };

    componentDidMount() {
        this.getUserData();
        this.getProductData();
    }

    getProductData() {
        productService.getProductsList().then((data) => {
            console.log({ data });
            this.setState({
                products: data.success ? data.products : null,
            });
        });
    }

    getUserData() {
        authService.user().then((userData) => {
            console.log({ userData });
            this.setState({
                user: userData.success ? userData.user : null,
                loading: false,
            });
        });
    }

    render() {
        // console.log({ appState: this.state });
        return (
            <div className="App">
                <Nav
                    user={this.state.user}
                    getUser={() => this.getUserData()}
                />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/signup"
                        element={<Auth authType={{ signup: true }} />}
                    />
                    <Route
                        path="/login"
                        element={<Auth authType={{ login: true }} />}
                    />
                    <Route
                        path="/products"
                        element={
                            <List
                                products={this.state.products}
                                getProductData={() => this.getProductData()}
                                user={this.state.user}
                            />
                        }
                    />
                    <Route path="/product/:productId" element={<Details />} />
                    <Route
                        path="/product/create"
                        element={
                            <CreateProduct
                                getProductData={() => this.getProductData()}
                            />
                        }
                    />
                </Routes>
            </div>
        );
    }
}

export default App;
