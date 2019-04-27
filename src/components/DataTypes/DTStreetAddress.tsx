import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTStreetAddress extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="street-address">
            <h1>Street Address</h1>
            <p>This Data Type can be used to generate random Street Address.</p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    address(); // Outputs: Kothi 589 / 7328, Suspendisse Street, Vitae Ave.
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>N/A</p>
        </article>);
    }
};