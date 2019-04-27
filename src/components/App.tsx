import * as React from 'react';
import { Component, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Prism from 'prismjs';

import '../scss/index.scss';
import Sidebar from './Sidebar';
import Loading from './Loading';
import Page404 from './Page404';
import Introduction from './Introduction';
// const DTIntroduction = lazy(() => import('./Introduction').then(({ Introduction }) => ({ default: Introduction })));
// const Introduction = lazy(() => import('./Introduction'));
const DataType = lazy(() => import('./DataTypes'));
// const DataTypes: any = lazy<any>(() => import('./DataTypes')
//     .then((comps: any) => {
//         console.log('comps', comps);

//         return {
//             default: comps.DataTypes
//         };
//     })
//     .catch(err => {
//         console.log('err', err);
//         return {
//             default: (<p>Error</p>)
//         };
//     }));
// console.log(DataTypes);
export default class App extends Component {

    onRouteChange() {
        Prism.highlightAll();
    }

    render() {
        return (
            <div className='app'>
                <h1>Create Mock Data Guide</h1>
                {/* <h1>Guide for Create Mock Data will be available soon.</h1> */}
                <Sidebar />
                <article className='content-pane'>
                    <Router>
                        <Suspense fallback={<Loading />}>
                            <Switch>
                                {/* <Route exact={true} path='/' render={() => <Introduction onMount={this.onRouteChange} />} /> */}
                                <Route exact={true} path={['/', '/intro']} component={Introduction} />
                                {<Route
                                    path={[
                                        '/dataTypes', '/aadhaar', '/alphanumeric', '/autoIncrement',
                                        '/boolean', '/ccPin', '/city', '/color',
                                        '/company', '/country', '/creditCard', '/currency',
                                        '/cvv', '/dateTime', '/duration', '/email',
                                        '/gender', '/latLong', '/pan', '/password',
                                        '/personName', '/phoneNo', '/pincode', '/randomNumber',
                                        '/randomWords', '/state', '/streetAddress', '/uid',
                                        '/username'
                                    ]}
                                    render={(props) => <DataType
                                        {...props}
                                        onMount={this.onRouteChange} />}
                                />}
                                {/* <Route path='/aadhaar' component={() => <DataTypes[1] onMount={this.onRouteChange} />} /> */}
                                {/* <Route path='/uid' component={() => <DTUniqueId onMount={this.onRouteChange} />} /> */}
                                {/* <Route path='/jsonObject' component={() => <DTJsonObject onMount={this.onRouteChange} />} /> */}
                                {/* <Route path='/array' component={() => <DTArray onMount={this.onRouteChange} />} /> */}
                                <Route component={Page404} />
                            </Switch>
                        </Suspense>
                    </Router>
                </article>
            </div>
        );
    }
};