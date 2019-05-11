import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTGender extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="gender">
            <h1>Gender</h1>
            <p>This Data Type can be used to generate random Gender value in various formats.</p>
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
                        <td>
                            <span className="tag">'m/f'</span> | <span className="tag">'M/F'</span> | <span className="tag">'Male/Female'</span>
                        </td>
                        <td><span className="tag">'Male/Female'</span></td>
                        <td>Optional. Can one of the string value from Type column.</td>
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
const genderJson1 = [{
    "name": "gend",
    "type": "gender"
}];

// Output for 1 record:
[{ gend: 'Female' }]

/** 
 * Sample 2: With options of 'm/f' format
 */
// Sample JSON:
const genderJson2 = [{
    "name": "gend",
    "type": "gender",
    "options": {
        "format": "m/f"
    }
}];

// Output for 1 record:
[{ gend: 'm' }]

/** 
 * Sample 3: With options of 'M/F' format
 */
const genderJson3 = [{
    "name": "gend",
    "type": "gender",
    "options": {
        "format": "M/F"
    }
}];

// Output for 1 record:
[{ gend: 'M' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
gender(); // Outputs: 'Male'

/** Sample 2: With options of 'm/f' format */
gender({ format: 'm/f' }); // Outputs: 'f'

/** Sample 3: With options of 'M/F' format */
gender({ format: 'M/F' }); // Outputs: 'F'`}
                </code>
            </pre>
        </article>);
    }
};