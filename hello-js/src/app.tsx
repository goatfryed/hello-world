import {render} from "react-dom";
import * as React from "react";
import MessageViewer from "./MessageViewer";
import {initialMessage} from "./Message";

window.addEventListener(
    "DOMContentLoaded",
    function () {
        render(
            <MessageViewer initialMessage={initialMessage}/>,
            document.getElementById("app")
        );
    }
);