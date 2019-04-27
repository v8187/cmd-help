import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

export default class DTCCPin extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="cc-pin">
            <h1>Credit Card Pin Code</h1>
            <p>This Data Type can be used to generate 4 digit Credit card PIN code.</p>
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
            <p>There is no method available in <LinkRsMock /> for Credit Card PIN Code.</p>
            <p> However, you can use <LinkRsUtils />'s xToNum method for the same shown in below example:</p>
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