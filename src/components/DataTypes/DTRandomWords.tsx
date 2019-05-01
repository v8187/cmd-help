import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

export default class DTRandomWords extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="random-words">
            <h1>Random Words</h1>
            <p>This Data Type can be used to generate random sentence as per given minimum and maximum length of words.<br />
                It accepts two parameters, min and max <br />
                Defaults are min = 3 and max = 20.</p>
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
                        <td>min</td>
                        <td>Optional</td>
                        <td>number</td>
                        <td>3</td>
                        <td>min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>Optional</td>
                        <td>number</td>
                        <td>20</td>
                        <td>max value must be greater than min value.</td>
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
const ranNum1 = [{
    "name": "comments1",
    "type": "randomWords"
}];

// Output for 1 record:
[{ comments1: 'Curabitur scelerisque mattis Vestibulum adipiscing Praesent ultricies hendrerit ante' }]

/** 
 * Sample 2: With min = 10 & max = 20
 */
// Sample JSON:
const ranNum2 = [{
    "name": "comments2",
    "type": "randomWords",
    "options": { "min": 3, "max": 6 }
}];

// Output for 1 record:
[{ comments2: 'adipiscing Praesent ultricies hendrerit' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>There is no method available in <LinkRsMock /> for Aadhaar.</p>
            <p> However, you can use <LinkRsUtils />'s randomWords method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
randomWords(); // Outputs: 'Curabitur scelerisque mattis Vestibulum adipiscing Praesent ultricies hendrerit ante'

/** Sample 2: With min = 3 & max = 6 */
randomWords(3, 6); // Outputs: 'adipiscing Praesent ultricies hendrerit'`}
                </code>
            </pre>
        </article>);
    }
};