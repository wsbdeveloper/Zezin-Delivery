import React, { Component } from 'react'

import GlobalStyles from './../css/GlobalStyles';

import Routers from './../routers/Routers';

export default class App extends Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <Routers />
            </>
        )
    }
}
