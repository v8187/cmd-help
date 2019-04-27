import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

export default class DTPincode extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="pincode">
            <h1>Pincode</h1>
            <p>This Data Type can be used to generate 6 digit Pin/Postal code Number.</p>
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
const pincodeJson1 = [{
    "name": "myPin",
    "type": "pincode"
}];

// Output for 1 record:
[{ myPin: 458956 }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>There is no method available in <LinkRsMock /> for Pincode.</p>
            <p> However, you can use <LinkRsUtils />'s xToNum method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Pass 6 "x" to get random Pincode number 
 */
xToNum('xxxxxx'); // Outputs: 458956`}
                </code>
            </pre>
        </article>);
    }
};