import React, { Component } from "react";
import authService from "../../services/auth";

export default class Auth extends Component {
    state = {
        username: "",
        password: "",
        errorMessage: null,
    };

    handleChange = (e) => {
        // const { name, value } = e.target;
        this.setState({ [e.target.name]: e.target.value });
    };

    submit = (event) => {
        event.preventDefault();

        if (this.props.authType.signup) {
            authService.signup(this.state).then((data) => {
                console.log({ data });
                if (!data.success) {
                    this.setState({ errorMessage: data.message });
                }
            });
        } else {
            authService.login(this.state).then((data) => {
                console.log({ data });
                if (!data.success) {
                    this.setState({ errorMessage: data.message });
                }
            });
        }

        // with the updates to react-router-dom v6 there is no real non complicated way of doing redirects in a class component, therefor a solution for this is to get the window.location.pathname and set the endpoint to be one of the paths you have set up in your routes
        window.location.pathname = "/";
    };

    render() {
        // console.log({ props: this.props });
        return (
            <div>
                <form onSubmit={this.submit}>
                    <label>
                        Username:{" "}
                        <input
                            type="text"
                            name="username"
                            placeholder="JohnSnow"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label>
                        Password:{" "}
                        <input
                            type="password"
                            name="password"
                            placeholder="*********"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </label>

                    <input
                        type="submit"
                        value={
                            this.props.authType.signup ? "Sign Up" : "Log In"
                        }
                    />
                </form>
                {this.state.errorMessage && (
                    <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
                )}
            </div>
        );
    }
}
