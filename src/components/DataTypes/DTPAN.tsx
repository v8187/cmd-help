import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

export default class DTPAN extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="pan">
            <h1>Permanent Account Number (PAN)</h1>
            <p>This Data Type can be used to generate Permanent Account Number (PAN) in "AAAAAxxxxA" format.</p>
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
const panJson1 = [{
    "name": "myPan",
    "type": "pan"
}];

// Output for 1 record:
[{ myPan: 'ABCDE1234F' }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>There is no method available in <LinkRsMock /> for PAN.</p>
            <p> However, you can use <LinkRsUtils />'s alphanumeric method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Pass Indian PAN format  
 */
alphanumeric({ format: 'AAAAAxxxxA' }); // Outputs: ABCDE1234F`}
                </code>
            </pre>
        </article>);
    }
};