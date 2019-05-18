import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTPassword extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="password">
            <h1>Password</h1>
            <p>This Data Type can be used to generate random Password.</p>
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
                        <td>6</td>
                        <td>Optional. min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>8</td>
                        <td>Optional. max value must be greater than min value.</td>
                    </tr>
                    <tr>
                        <td>upperCase</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have Uppercase letters?.</td>
                    </tr>
                    <tr>
                        <td>lowerCase</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have LowerCase letters?.</td>
                    </tr>
                    <tr>
                        <td>digit</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have numeric value?.</td>
                    </tr>
                    <tr>
                        <td>specialChar</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have special characters?.</td>
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
const passwordJson1 = {
    "name": "defaultPwd",
    "type": "password"
};

// Output for 1 record:
[{ defaultPwd: '&7G4Ps#' }]

/** 
 * Sample 2: Without Special Characters and between 4 - 8
 */
const passwordJson2 = {
    "name": "defaultPwd",
    "type": "password",
    "options": {
        "min": 4,
        "max": 8,
        "upperCase": true,
        "lowerCase": true,
        "digit": true,
        "specialChar": false
    }
};

// Output for 1 record:
[{ defaultPwd: 'IM2UTZqA' }]

/** 
 * Sample 3: With lowercase and numeric value only and length should be exact 7 characters
 */
const passwordJson3 = {
    "name": "defaultPwd",
    "type": "password",
    "options": {
        "min": 7,
        "max": 7,
        "upperCase": false,
        "lowerCase": true,
        "digit": true,
        "specialChar": false
    }
};;

// Output for 1 record:
[{ defaultPwd: '12d9xkz' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
password(); // Outputs: '&7G4Ps#'

/** Without Special Characters and between 4 - 8 */
password({
    min: 4,
    max: 8,
    upperCase: true,
    lowerCase: true,
    digit: true,
    specialChar: false
}); // Outputs: 'IM2UTZqA'

/** With lowercase and numeric value only and length should be exact 7 characters */
password({
    min: 7,
    max: 7,
    upperCase: false,
    lowerCase: true,
    digit: true,
    specialChar: false
}); // Outputs: '12d9xkz'`}
                </code>
            </pre>
        </article>);
    }
};