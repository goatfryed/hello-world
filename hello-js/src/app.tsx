import {render} from "react-dom";
import * as React from "react";

const App = () => <div className="container">
    <h1 className="title">
        Hello, World, from react, typescript, javascript, webpack, nginx & docker!
    </h1>
    <p className="subtitle">
        Definitely just a simple hello.
    </p>
</div>;

window.addEventListener(
    "DOMContentLoaded",
    function () {
        render(
            <App />,
            document.getElementById("app")
        );
    }
);