import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from "react-router";
import Routes from "./routes";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Routes history={browserHistory} />
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
