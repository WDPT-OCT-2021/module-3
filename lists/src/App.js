import React, { Component } from "react";
import Movie from "./components/Movie";
import "./App.css";

const data = [
    {
        title: "Lord of the Rings",
        director: "Peter Jackson",
        genre: "Adventure",
        awards: "Oscar",
        id: 982734,
    },
    {
        title: "Star Wars",
        director: "George Lucas",
        genre: "Sci-Fi",
        awards: "Golden Globe",
        id: 872343,
    },
    {
        title: "ET",
        director: "Stephen Spielberg",
        genre: "Sci-Fi",
        awards: "Oscar, Golden Globe",
        id: 9862384,
    },
];

// functional components are used to display data and usually does not have some sort of data getting manipulated. Or it has props which handle the data manipulation.

// class components have a state which act like a constructor which is where you put the variables (key: value pairs) that will be used in your component
class App extends Component {
    state = {
        movies: data,
    };

    updateState = (stateToUpdate) => {
        console.log({ stateToUpdate });
        this.setState(stateToUpdate);
    };

    getMovies = (movies) => {
        return movies.map((movie, i) => {
            return (
                <div key={movie.id}>
                    {/* //     <h1> */}
                    {/* //         {movie.title} -{" "} */}
                    {/* //         {movie.genre === "Adventure" */}
                    {/* //             ? "This is an awesome adventure" */}
                    {/* //             : movie.genre === "Horror" */}
                    {/* //             ? "This is a horror" */}
                    {/* //             : movie.genre} */}
                    {/* //     </h1> */}
                    {/* //     <p>{movie.director}</p> */}
                    {/* //{" "} */}
                    {/* when you setState, you also reload the component of the state you are setting, setting state allows you to update the state data */}
                    {/* //     <button */}
                    {/* //         onClick={() => {
                //             this.setState({
                //                 [movie.title]: !this.state[movie.title],
                //             });
                //         }}
                //     >
                //         {" "}
                //         Show Awards{" "}
                //     </button> */}
                    {/* //{" "} */}
                    {/* this onClick method will set data to the state, even if it was not originally part of the state */}
                    {/* //{" "} */}
                    {/* conditional rendering using only if condition, you would use the && method which is the same as saying if something display (or do) date/code */}
                    {/* //     {this.state[movie.title] && <p>{movie.awards}</p>}

                //     <button
                //         onClick={() => {
                //             const movieCopyArr = [...this.state.movies];

                //             movieCopyArr.forEach((value, i) => {
                //                 if (value.title === movie.title) {
                //                     movieCopyArr.splice(i, 1);
                //                 }
                //             });

                //             this.setState({ movies: movieCopyArr });
                //         }}
                //     >
                //         {" "}
                //         Delete Movie{" "}
                //     </button> */}
                    <Movie
                        movie={movie}
                        updateState={this.updateState}
                        theState={this.state}
                    />
                    {/* we must pass the information needed to the Movie component in order to allow for the full functionality that was copied over. movie for the movie data, updateState() to update the state for the button clicks, and theState for the data we need from the state for the conditional rendering */}
                </div>
            );
        });
    };

    // in order to display your html from a class component, you have to call the render method and return the html.
    render() {
        return <div className="App">{this.getMovies(this.state.movies)}</div>;
    }
}

export default App;
