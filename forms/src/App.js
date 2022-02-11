import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import IdeaForm from "./components/ideas/IdeaForm";

// example schema
/* 
  ProjectSchema = {
    idea: String,
    difficulty: Number,
    currentlyInDevelopment: Boolean,
    styleIdeaUrl: String
  }
*/

const data = [
    {
        idea: "todo list",
        difficulty: 3,
        currentlyInDevelopment: false,
        styleIdeaUrl: "www.google.com",
    },
];

class App extends Component {
    state = {
        projects: data,
        filteredProjects: [...data],
        showForm: false,
    };

    displayProjects = () => {
        return this.state.filteredProjects.map((project, i) => {
            return (
                <div key={i}>
                    <h2>{project.idea}</h2>
                    <h3>
                        Difficulty: <span>{project.difficulty}</span> &nbsp; In
                        Development:{" "}
                        {project.currentlyInDevelopment ? "yes" : "no"}
                    </h3>
                    <a href={project.styleIdeaUrl}>Style Idea Link</a>
                </div>
            );
        });
    };

    addToProjectList = (projectDetails) => {
        const projectsCopy = [...this.state.filteredProjects];

        projectsCopy.push(projectDetails);

        // this.setState({ filteredProjects: projectsCopy, showForm: false });
        this.setState({
            filteredProjects: [...this.state.filteredProjects, projectDetails],
            showForm: false,
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Forms Example</h1>
                <button
                    onClick={() => {
                        this.setState({ showForm: !this.state.showForm });
                    }}
                >
                    Toggle Form
                </button>
                {this.state.showForm && (
                    <IdeaForm addProjectToList={this.addToProjectList} />
                )}
                <div>
                    {this.state.filteredProjects.length > 0 &&
                        this.displayProjects()}
                </div>
            </div>
        );
    }
}

export default App;
