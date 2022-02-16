import React, { Component } from "react";

export default class LifeCycleCounter extends Component {
    // the constructor is the first in line of methods that will manipulate the state
    constructor(props) {
        // like a class in OOP which inherits another class. Props is something that comes from React Components and therefore would  have to be passed in the constructor as a parameter (if using a constructor), which also means you must call super() and pass the parameters in that you are utilizing from the Components inheritance (ie: props)
        super(props);

        this.state = {
            count: 0,
        };

        console.log("1 --> CONSTRUCTOR");
    }

    increment = () => {
        this.setState((prevState) => {
            console.log({ prevState });
            return { count: prevState.count + 1 };
        });
    };

    // setState = (data) => {
    //     this.state = {...this.state, data}
    //     this.render()
    // }

    // React Lifecycle Method - componentDidMount()
    componentDidMount() {
        // this is normally used for setting data or calling initial API calls.
        // *** this method will usually only run when the component loads and will only happen once until the component is unmounted and this component is called again to mount in order to display it's data.***
        console.log("3 --> COMPONENT DID MOUNT");
    }

    // React lifecycle Method - componentDidUpdate()
    componentDidUpdate(prevProps, prevState) {
        // with this method, you can see what the previous props and state was before it was changed due to setState.
        console.log("4 --> COMPONENT DID UPDATE", {
            prevProps,
            prevState,
            props: this.props,
        });
        // if you want to know the current values of state and props, just call this.state or this.props
    }

    // React lifecycle Method - getSnapshotBeforeUpdate()
    getSnapshotBeforeUpdate(prevProps, prevState) {
        // usually runs prior to componentWillUpdate() to grab data you may need prior to having component updated.
        console.log("5 --> GET SNAPSHOT BEFORE UPDATE", {
            prevProps,
            prevState,
        });
        return "5 --> GET SNAPSHOT BEFORE UPDATE ==> the Return";
    }

    // React lifecycle Method - componentWillUnmount()
    componentWillUnmount() {
        // this is a good method in case you want to have some final method or function called prior to the component un mounting (no longer displaying)
        console.log("6 --> COMPONENT WILL UNMOUNT");
    }

    render() {
        console.log("2 --> RENDER");
        return (
            <div>
                <h2>Life Cycle Counter</h2>
                <button onClick={this.increment}> {this.state.count} </button>
                <button onClick={() => this.props.toggleProps()}>
                    Toggle Props
                </button>
            </div>
        );
    }
}
