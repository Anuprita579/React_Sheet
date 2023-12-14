import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
    return(
        <div className="headerbar">
            <div className="header-left">
                <h1>Company</h1>
            </div>

            <div className="search">
                <input type="text" placeholder="Search "></input>
            </div>

            <div className="header-right">
                <h1>User</h1>
            </div>

        </div>
    );
};
const headerDisplay = ReactDOM.createRoot(document.getElementById("header1"));
headerDisplay.render(<Header />);