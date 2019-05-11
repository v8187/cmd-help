import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import CountryRemarks from '../CountryRemarks';

export default class DTLatLong extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="latLong">
            <h1>Latitude / Longitude</h1>
            <p>
                This Data Type can be used to generate random Latitude / Longitude value based on given Countries.
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
                            <p>Optional. List of Countries  in following format</p>
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
const latLongJson1 = [{
    "name": "myLatLong",
    "type": "latLong"
}];

// Output for 1 record:
[{ myLatLong: '13.25, 80.33' }]

/** 
 * Sample 2: With options containing 1 Country
 */
// Sample JSON:
const latLongJson2 = [{
    "name": "myLatLong",
    "type": "latLong",
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
[{ myLatLong: '-21.55, -46.05' }]

/** 
 * Sample 3: With options containing 2 Countries
 */
const latLongJson3 = 
[{
    "name": "myLatLong",
    "type": "latLong",
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
[{ myLatLong: '36.42, -80.48' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
latLong(); // Outputs: '13.25, 80.33'

/** With options containing 1 Country */
latLong({
    countries: [{
        name: 'Brazil',
        isdCode: '55',
        code2: 'BR',
        code3: 'BRA'
    }]
}); // Outputs: '-21.55, -46.05'

/** With options containing 2 Countries */
latLong({
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
}); // Outputs:  '36.42, -80.48'`}
                </code>
            </pre>
        </article>);
    }
};