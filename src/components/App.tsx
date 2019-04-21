import * as React from 'react';
import { Component, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import '../scss/index.scss';
import Sidebar from './Sidebar';
import Loading from './Loading';
// const Introduction = lazy(() => import('./Introduction').then(({ Introduction }) => ({ default: Introduction })));
const Introduction = lazy(() => import('./Introduction'));
const DataTypes = lazy(() => import('./DataTypes'));

export default class App extends Component {

    render() {
        return (
            <div className="app">
                <h1>Create Mock Data Guide</h1>
                {/* <h1>Guide for Create Mock Data will be available soon.</h1> */}
                <Sidebar />
                <article className="content-pane">
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                <Route exact={true} path="/" component={Introduction} />
                                <Route path="/intro" component={Introduction} />
                                <Route path="/dataTypes" component={DataTypes} />
                            </Switch>
                        </Suspense>
                    </Router>
                </article>
            </div>
        );
    }
};