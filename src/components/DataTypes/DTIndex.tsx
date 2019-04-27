import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import dataTypes from '../../configs/data-types';

const renderDataTypes = () => {
    return dataTypes.map((group, i) => {
        return [
            <h3 key={`groupName${i + 1}`}>{group.label}:</h3>,
            <ul key={`groupList${i + 1}`}>{
                group.dataTypes.map((dType, j) => {
                    return <li key={`groupItem${i}${j}`}>
                        <Link to={`${dType.id}`}>{dType.label}</Link>
                    </li>;
                })
            }</ul>
        ];
    })
}

export default class DTIndex extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('props', this.props);

        return (<article className="data-types">
            <h1>Data types</h1>
            <p>You can create Mock Data in following formats. Most of the formats are configurable. Click on Data type to see its' details</p>
            {renderDataTypes()}
        </article>);
    }
};