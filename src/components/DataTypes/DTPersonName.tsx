import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTPersonName extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="personName">
            <h1>Person Name</h1>
            <p>This Data Type can be used to generate random Person Name in various formats.</p>
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
                        <td>male</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have Male name?.</td>
                    </tr>
                    <tr>
                        <td>female</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Can have Female name?.</td>
                    </tr>
                    <tr>
                        <td>format</td>
                        <td>EPersonNameFormats</td>
                        <td>EPersonNameFormats.NAME_SURNAME</td>
                        <td>Optional. Can one of the following value:
                            <pre>{`EPersonNameFormats {
    NAME = 0,
    SURNAME = 1,
    NAME_SURNAME = 2,
    SURNAME_NAME = 3,
    NAME_INITIAL = 4,
    NAME_INITIAL_SURNAME = 5,
    NAME_SURNAME_INITIAL = 6,
    SURNAME_NAME_INITIAL = 7
}`}</pre>
                        </td>
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
const personNameJson1 = {
    "name": "empName",
    "type": "personName"
};

// Output for 1 record:
[{ empName: 'Royalty Pope' }]

/** 
 * Sample 2: In "NAME_INITIAL_SURNAME" Format
 */
const personNameJson2 = {
    "name": "empName",
    "type": "personName",
    "options": {
        "male": true,
        "female": true,
        "format": 5
    }
};

// Output for 1 record:
[{ empName: 'Juliana X. Miranda' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
personName(); // Outputs: 'Royalty Pope'

/** In "NAME_INITIAL_SURNAME" Format */
personName({
    male: true,
    female: true,
    format: EPersonNameFormats.NAME_INITIAL_SURNAME
}); // Outputs: 'Juliana X. Miranda'`}
                </code>
            </pre>
        </article>);
    }
};