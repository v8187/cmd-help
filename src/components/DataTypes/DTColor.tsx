import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTColor extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="color">
            <h1>Color Name</h1>
            <p>This Data Type can be used to generate random Colo value in 
                <span className="tag">English Color Name</span>, 
                <span className="tag">Hexadecimal</span>, 
                <span className="tag">RGB Numeric</span>, 
                <span className="tag">RGB Percentage</span> formats.</p>
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
const alphaJson1 = [{
    "name": "myColor",
    "type": "color"
}];

// Output for 1 record:
[{ myColor: 'Red' }]

/** 
 * Sample 2: With options containing Lower, Upper and digits
 */
// Sample JSON:
const alphaJson2 = [{
    "name": "myColor",
    "type": "color",
    "options": {
        "format": "aaxxAAaA"
    }
}];

// Output for 1 record:
[{ myColor: 'de89HUdE' }]

/** 
 * Sample 3: With options containing digits only
 */
const alphaJson3 = [{
    "name": "myColor",
    "type": "color",
    "options": {
        "format": "xxxxx"
    }
}];

// Output for 1 record:
[{ myColor: '56702' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
color(); // Outputs: 'Red'

/** Format with Lower, Upper and digits */
color({ format: 'aaxxAAaA' }); // Outputs: de89HUdE

/** Format with 5 digits */
color({ format: 'xxxxx' }); // Outputs: 56702`}
                </code>
            </pre>
        </article>);
    }
};