import * as React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';

import '../scss/index.scss';
import { Sidebar } from './Sidebar';
import { Introduction } from './Introduction';
import { DataTypes } from './DataTypes';

export class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>Create Mock Data Guide</h1>
                {/* <h1>Guide for Create Mock Data will be available soon.</h1> */}
                <Sidebar />
                <article className="content-pane">
                    <Router>
                        <Route exact={true} path="/" component={Introduction} />
                        <Route path="/intro" component={Introduction} />
                        <Route path="/dataTypes" component={DataTypes} />
                    </Router>
                </article>
            </div>
        );
    }
};