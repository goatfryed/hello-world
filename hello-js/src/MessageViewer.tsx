import {default as React, PureComponent, ReactElement} from "react";
import {helloMessage, MessageProps} from "./Message";

export default class App extends PureComponent<MessageProps, { message: string }> {

    state = {
        message: this.props.initialMessage
    };

    componentDidMount(): void {
        console.log("test");
        setTimeout(() => this.setState({message: helloMessage}), 1000);
    }

    render(): ReactElement {
        return <div className="container">
            <h1 className="title">
                {this.state.message}
            </h1>
            <p className="subtitle">
                Definitely just a simple hello.
            </p>
        </div>;
    }
}