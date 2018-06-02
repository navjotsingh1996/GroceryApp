import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Home extends Component {

    routeTable = (create) => {
        create ? this.props.router.push('/listView?true') : this.props.router.push('/listView');
    };

    render() {
        return (
            <div className="Home">
                <h1>Grocery List</h1>
                <RaisedButton primary label="Go To Lists" onClick={() => this.routeTable(false)} />
                <RaisedButton primary label="Create a List" onClick={() => this.routeTable(true)} />
            </div>
        );
    }
}

export default Home;
