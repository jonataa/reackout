import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: 'https://xvkvz423v4.sse.codesandbox.io/'
});

const Root = ({children}) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default Root;