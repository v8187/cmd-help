import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTArray extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="array">
            <h1>Array</h1>
            <p>This Data Type can be used to generate list/array of nested objects.</p>
            <p>As of now, only fix number of records can be generated as nested properties.</p>
            <p><b>I__D</b> must be defined if you use <b>Upload JSON</b> functionality</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It provides following options to configure:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Defaults</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>count</td>
                        <td>number | string</td>
                        <td>10</td>
                        <td>Optional. Fixed number of records will be generated based on count value.</td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Array as parent with 2 children
 */
const arrayJson = [{
    "I__D": "marks",
    "name": "marks",
    "type": "array",
    "options": { "count": 1 }
}, {
    "name": "sem1",
    "type": "randomNumber",
    "options": {
        "min": 200, "max": 300
    },
    "parentRef": "marks"
}, {
    "name": "sem2",
    "type": "randomNumber",
    "options": {
        "min": 400, "max": 500
    },
    "parentRef": "marks"
}];

// Output for 1 record:
[{
    "marks": [
        {
            "sem1": 267,
            "sem2": 406
        }
    ]
}]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>N/A</p>
        </article>);
    }
};