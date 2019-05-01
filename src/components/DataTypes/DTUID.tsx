import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

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
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Sample JSON:
 */
const uidJson1 = [{
    "name": "recordId",
    "type": "uid"
}];

// Output for 1 record:
[{ recordId: '3c3eb18b-d7f2-48a5-b91b-65ded9e4eb24' }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>There is no method available in <LinkRsMock /> for UID.</p>
            <p> However, you can use <LinkRsUtils />'s setUID method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`setUID(); // Outputs: '3c3eb18b-d7f2-48a5-b91b-65ded9e4eb24'`}
                </code>
            </pre>
        </article>);
    }
};