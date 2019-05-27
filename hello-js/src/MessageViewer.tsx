import {default as React, ReactElement, useEffect, useState} from "react";
import {helloMessage, MessageProps} from "./Message";
import Query from "react-apollo/Query";
import {gql} from "apollo-boost";

type Message = {
    id: number,
    message: string,
}

const supporterQuery = gql`
   query Supporter($id: ID!) {
      getMessageSupporter(message: $id) {
        oneliner
      }
   }
`;

const Message = ({message}: {message: Message}): ReactElement => {

    return <Query<{getMessageSupporter: {oneliner: string}},{id: number}>
        query={supporterQuery}
        variables={{id: message.id}}
    >
        {({ loading, error, data}) => {
            if (loading || data == undefined) return message.message;
            if (error) return "Ooops :-(";
            return message.message + " from " + data.getMessageSupporter.oneliner;
        }}
    </Query>
};

export default ({initialMessage}: MessageProps): ReactElement => {

    const [message, setMessage]: [any, React.Dispatch<React.SetStateAction<any>>] = useState(null);

    useEffect(
        () => {
            setTimeout(() => {
               fetch(
                   "http://hello.php.test/rest/message"
               ).then(value =>
                    value.json()
               ).then(
                   value => setMessage(value)
               )
            });
        },
        []
    );

    return <div className="container">
        <h1 className="title">
            {message == null ? initialMessage : <Message message={message} />}
        </h1>
        <p className="subtitle">
            Most definitely just a simple hello.
        </p>
        <p className="subtitle">
            Proudly made with react in typescript
        </p>
    </div>;
};