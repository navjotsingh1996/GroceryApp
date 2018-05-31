import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

    routeTable = () => {
        this.props.router.push('/listView')
    };

    render() {
        return (
            <div className="Home">
                <h1>Grocery List</h1>
                <RaisedButton primary label="Go To Lists" onClick={this.routeTable} href="localhost:8080/listView" />
            </div>
        );
    }
}

export default Home;
