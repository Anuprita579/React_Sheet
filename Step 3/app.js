import React from "react";
import ReactDOM  from "react-dom";

//Create a nested header Element using React.createElement (h1,h2,h3 inside a div with class “title”)
const heading = React.createElement(
    "div", 
    {id: "title"}, 
    React.createElement(
        "h1", 
        {},
        "Heading 1"
    ),
    React.createElement(
        "h2", 
        {},
        "Heading 2"
    ),
    React.createElement(
        "h3", 
        {},
        "Heading 3"
    ),
)
const disp = ReactDOM.createRoot(document.getElementById("root1"));
disp.render(heading);

//Create the same element using JSX
const head2 = (
    <div>
    <h1>Heading 1 using JSX</h1> 
    <h2>Heading 2 using JSX</h2> 
    <h3>Heading 3 using JSX</h3> 
    </div>
)
const disp2 = ReactDOM.createRoot(document.getElementById("root2"));
disp2.render(head2);

//Create a functional component of the same with JSX
const Head3 = () => {
    return <div><h1>Functional Component 1 </h1> <h2>Functional Component 2</h2> <h3>Functional Component 3</h3> </div>;
};
const disp3 = ReactDOM.createRoot(document.getElementById("root3"));
disp3.render(<Head3 />);


//Composition of Component(Add a component inside another)
const Head4 = () => {
    return (
        <div>
            <Head3 />
            <h4>Component Composition </h4>  
        </div>
    );
};
const disp4 = ReactDOM.createRoot(document.getElementById("root4"));
disp4.render(<Head4 />);