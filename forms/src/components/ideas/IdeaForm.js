import React, { Component } from "react";

export default class IdeaForm extends Component {
    state = {
        idea: "",
        difficulty: 1,
        currentlyInDevelopment: false,
        styleIdeaUrl: "",
    };

    onChange = (event) => {
        let { name, value, checked } = event.target;

        if (name === "currentlyInDevelopment") {
            value = checked;
        }

        // yourObject.key
        // yourObject['key']
        this.setState(
            {
                [name]: value,
            },
            () => console.log("state in the onChange function: ", this.state)
        );
    };

    submitForm = (event) => {
        // when using a form, you would add an onSubmit handler in the form parameters and call this function. *** in order to not reload the page when the form submits, you would want to use event.preventDefault() ***
        event.preventDefault();

        console.log("the current state: ", this.state);

        // this is what lifting state would look like, when you pass the data from the state of a child component to a parent through a function call passed in through props.
        this.props.addProjectToList(this.state);

        this.setState({
            idea: "",
            difficulty: 1,
            currentlyInDevelopment: false,
            styleIdeaUrl: "",
        });
    };

    render() {
        return (
            <div>
                <h3>
                    Idea:{" "}
                    <input
                        type="text"
                        // assure that the name that you use for your input is the same as the name you have set for it in the state so that when you call the onChange function, the name in the state is getting updated with the value from the input.
                        // *** once you have your api connected to update the database, you would want the name to match what you have in your schema for the form values that you will update or create ***
                        name="idea"
                        value={this.state.idea}
                        onChange={this.onChange}
                    />
                </h3>
                <h3>
                    Difficulty:{" "}
                    <input
                        type="number"
                        max="10"
                        min="1"
                        name="difficulty"
                        value={this.state.difficulty}
                        onChange={this.onChange}
                    />
                </h3>
                <h3>
                    Currently In Development:{" "}
                    <input
                        type="checkbox"
                        name="currentlyInDevelopment"
                        checked={this.state.currentlyInDevelopment}
                        onChange={this.onChange}
                    />
                </h3>
                <h3>
                    Style Idea URL:{" "}
                    <input
                        type="text"
                        name="styleIdeaUrl"
                        value={this.state.styleIdeaUrl}
                        onChange={this.onChange}
                    />
                </h3>

                <button onClick={this.submitForm}>Submit</button>
            </div>
        );
    }
}
