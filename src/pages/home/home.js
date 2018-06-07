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
                <RaisedButton style={{marginRight: 150}} primary label="Go To Lists" onClick={() => this.routeTable(false)} />
                <RaisedButton style={{marginLeft: 150}} primary label="Create a List" onClick={() => this.routeTable(true)} />
            </div>
        );
    }
}

export default Home;
