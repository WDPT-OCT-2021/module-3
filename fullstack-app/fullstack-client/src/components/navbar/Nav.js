import React from "react";
import { Link } from "react-router-dom";
import authService from "../../services/auth";

export default function Nav(props) {
    // console.log({ propsInNav: props });

    const logout = () => {
        console.log("logging out");
        authService.logout().then((data) => {
            // console.log({ data });
            props.getUser();
        });
    };

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>

            {!props.user ? (
                <div className="spacer">
                    <Link to="/Signup">Signup</Link>
                    <Link to="/login">Login</Link>
                </div>
            ) : (
                <div className="spacer">
                    <h5>welcome: {props.user.username}</h5>
                    <button onClick={() => logout()}>Logout</button>
                </div>
            )}
        </nav>
    );
}
