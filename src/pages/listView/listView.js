import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ReactTable from "react-table";
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import cookie from 'react-cookies'
import "react-table/react-table.css";
/*
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
*/
class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: -1,
            delDialog: false,
            formDialog: false,
            grocDialog: false,
            editing: -1,
            formData: {
                name: "",
                nameErr: "",
                date: this.getCurrentDate(),
                dateErr: "",
                itemNums: 0,
                itemErr: "",
                items: [],
            },
            expanded: []
        };
    }

    saveDataToCookies = () => {
      this.state.data.map((d,i) => {
        cookie.save('grocery_app_data'+i, d, {path:"/"});
      });
        cookie.save('grocery_app_rows', this.state.data.length, {path: "/"});
    };

    readjustDataToCookies = (deleteIndex) => {
        cookie.remove('grocery_app_data'+deleteIndex, {path: "/"});
        this.state.data.map((d,i) => {
            cookie.save('grocery_app_data'+i, d, {path:"/"});
        });
        cookie.save('grocery_app_rows', this.state.data.length, {path: "/"});
    };

    componentWillMount () {
        if (this.props.location.search.includes("t")) {
            this.setState({formDialog: true});
        }
        const rows = parseInt(cookie.load('grocery_app_rows'));
        const data = [];
        for (var i = 0; i < rows; i++) {
            if (i === 0) this.setState({selected: cookie.load('grocery_app_data0')});
            data.push(cookie.load('grocery_app_data'+i));
        }
        this.setState({data});
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
                return (<ListItem key={index} primaryText={`${grocery.date} ${grocery.amount} ${grocery.name}`} leftCheckbox={
                    <Checkbox
                        onCheck={() => {this.checkOffItems(realDataIndex, listIndex)}}
                        checked={this.state.data[listIndex].groceries[realDataIndex].checked}
                    />
                } />)
            })
        );
    };

    getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const date = today.getDate().toString().length == 2 ? today.getDate() : '0'+today.getDate();
        const month = today.getMonth().toString().length == 2 ? today.getMonth()+1 : '0'+(today.getMonth()+1);
        return month+'/'+date+'/'+year;
    };

    delCell (row) {
        return (
            <FloatingActionButton backgroundColor="red" mini>
                <ActionDelete onClick={() => this.openDelDialog(row)} />
            </FloatingActionButton>
        )
    }

    openDelDialog (row) {
        this.setState({selected: row.index, delDialog: true});
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

    checkForEmptyNames = () => {
        const formData = this.state.formData;
        var indexes = [];
        var diff = 0;
        this.state.formData.items.map((item, i) => {
            if (item.name === "" || item.name === " ") {
                indexes.push(i-diff);
                diff++;
            }
        });
        indexes.map((index) => {
            formData.items.splice(index,1);
        });
        this.setState({formData});
    };

    clearFormData = () => {
        const formData = {
            name: "",
            nameErr: "",
            date: this.getCurrentDate(),
            dateErr: "",
            itemNums: 0,
            itemErr: "",
            items: [],
        };
        this.setState({formData});
    };

    saveGrocDialog = () => {
        this.checkForEmptyNames();
        const newRow = {
            name: this.state.formData.name,
            date: this.state.formData.date,
            groceries: this.state.formData.items
        };
        const data = this.state.data;
        if (this.state.editing !== -1) {
            data[this.state.editing] = newRow;
        } else {

            data.push(newRow);
        }
        this.setState({grocDialog: false, data, editing: -1});
        this.saveDataToCookies();
        this.clearFormData();
    };

    deleteRow = () => {
        const newData = this.state.data;
        newData.splice(this.state.selected,1);
        this.readjustDataToCookies(this.state.selected);
        this.setState({data: newData, delDialog: false, selected: -1});
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
        if (isNaN(val) && val !== "") {
            formData.itemErr = "You can only insert numbers in this field";
        } else {
            if (val === "") {
                formData.itemNums = 0;
            } else {
                formData.itemNums = parseInt(val);
            }
            formData.itemErr = "";
            const items = [];
            for (var i = 0; i < parseInt(val); i++) {
                items.push({name: "", amount: "", date: "", checked: false});
            }
            formData.items = items;
        }
        this.setState({formData});
    };

    addItem = () => {
        const formData = this.state.formData;
        formData.items.push({name: "", amount: "", date: "", checked: false});
        this.setState({formData});
    };

    groceryNameChange(val, i){
        const formData = this.state.formData;
        formData.items[i].name = val;
        this.setState({formData});
    }

    groceryQuantityChange(val, i){
        const formData = this.state.formData;
        formData.items[i].amount = val;
        this.setState({formData});
    }

    groceryDateChange(val, i){
        const formData = this.state.formData;
        formData.items[i].date = val;
        this.setState({formData});
    }

    deleteGrocery(index) {
        const formData = this.state.formData;
        formData.items.splice(index,1);
        this.setState({formData});
    }

    editGroceryList(row) {
        const realRow = row.original;
        console.log(row);
        const groceries = realRow.groceries;
        const formData = {
            name: realRow.name,
            nameErr: "",
            date: realRow.date,
            dateErr: "",
            itemNums: groceries.length,
            itemErr: "",
            items: groceries
        };
        this.setState({formData, grocDialog: true, editing: row.index});
    };

    render() {
        this.saveDataToCookies();
        const delActions = [
            <RaisedButton label="YES" primary keyboardFocused={true} onClick={this.deleteRow} />,
            <RaisedButton label="CANCEL" secondary onClick={this.closeDelDialog} />,
        ];
        const createListActions = [
            <RaisedButton label="NEXT" primary onClick={this.openGrocDialog} disabled={
                !!(this.state.formData.dateErr || this.state.formData.nameErr || this.state.formData.itemErr && !this.state.formData.date || !this.state.formData.name)
            } />,
            <RaisedButton label="CANCEL" secondary onClick={this.closeFormDialog} />,
        ];
        const grocActions = [
            <RaisedButton label="SAVE LIST" primary onClick={this.saveGrocDialog} />,
            <RaisedButton label="CANCEL" secondary onClick={this.closeGrocDialog} />,
        ];
        return (
            <div className="ListView">
                <h1>Grocery List</h1><br /><br /><br /><br />
                <RaisedButton label="+ Add a list" primary style={{float: "right", marginRight: 100}} onClick={this.openFormDialog} />
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
                    <TextField floatingLabelText="Date" hintText="EX: 10/10/10" errorText={this.state.formData.dateErr} value={this.state.formData.date} onChange={this.formDataDate}/><br /><br />
                    <TextField floatingLabelText="Name" value={this.state.formData.name} errorText={this.state.formData.nameErr} onChange={this.formDataName}/><br /><br />
                    <TextField floatingLabelText="Number of grocery items" value={this.state.formData.itemNums} errorText={this.state.formData.itemErr} onChange={this.formDataItemNums}/>
                </Dialog>
                <Dialog
                    title="List of Groceries"
                    actions={grocActions}
                    modal={false}
                    open={this.state.grocDialog}
                    onRequestClose={this.closeGrocDialog}
                    autoScrollBodyContent
                    contentStyle={{maxWidth: "none", width: "80%"}}
                >
                    {this.state.formData.items.map((d,i) => {
                        return (<div key={i}>
                                    <div style={{display: 'inline-flex'}}>
                                        {i+1 < 10 ? (<h2 style={{paddingTop: '15px', marginRight: '50px'}}>{i+1}</h2>) :  (<h2 style={{paddingTop: '15px', marginRight: '35px'}}>{i+1}</h2>)}<br />
                                    <TextField style={{marginRight: "50px"}} floatingLabelText="Name" value={d.name} onChange={(evt, val) => this.groceryNameChange(val,i)} /><br />
                                    <TextField style={{marginRight: "100px"}} floatingLabelText="Quantity" value={d.amount} onChange={(evt, val) => this.groceryQuantityChange(val,i)} /><br />
                                    <TextField style={{marginRight: "200px"}} floatingLabelText="Expiration Date" value={d.date} onChange={(evt, val) => this.groceryDateChange(val,i)} /><br />
                                            <RaisedButton style={{height: 35, marginTop: 25}} labelColor="#ffffff" backgroundColor="red" label="DELETE" onClick={() => this.deleteGrocery(i)} />
                                    </div>
                                </div>)
                    })}
                    <FloatingActionButton >
                        <ContentAdd onClick={this.addItem}/>
                    </FloatingActionButton>
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
                                    Cell: row => row.value ? row.value.length : 0,
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
                        if (!row.original.groceries) return (<div>You have no groceries in this list</div>);
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
                                    <h1>List of Groceries</h1>
                                    {this.createGroceryList(row1, row.index, true)}
                                </List>
                                <List style={{width: "50%", paddingTop: "87px"}}>
                                    <FloatingActionButton style={{float: "right", marginTop: -70}}>
                                        <ImageEdit onClick={() => this.editGroceryList(row)}/>
                                    </FloatingActionButton>
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
