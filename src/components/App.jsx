import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.store = this.props.store
    }

    render() {
        return (
            <div className='root'>
                <Header />
                <div className='container'>
                    <div className='content-wrapper'>
                        <div className='content'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}