import "./App.css";
import { Route, Routes } from "react-router-dom";
import contacts from "./contacts.json";
import Home from "./components/Home";
import List from "./components/List";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <h1>Router Intro</h1>

            {/* due to version update of react-router-dom, Switch no longer available use Routes. component parameter changed to element. Component being called changed from component name to component declaration */}
            {/* <Route path='/' exact component={Home} />  changed to <Route path='/' element={<Home >} /> */}
            {/* Remember to wrap your <Route /> declarations in the <Routes></Routes> tag */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* notice below they method that used to be required using react-router-dom in order to pass props to a component which you are routing to. This hasa since been updated as well and no longer required to pass props to a component. Instead use the above method for creating a route and pass the props as you would normally to a component */}
                {/* <Route
                    path="/list"
                    render={() => <List contacts={contacts} />}
                /> */}
                <Route path="/list" element={<List contacts={contacts} />} />
                <Route path="/about" element={<About />} />
                {/* in the about we will check to see if general props are auto passed or not. From the test we notice that props are received but has no data */}
                <Route
                    path="/about/:contactId"
                    element={<Contact contacts={contacts} />}
                />
            </Routes>
        </div>
    );
}

export default App;
