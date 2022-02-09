import React from "react";

export default function Movie(props) {
    console.log({ props });
    // always log your props in order to confirm what you are receiving from the parent component or the component that calls on the functional component.

    return (
        <div>
            <h1>
                {props.movie.title} -{" "}
                {props.movie.genre === "Adventure"
                    ? "This is an awesome adventure"
                    : props.movie.genre === "Horror"
                    ? "This is a horror"
                    : props.movie.genre}
            </h1>
            <p>{props.movie.director}</p>

            {/* when you setState, you also reload the component of the state you are setting, setting state allows you to update the state data */}
            <button
                onClick={() => {
                    {
                        /* // this.setState({
                    //     [props.movie.title]: !this.state[props.movie.title],
                    // }); */
                    }
                    props.updateState({
                        [props.movie.title]: !props.theState[props.movie.title],
                    });
                }}
            >
                {" "}
                Show Awards{" "}
            </button>
            {/* this onClick method will set data to the state, even if it was not originally part of the state */}

            {/* conditional rendering using only if condition, you would use the && method which is the same as saying if something display (or do) date/code */}
            {props.theState[props.movie.title] && <p>{props.movie.awards}</p>}

            <button
                onClick={() => {
                    {
                        /* // const movieCopyArr = [...this.state.movies]; */
                    }
                    const movieCopyArr = [...props.theState.movies];

                    movieCopyArr.forEach((value, i) => {
                        if (value.title === props.movie.title) {
                            movieCopyArr.splice(i, 1);
                        }
                    });

                    {
                        /* // this.setState({ movies: movieCopyArr }); */
                    }
                    props.updateState({ movies: movieCopyArr });
                }}
            >
                {" "}
                Delete Movie{" "}
            </button>
        </div>
    );
}
