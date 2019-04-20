import * as React from 'react';
import { Component } from 'react';

import '../scss/index.scss';
import { Sidebar } from './Sidebar';
import { Introduction } from './Introduction';

export class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>Create Mock Data Guide</h1>
                {/* <h1>Guide for Create Mock Data will be available soon.</h1> */}
                <Sidebar />
                <article className="content-pane">
                    <Introduction />
                </article>
            </div>
        );
    }
};