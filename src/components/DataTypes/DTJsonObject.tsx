import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTJsonObject extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="json-object">
            <h1>JsonObject</h1>
            <p>
                This Data Type can be used to generate Object with nested objects.
            </p>
            <p>
                <span className="tag">I__D</span> must be defined if you use <span className="tag">Upload JSON</span> functionality.
            </p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** 
 * JsonObject as parent with 2 children
 */
const jsonObjectJson = [{
    "I__D": "marks",
    "name": "marks",
    "type": "jsonObject"
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
    "marks": {
        "sem1": 267,
        "sem2": 406
    }
}]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>N/A</p>
        </article>);
    }
};