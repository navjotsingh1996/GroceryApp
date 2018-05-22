import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from "react-table";import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import Dialog from 'material-ui/Dialog';
import "react-table/react-table.css";
import './App.css';

export const fakeData = [
    {date: "10/10/10", name: "test", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "apples", date: "1/1/1", amount: 5}, {name: "blueberries", date: "1/1/1", amount: 5}, {name: "strawberries", date: "1/1/1", amount: 5}, {name: "berries", date: "1/1/1", amount: 5}]},
  {date: "1/2/18", name: "test1", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}]},
  {date: "12/1/2", name: "tester", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}]},
  {date: "02/12/01", name: "wow", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5} ]},
  {date: "12/12/12", name: "alpha", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}]},
  {date: "1/1/1", name: "bravo", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}]},
  {date: "03/04/59", name: "zeta", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5} ]},
  {date: "11/11/25", name: "1dfs", groceries: [{name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}, {name: "carrots", date: "1/1/1", amount: 5}]},
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: fakeData[0],
            delDialog: false,
            formDialog: false,
        };
    }

    componentWillMount () {
        this.setState({data: fakeData});
    }

  createGroceryList = (list) => {
    return (
        list.map((grocery, index) => {
          return (<ListItem key={index} primaryText={`${grocery.amount} ${grocery.name}`} leftCheckbox={<Checkbox />} />)
        })
    );
  };

  delCell (row) {
      return (
          <FloatingActionButton backgroundColor="red" mini>
              <ActionDelete onClick={() => this.openDelDialog(row)} />
          </FloatingActionButton>
      )
  }

  openDelDialog (row) {
      this.setState({selected: row.original, delDialog: true});
  };

    closeDelDialog = () => {
            this.setState({delDialog: false});
    };

    openFormDialog = () => {
        this.setState({formDialog: true});
    };

    closeFormDialog = () => {
        this.setState({formDialog: false});
    };

  deleteRow = () => {
      const row = this.state.selected;
      var index = 0;
      this.state.data.map((r,i) => {
          if (r.name === row.name) {
              index = i;
              return i;
          }
      });
      const newData = this.state.data;
      newData.splice(index,1);
      this.setState({data: newData, delDialog: false});
  };

  render() {
      const delActions = [
          <RaisedButton label="NO" primary onClick={this.closeDelDialog} />,
          <RaisedButton label="YES" primary keyboardFocused={true} onClick={this.deleteRow} />,
      ];
      const formAction = [];
    return (
      <div className="App">
        <h1>Grocery List</h1>
        <RaisedButton primary label="Go To Lists" /><br /><br /><br /><br />
        <RaisedButton label="+ Add a list" style={{float: "right"}} onClick={this.openFormDialog} />
          <Dialog
              title="Dialog With Actions"
              actions={delActions}
              modal={false}
              open={this.state.delDialog}
              onRequestClose={this.closeDelDialog}
          >
              {"Are you sure you want to delete"} <font size="+2"><strong>{this.state.selected.name}</strong></font> {" list?"}
          </Dialog>
          <Dialog
              title="Dialog With Actions"
              actions={formAction}
              modal={false}
              open={this.state.formDialog}
              onRequestClose={this.closeFormDialog}
          >
              {"FORM"}
          </Dialog>
        <br /><br /><br />
        <ReactTable
            style={{marginLeft: 100, marginRight: 100}}
            data={this.state.data}
            filterable
            columns={[
              {
                columns: [
                  {
                    Header: "Date",
                    id: "date",
                    accessor: "date",
                  }
                ]
              },
              {
                columns: [
                  {
                    Header: "Name",
                    id: "name",
                    accessor: "name"
                  }
                ]
              },
              {
                columns: [
                  {
                    Header: "# of items",
                    id: "items",
                    accessor: "groceries",
                    Cell: row => row.value.length
                  }
                ]
              },
              {
                columns: [
                  {
                    Header: "",
                    sortable: false,
                    Cell: row => this.delCell(row)
                  }
                ]
              }
            ]}
            className="-striped -highlight"
            showPagination={false}
            SubComponent = {row => {
              var row1 = [];
              var row2 = [];
              row.original.groceries.map((grocery, i) => {
                if (i < row.original.groceries.length/2) {
                  row1.push(grocery);
                } else {
                  row2.push(grocery);
                }
              });
              return (
                  <div style={{display: "inline-flex"}}>
                    <List style={{width: "50%"}}>
                      <Subheader>List of Groceries</Subheader>
                      {this.createGroceryList(row1)}
                    </List>
                    <List style={{width: "50%"}}>
                      {this.createGroceryList(row2)}
                    </List>
                  </div>
              );}
          }
        />
      </div>
    );
  }
}

export default App;
