import {render} from "react-dom";
import * as React from "react";
import {initialMessage} from "./Message";
import MessageViewer from "./MessageViewer";
import ApolloClient, {gql} from "apollo-boost";
import ApolloProvider from "react-apollo/ApolloProvider";

window.addEventListener(
    "DOMContentLoaded",
    function () {
        const client = new ApolloClient({
           uri: "http://hello.php.test/graphql/"
        });

        client.initQueryManager();

        render(
            <ApolloProvider client={client}>
                <MessageViewer initialMessage={initialMessage}/>
            </ApolloProvider>,
            document.getElementById("app")
        );
    }
);