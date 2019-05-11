import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCompany extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="company">
            <h1>Company</h1>
            <p>This Data Type can be used to generate random Company name as per given minimum and maximum length of words.</p>
            <p>Company name must be of minimum 2 characters.</p>
            <p>It accepts two parameters, min and max.</p>
            <p>Defaults are min = 2 and max = 5.</p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It provides following options to configure:</p>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Defaults</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>min</td>
                        <td>number</td>
                        <td>2</td>
                        <td>Optional. min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>5</td>
                        <td>Optional. max value must be greater than min value.</td>
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
const company1 = [{
    "name": "org1",
    "type": "company"
}];

// Output for 1 record:
[{ org1: 'Netus Elit Institute' }]

/** 
 * Sample 2: With min = 10 & max = 20
 */
// Sample JSON:
const company2 = [{
    "name": "org2",
    "type": "company",
    "options": { "min": 4, "max": 5 }
}];

// Output for 1 record:
[{ org2: 'Aliquet Placerat Vitae Pulvinar Associates' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
company(); // Outputs: 'Netus Elit Institute'

/** Sample 2: With min = 4 & max = 5 */
company(3, 6); // Outputs: 'Aliquet Placerat Vitae Pulvinar Associates'`}
                </code>
            </pre>
        </article>);
    }
};