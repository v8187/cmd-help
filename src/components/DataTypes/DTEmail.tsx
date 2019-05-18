import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTEmail extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="email">
            <h1>Email</h1>
            <p>This Data Type can be used to generate random Email ID with various formats.</p>
            <p>Either Person name or Random Characters needs to be enabled. If both are disabled, then Person name will be taken by default.</p>
            <p>In similar manner, either Public or Company domain needs to be enabled. Else Public domains will be considered.</p>
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
                        <td>publicDomains</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Email can use Public domains?</td>
                    </tr>
                    <tr>
                        <td>companyDomains</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Email can use Company domains?</td>
                    </tr>
                    <tr>
                        <td>personName</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Email can have Person Name?</td>
                    </tr>
                    <tr>
                        <td>randomChars</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Email can have Random Characters?</td>
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
const emailJson1 = {
    "name": "mailId",
    "type": "email"
};

// Output for 1 record:
[{ mailId: 'mirandaghoover@gmail.ca' }]

/** 
 * Sample 2: With only Random Characters, Company Domain and Hyphen enabled
 */
const emailJson2 = {
    "name": "mailId",
    "type": "email",
    "options": {
        "publicDomains": false,
        "companyDomains": true,
        "personName": false,
        "randomChars": true,
        "hyphen": true,
        "fullstop": false,
        "underscore": false
    }
};

// Output for 1 record:
[{ mailId: 'kznt-lf@egetmalesuadacorporation.net' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
email(); // Outputs: 'mirandaghoover@gmail.ca'

/** With only Random Characters, Company Domain and Hyphen enabled */
email({
    publicDomains: false,
    companyDomains: true,
    personName: false,
    randomChars: true,
    hyphen: true,
    fullstop: false,
    underscore: false
}); // Outputs: 'kznt-lf@egetmalesuadacorporation.net'`}
                </code>
            </pre>
        </article>);
    }
};