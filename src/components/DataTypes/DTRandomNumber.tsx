import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsUtils from '../LinkRsUtils';
import LinkRsMock from '../LinkRsMock';

export default class DTRandomNumber extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="random-number">
            <h1>Random Number</h1>
            <p>This Data Type can be used to generate random between the given minimum and maximum values.<br />
                It accepts two parameters, min and max <br />
                Defaults are min = 1 and max = 100.</p>
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
                        <td>1</td>
                        <td>min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>Optional</td>
                        <td>number</td>
                        <td>100</td>
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
    "name": "score1",
    "type": "randomNumber"
}];

// Output for 1 record:
[{ score1: 67 }]

/** 
 * Sample 2: With min = 10 & max = 20
 */
// Sample JSON:
const ranNum2 = [{
    "name": "score2",
    "type": "randomNumber",
    "options": { "min": 10, "max": 20 }
}];

// Output for 1 record:
[{ score2: 16 }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>There is no method available in <LinkRsMock /> for Aadhaar.</p>
            <p> However, you can use <LinkRsUtils />'s randomNum method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
randomNum(); // Outputs: 67

/** Sample 2: With min = 10 & max = 20 */
randomNum(10, 20); // Outputs: 16`}
                </code>
            </pre>
        </article>);
    }
};