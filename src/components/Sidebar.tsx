import * as React from 'react';
import { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import menuItems from '../configs/menu-items';

export interface ISidebarP {
    location: Location;
};

export default class Sidebar extends Component<ISidebarP> {

    constructor(props: ISidebarP) {

        super(props);

        this.renderMenu = this.renderMenu.bind(this);
    }

    private renderMenu(items: any[] = menuItems) {
        const { pathname } = this.props.location;
        return (<ul>
            {items.map((item, i) => {
                return (<li key={i}>
                    <Link
                        to={item.id}
                        className={pathname.indexOf(item.id) !== -1 ||
                            (pathname === '/' && item.id === 'intro') ? 'active' : undefined}>
                        {item.label}
                    </Link>
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