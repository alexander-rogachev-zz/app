import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject("store") @observer
export default class JobsPage extends Component {

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    render() {
        const store = this.store;
        return (
            <div>
                asdjhakslhdjkalshdjklas
            </div>
        )
    }

}