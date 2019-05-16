import {render} from "react-dom";
import * as React from "react";
import {createStore} from "redux";
import {Provider, connect} from "react-redux";

const defaultMessage = "Hello, World, from react, redux, typescript, javascript, webpack, nginx & docker!";
const appReducer = (state = defaultMessage, action: any): string => state;

const Message = ({message}: {message: string}) => <div className="container">
    <h1 className="title">
        {message}
    </h1>
    <p className="subtitle">
        Definitely just a simple hello.
    </p>
</div>;

const App = connect(
    (state: string) => ({message: state})
)(Message);

window.addEventListener(
    "DOMContentLoaded",
    function () {
        const store = createStore(
            appReducer
        );

        render(
            <Provider store={store}>
                <App  />
            </Provider>,
            document.getElementById("app")
        );
    }
);