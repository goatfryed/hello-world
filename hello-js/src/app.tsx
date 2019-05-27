import {render} from "react-dom";
import * as React from "react";
import {initialMessage} from "./Message";
import FunctionalMessageViewer from "./FunctionalMessageViewer";
import ApolloClient, {gql} from "apollo-boost";

window.addEventListener(
    "DOMContentLoaded",
    function () {
        const client = new ApolloClient({
           uri: "http://hello.php.test/graphql/"
        });

        client.query({
            query: gql`
               query {
                  getMessageSupporter(message: 1) {
                    oneliner
                  }
               }
            `
        }).then(
            result => console.log(result.data.getMessageSupporter.oneliner)
        );

        render(
            <FunctionalMessageViewer initialMessage={initialMessage}/>,
            document.getElementById("app")
        );
    }
);