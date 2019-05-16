import React from "react";
import {render} from "react-dom";

const App = () => <div className="container">
    <h1 className="title">
        Hello, World, from react, javascript, webpack, nginx & docker!
    </h1>
    <p className="subtitle">
        Definitely just a simple hello.
    </p>
</div>


window.addEventListener(
    "DOMContentLoaded",
    function () {
        render(
            <App/>,
            document.getElementById("app")
        )
    }
);