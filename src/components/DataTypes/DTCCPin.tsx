import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import NoUtilityRemarks from '../NoUtilityRemarks';

export default class DTCCPin extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="cc-pin">
            <h1>Credit Card PIN</h1>
            <p>This Data Type can be used to generate 4 digit Credit Card PIN.</p>
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
const ccPinJson1 = [{
    "name": "cPin",
    "type": "ccPin"
}];

// Output for 1 record:
[{ cPin: 4589 }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <NoUtilityRemarks methodName="xToNum" dataType="Credit Card PIN" />
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Pass 4 "x" to get random Credit Card PIN Code 
 */
xToNum('xxxx'); // Outputs: 4589`}
                </code>
            </pre>
        </article>);
    }
};