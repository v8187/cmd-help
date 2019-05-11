import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import CountryRemarks from '../CountryRemarks';

export default class DTCity extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        console.log(this.props);
        return (<article className="city">
            <h1>City</h1>
            <p>
                This Data Type can be used to generate random City name based on given Countries and States / Provinces.
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
                            <p>Optional. List of Countries in following format.</p>
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
                    <tr>
                        <td>states</td>
                        <td>IState[]</td>
                        <td><pre>
                            {`[{
    id: '377',
    name: 'Punjab',
    country: 'IND',
    latitude: 30.9,
    longitude: 75.85
}, {
    id: '160',
    name: 'Karnataka',
    country: 'IND',
    latitude: 12.98,
    longitude: 77.58
}]`}
                        </pre></td>
                        <td>
                            <p>Optional. List of Countries in following format.</p>
                            <pre>
                                {`IState = {
    id: string;
    name: string;
    country: string;
    latitude: number;
    longitude: number;
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
const cityJson1 = [{
    "name": "myCity",
    "type": "city"
}];

// Output for 1 record:
[{ myCity: 'Amritsar' }]

/** 
 * Sample 2: With options
 */
// Sample JSON:
const cityJson2 = [{
    "name": "myCity",
    "type": "city",
    "options": {
        "countries": [{
            "name": "Brazil",
            "isdCode": "55",
            "code2": "BR",
            "code3": "BRA",
            "selected": true
        }],
        "states": [{
            "id": "2116",
            "name": "Acre",
            "country": "BRA",
            "latitude": -9.97,
            "longitude": -67.8,
            "selected": true
        }, {
            "id": "2113",
            "name": "Amapa",
            "country": "BRA",
            "latitude": 0.03,
            "longitude": -51.05,
            "selected": true
        }]
    }
}];

// Output for 1 record:
[{ myCity: 'Rio Branco' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
city(); // Outputs: 'Amritsar'

/** With options */
city({
    countries: [{
        name: 'Brazil',
        isdCode: '55',
        code2: 'BR',
        code3: 'BRA',
        selected: true
    }],
    states: [{
        id: '2116',
        name: 'Acre',
        country: 'BRA',
        latitude: -9.97,
        longitude: -67.8,
        selected: true
    }, {
        id: '2113',
        name: 'Amapa',
        country: 'BRA',
        latitude: 0.03,
        longitude: -51.05,
        selected: true
    }]
}); // Outputs: 'Rio Branco'`}
                </code>
            </pre>
        </article>);
    }
};