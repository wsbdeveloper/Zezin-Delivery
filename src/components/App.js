import React, { Component } from 'react'

import GlobalStyles from './../css/GlobalStyles';

import Routers from './../routers/Routers';

import  { ApolloClient, InMemoryCache} from '@apollo/client';

import { ApolloProvider } from '@apollo/client';

const client =  new ApolloClient( { uri : "https://api.code-challenge.ze.delivery/public/graphql/",cache: new InMemoryCache()});

console.log(process.env);
export default class App extends Component {

    render() {
        return (
            <>
                <ApolloProvider client={client}>
                    <Routers />
                    <GlobalStyles />
                </ApolloProvider>
            </>
        )
    }
}
