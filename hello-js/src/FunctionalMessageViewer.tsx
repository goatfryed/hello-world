import {default as React, ReactElement, useEffect, useState} from "react";
import {helloMessage, MessageProps} from "./Message";

export default ({initialMessage}: MessageProps): ReactElement => {

    const [message, setMessage] = useState(initialMessage);

    useEffect(
        () => {
            setTimeout(() => {
               fetch(
                   "http://hello.php.test/rest/message"
               ).then(value =>
                    value.json()
               ).then(
                   value => setMessage(value.message)
               )
            });
        }
    );

    return <div className="container">
        <h1 className="title">
            {message}
        </h1>
        <p className="subtitle">
            Most definitely just a simple hello.
        </p>
        <p className="subtitle">
            Proudly made with react in typescript
        </p>
    </div>;
};