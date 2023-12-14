import React from "react";
import ReactDOM  from "react-dom";
const head = React.createElement("h1", {}, "Hello World using React");
const disp = ReactDOM.createRoot(document.getElementById("root1"));
disp.render(head);