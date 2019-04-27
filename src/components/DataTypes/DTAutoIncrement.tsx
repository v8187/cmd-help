import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTAutoIncrement extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="auto-increment">
            <h1>Auto Increment</h1>
            <p>This Data Type can be used to generate index (starts with 0) for each record.</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`// Sample JSON:
[{"name": "itemIndex", "type", "autoIncrement"}]

// Output for 3 records:
[{itemIndex: 0}, {itemIndex: 1}, {itemIndex: 2}]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>N/A</p>
        </article>);
    }
};