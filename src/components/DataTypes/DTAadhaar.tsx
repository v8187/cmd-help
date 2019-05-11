import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import NoUtilityRemarks from '../NoUtilityRemarks';

export default class DTAadhaar extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="aadhaar">
            <h1>Aadhaar</h1>
            <p>This Data Type can be used to generate 12 digit Aadhaar Number (Indian biometric based identity number).</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Sample JSON:
 */
const aadhaarJson1 = [{
    "name": "myAdhar",
    "type": "aadhaar"
}];

// Output for 1 record:
[{ myAdhar: 458956853214 }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <NoUtilityRemarks methodName="xToNum" dataType="Aadhaar" />
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Pass 12 "x" to get random Aadhaar number 
 */
xToNum('xxxxxxxxxxxx'); // Outputs: 458956853214`}
                </code>
            </pre>
        </article>);
    }
};