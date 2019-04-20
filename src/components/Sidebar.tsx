import * as React from 'react';
import { Component } from 'react';

import menuItems from '../configs/menuItems';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    private renderMenu(items: any[] = menuItems) {
        return (<ul>
            {items.map((item, i) => {
                return (<li key={i}>
                    <a href="#" id={item.id}>{item.label}</a>
                    {item.children && this.renderMenu(item.children)}
                </li>);
            })}
        </ul>);
    }

    render() {
        return (
            <aside className="side-bar">
                {this.renderMenu()}
            </aside>
        );
    }
};