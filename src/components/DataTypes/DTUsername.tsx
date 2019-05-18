import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTUsername extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="username">
            <h1>Username</h1>
            <p>This Data Type can be used to generate random Username with various formats.</p>
            <p>Either Person name or Random Characters needs to be enabled. If both are disabled, then Person name will be taken by default.</p>
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
                        <td>personName</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Username can have Person Name?</td>
                    </tr>
                    <tr>
                        <td>randomChars</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Username can have Random Characters?</td>
                    </tr>
                    <tr>
                        <td>fullstop</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Can have Fullstop (.) character?.</td>
                    </tr>
                    <tr>
                        <td>underscore</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Can have Underscore (_) character?.</td>
                    </tr>
                    <tr>
                        <td>hyphen</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Can have hypen (-) character?.</td>
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
const usernameJson1 = {
    "name": "userId",
    "type": "username"
};

// Output for 1 record:
[{ userId: 'galileakennedy' }]

/** 
 * Sample 2: With only Random Characters and Hyphen enabled
 */
const usernameJson2 = {
    "name": "userId",
    "type": "username",
    "options": {
        "personName": false,
        "randomChars": true,
        "hyphen": true,
        "fullstop": false,
        "underscore": false
    }
};

// Output for 1 record:
[{ userId: 'sru11dqb-puk' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
username(); // Outputs: 'galileakennedy'

/** With only Random Characters and Hyphen enabled */
username({
    personName: false,
    randomChars: true,
    hyphen: true,
    fullstop: false,
    underscore: false
}); // Outputs: 'sru11dqb-puk'`}
                </code>
            </pre>
        </article>);
    }
};