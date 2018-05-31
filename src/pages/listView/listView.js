import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from "react-table";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import cookie from 'react-cookies'
import "react-table/react-table.css";

export const fakeData = [
    {date: "10/10/10", name: "test", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "ListViewles", date: "1/1/1", amount: 5, checked: false}, {name: "blueberries", date: "1/1/1", amount: 5, checked: false}, {name: "strawberries", date: "1/1/1", amount: 5, checked: false}, {name: "berries", date: "1/1/1", amount: 5, checked: false}]},
    {date: "1/2/18", name: "test1", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}]},
    {date: "12/1/2", name: "tester", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}]},
    {date: "02/12/01", name: "wow", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false} ]},
    {date: "12/12/12", name: "alpha", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}]},
    {date: "1/1/1", name: "bravo", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}]},
    {date: "03/04/59", name: "zeta", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false} ]},
    {date: "11/11/25", name: "1dfs", groceries: [{name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}, {name: "carrots", date: "1/1/1", amount: 5, checked: false}]},
];

class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: fakeData[0],
            delDialog: false,
            formDialog: false,
            grocDialog: false,
            formData: {
                name: "",
                date: "",
                itemNums: "",
                items: [],
            },
            expanded: []
        };
    }

    saveDataToCookies = () => {
      this.state.data.map((d,i) => {
        cookie.save('grocery_app_data'+i, d, {path:"/"});
      });
    };

    componentWillMount () {
        this.setState({data: fakeData});
        const rows = parseInt(cookie.load('grocery_app_rows'));
        const data = [];
        for (var i = 0; i < rows; i++) {
            data.push(cookie.load('grocery_app_data'+i));
        }

        if (data && data.length !== 0) {
            this.setState({data});
        } else {
            this.setState({data: fakeData});
        }
    }

    checkOffItems =(groceryIndex, dataIndex) => {
        const data = this.state.data;
        data[dataIndex].groceries[groceryIndex].checked = !data[dataIndex].groceries[groceryIndex].checked;
        this.setState({data});
    };

    createGroceryList = (list, listIndex, firstArr) => {
        return (
            list.map((grocery, index) => {
                const realDataIndex = firstArr ? index : Math.ceil(this.state.data[listIndex].groceries.length/2) + index;
                return (<ListItem key={index} primaryText={`${grocery.amount} ${grocery.name}`} leftCheckbox={
                    <Checkbox
                        onCheck={() => {this.checkOffItems(realDataIndex, listIndex)}}
                        checked={this.state.data[listIndex].groceries[realDataIndex].checked}
                    />
                } />)
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

    openGrocDialog = () => {
        this.setState({formDialog: false, grocDialog: true});
    };

    closeGrocDialog = () => {
        this.setState({grocDialog: false});
    };

    saveGrocDialog = () => {
        this.setState({grocDialog: false});
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

    filterGroceries = (val, arr) => {
        var bool = false;
        arr.map((a) => {
            if (a.name.indexOf(val) !== -1) bool = true;
        });
        return bool;
    };

    formDataName = (evt, val) => {
        const formData = this.state.formData;
        formData.name = val;
        this.setState({formData: formData});
    };

    formDataDate = (evt, val) => {
        const formData = this.state.formData;
        formData.date = val;
        this.setState({formData: formData});
    };

    formDataItemNums = (evt, val) => {
        const formData = this.state.formData;
        formData.itemNums = val;
        this.setState({formData: formData});
    };

    render() {
        this.saveDataToCookies();
        const delActions = [
            <RaisedButton label="YES" primary keyboardFocused={true} onClick={this.deleteRow} />,
            <RaisedButton label="NO" secondary onClick={this.closeDelDialog} />,
        ];
        const createListActions = [
            <RaisedButton label="NEXT" primary onClick={this.openGrocDialog} />,
            <RaisedButton label="CANCEL" secondary onClick={this.closeFormDialog} />,
        ];
        const grocActions = [
            <RaisedButton label="SAVE" primary onClick={this.saveGrocDialog} />,
            <RaisedButton label="CANCEL" secondary onClick={this.closeGrocDialog} />,
        ];
        return (
            <div className="ListView">
                <h1>Grocery List</h1><br /><br /><br /><br />
                <RaisedButton label="+ Add a list" style={{float: "right"}} onClick={this.openFormDialog} />
                <Dialog
                    title="Confirmation"
                    actions={delActions}
                    modal={false}
                    open={this.state.delDialog}
                    onRequestClose={this.closeDelDialog}
                >
                    {"Are you sure you want to delete"} <font size="+2"><strong>{this.state.selected.name}</strong></font> {" list?"}
                </Dialog>
                <Dialog
                    title="Create your List"
                    actions={createListActions}
                    modal={false}
                    open={this.state.formDialog}
                    onRequestClose={this.closeFormDialog}
                >
                    <TextField floatingLabelText="Date" hintText="EX: 10/10/10" value={this.state.formData.date} onChange={this.formDataDate}/><br /><br />
                    <TextField floatingLabelText="Name" value={this.state.formData.name} onChange={this.formDataName}/><br /><br />
                    <TextField floatingLabelText="Number of grocery items" value={this.state.formData.itemNums} onChange={this.formDataItemNums}/>
                </Dialog>
                <Dialog
                    title="List of Groceries"
                    actions={grocActions}
                    modal={false}
                    open={this.state.grocDialog}
                    onRequestClose={this.closeGrocDialog}
                >
                    This will have the grocery list
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
                                    width: 100,
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    Header: "Name",
                                    id: "name",
                                    accessor: "name",
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    Header: "# of items",
                                    id: "items",
                                    accessor: "groceries",
                                    width: 100,
                                    Cell: row => row.value.length,
                                    filterMethod: (filter, row) => {
                                        return (row.items.length.toString().indexOf(filter.value) !== -1 || this.filterGroceries(filter.value, row.items));
                                    }
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    Header: "",
                                    sortable: false,
                                    width: 50,
                                    filterable: false,
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
                                    {this.createGroceryList(row1, row.index, true)}
                                </List>
                                <List style={{width: "50%"}}>
                                    {this.createGroceryList(row2, row.index, false)}
                                </List>
                            </div>
                        );}
                    }
                    expanded={this.state.expanded}
                    onExpandedChange={expanded => this.setState({ expanded })}
                />
            </div>
        );
    }
}

export default ListView;
