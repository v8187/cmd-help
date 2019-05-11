import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import CountryRemarks from '../CountryRemarks';

export default class DTState extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        console.log(this.props);
        return (<article className="state">
            <h1>State / Province</h1>
            <p>
                This Data Type can be used to generate random State / Province name based on given Countries.
            </p>
            <CountryRemarks />
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
                        <td>countries</td>
                        <td>ICountry[]</td>
                        <td><pre>
                            {`[{
    name: 'India',
    isdCode: '91',
    code2: 'IN',
    code3: 'IND'
}]`}
                        </pre></td>
                        <td>
                            <p>Optional. List of Countries  in following format.</p>
                            <pre>
                                {`ICountry = {
    name: string;
    isdCode: string;
    code2: string;
    code3: string;
}`}
                            </pre>
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
const stateJson1 = [{
    "name": "myState",
    "type": "state"
}];

// Output for 1 record:
[{ myState: 'Punjab' }]

/** 
 * Sample 2: With options containing 1 Country
 */
// Sample JSON:
const stateJson2 = [{
    "name": "myState",
    "type": "state",
    "options": {
        "countries": [{
            "name": "Brazil",
            "isdCode": "55",
            "code2": "BR",
            "code3": "BRA"
        }]
    }
}];

// Output for 1 record:
[{ myState: 'Ceara' }]

/** 
 * Sample 3: With options containing 2 Countries
 */
const stateJson3 = 
[{
    "name": "myState",
    "type": "state",
    "options": {
        "countries": [{
            "name": "France",
            "isdCode": "33",
            "code2": "FR",
            "code3": "FRA"
        }, {
            "name": "United States",
            "isdCode": "1",
            "code2": "US",
            "code3": "USA"
        }]
    }
}];

// Output for 1 record:
[{ myState: 'Territoire de Belfort' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
state(); // Outputs: 'Himachal Pardesh'

/** With options containing 1 Country */
state({
    countries: [{
        name: 'Brazil',
        isdCode: '55',
        code2: 'BR',
        code3: 'BRA'
    }]
}); // Outputs: 'Ceara'

/** With options containing 2 Countries */
state({
    countries: [{
        name: 'France',
        isdCode: '33',
        code2: 'FR',
        code3: 'FRA'
    }, {
        name: 'United States',
        isdCode: '1',
        code2: 'US',
        code3: 'USA'
    }]
}); // Outputs:  'Territoire de Belfort'`}
                </code>
            </pre>
        </article>);
    }
};