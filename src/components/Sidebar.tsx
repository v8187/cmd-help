import * as React from 'react';
import { Component } from 'react';
import {HashRouter as Router, Link } from 'react-router-dom';
import menuItems from '../configs/menuItems';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    private renderMenu(items: any[] = menuItems) {
        return (<ul>
            {items.map((item, i) => {
                return (<li key={i}>
                    <Link to={item.id} id={item.id}>{item.label}</Link>
                    {item.children && this.renderMenu(item.children)}
                </li>);
            })}
        </ul>);
    }

    render() {
        return (
            <aside className="side-bar">
                <Router>
                    {this.renderMenu()}
                </Router>
            </aside>
        );
    }
};