import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import LifeCycleCounter from "./components/LifeCycleCounter";

class App extends Component {
    state = {
        counterComponentIsActive: false,
        propsMessage: "Blah",
    };

    toggleCounter = () => {
        this.setState((prevState) => ({
            counterComponentIsActive: !prevState.counterComponentIsActive,
        }));
    };

    togglePropsMessage = () => {
        const randomWords = [
            "Cat",
            "Car",
            "Ticket",
            "The Rock",
            "Malibu",
            "Wolf",
        ];
        this.setState({
            propsMessage:
                randomWords[Math.floor(Math.random() * randomWords.length)],
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hello Life Cycles</h1>

                <button onClick={this.toggleCounter}>
                    {" "}
                    {this.state.counterComponentIsActive
                        ? "Unmount"
                        : "Mount"}{" "}
                </button>

                {this.state.counterComponentIsActive && (
                    <LifeCycleCounter
                        randomness={
                            this.state.counterComponentIsActive
                                ? this.state.propsMessage
                                : "UnBlah"
                        }
                        toggleProps={this.togglePropsMessage}
                    />
                )}
            </div>
        );
    }
}

export default App;
