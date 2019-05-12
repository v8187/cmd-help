import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCreditCard extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="creditCard">
            <h1>Credit Card Number</h1>
            <p>This Data Type can be used to generate random Credit Card Number in&nbsp; 
                 <span className="tag">English Color Name</span>&nbsp;,&nbsp;
                 <span className="tag">Hexadecimal</span>&nbsp;,&nbsp; 
                 <span className="tag">RGB Numeric</span>&nbsp;,&nbsp; 
                <span className="tag">RGB Percentage</span>&nbsp; formats.</p>
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
                        <td>format</td>
                        <td>EColorFormat</td>
                        <td>EColorFormat.NAME</td>
                        <td>Optional. 
                            <pre>{` EColorFormat {
    NAME = 0, // For English Color name
    HEX_CODE = 1, // For Hexadecimal value
    RGB_PERCENT = 2, // For RGB percentage value
    RGB_NUMERIC = 3 // For RGB numeric value
}`}</pre></td>
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
const creditCardJson1 = [{
    "name": "myCC",
    "type": "creditCard"
}];

// Output for 1 record:
[{ myCC: 'Red' }]

/** 
 * Sample 2: Get Hexadecimal Color value
 */
const creditCardJson2 = [{
    "name": "myCC",
    "type": "creditCard",
    "options": {
        "format": 1
    }
}];

// Output for 1 record:
[{ myCC: '#B0C4DE' }]

/** 
 * Sample 3: Get RGB Numeric Color value
 */
const creditCardJson3 = [{
    "name": "myCC",
    "type": "creditCard",
    "options": {
        "format": 3
    }
}];

// Output for 1 record:
[{ myCC: 'rgb(255, 109.65, 73.95)' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
creditCard(); // Outputs: 'Red'

/** Get Hexadecimal Color value */
creditCard({ format: 1 }); // Outputs: '#B0C4DE'

/** Get RGB Numeric Color value */
creditCard({ format: 3 }); // Outputs: 'rgb(255, 109.65, 73.95)'`}
                </code>
            </pre>
        </article>);
    }
};