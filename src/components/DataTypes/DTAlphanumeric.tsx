import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTAlphanumeric extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="alphanumeric">
            <h1>Alphanumeric</h1>
            <p>This Data Type can be used to generate a random string in given format.
                <br />- "a" can be used to generated random lowercase letter
                <br />- "A" can be used to generated random uppercase letter
                <br />- "x" can be used to generated random digit
                <br />- Spaces &amp; Characters another than above will be returned as it is
            </p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It provides following options to configure:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Required / Optional</th>
                        <th>Type</th>
                        <th>Default value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>format</td>
                        <td>Optional</td>
                        <td>string</td>
                        <td>&lt;empty string&gt;</td>
                        <td>a => lowercase letter <br />
                            A => uppercase letter <br />
                            X => digit <br /></td>
                    </tr>
                </tbody>
            </table>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Sample 1: Without options 
 */
const alphaJson1 = [{
    "name": "vechicleNo",
    "type": "alphanumeric"
}];

// Output for 1 record:
[{ vechicleNo: '' }]

/** 
 * Sample 2: With options containing Lower, Upper and digits
 */
// Sample JSON:
const alphaJson2 = [{
    "name": "vechicleNo",
    "type": "alphanumeric",
    "options": { "format": "aaxxAAaA" }
}];

// Output for 1 record:
[{ vechicleNo: 'de89HUdE' }]

/** 
 * Sample 3: With options containing digits only
 */
const alphaJson3 = [{
    "name": "vechicleNo",
    "type": "alphanumeric",
    "options": { "format": "xxxxx" }
}];

// Output for 1 record:
[{ vechicleNo: '56702' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
alphanumeric(); // Outputs: ''

/** Format with Lower, Upper and digits */
alphanumeric({ format: 'aaxxAAaA' }); // Outputs: de89HUdE

/** Format with 5 digits */
alphanumeric({ format: 'xxxxx' }); // Outputs: 56702`}
                </code>
            </pre>
        </article>);
    }
};