import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTPAN extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="pan">
            <h1>Permanent Account Number (PAN)</h1>
            <p>This Data Type can be used to generate 12 digit Aadhaar Number (Indian biometric based identity number)</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript">
                    aadhaar(); // Outputs: 458956853214
                </code>
            </pre>
        </article>);
    }
};