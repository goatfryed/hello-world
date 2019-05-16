import {render} from "react-dom";
import * as React from "react";
import {initialMessage} from "./Message";
import FunctionalMessageViewer from "./FunctionalMessageViewer";

window.addEventListener(
    "DOMContentLoaded",
    function () {
        render(
            <FunctionalMessageViewer initialMessage={initialMessage}/>,
            document.getElementById("app")
        );
    }
);