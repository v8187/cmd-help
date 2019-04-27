import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTUID extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="uid">
            <h1>Unique ID</h1>
            <p>This Data Type can be used to generate unique ID</p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    uid(); // Outputs: 3c3eb18b-d7f2-48a5-b91b-65ded9e4eb24
                </code>
            </pre>
        </article>);
    }
};