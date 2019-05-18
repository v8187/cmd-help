import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTPhoneNo extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="phoneNo">
            <h1>Phone Number</h1>
            <p>This Data Type can be used to generate random Phone Number in various formats.</p>
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
                    <tr>
                        <td>format</td>
                        <td>EPhoneFormats</td>
                        <td>EPhoneFormats.PLAIN</td>
                        <td>Optional. Can one of the options available in EPhoneFormats.
                            <pre>{`EPhoneFormats {
    PLAIN = 0,
    GROUP_OF_2 = 2,
    GROUP_OF_3 = 3,
    GROUP_OF_4 = 4,
    GROUP_OF_5 = 5
}`}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>isdInBraces</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should ISD code be wrapped in "()".</td>
                    </tr>
                    <tr>
                        <td>separateISD</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Should ISD code be seperate from number.</td>
                    </tr>
                    <tr>
                        <td>withISD</td>
                        <td>boolean</td>
                        <td>true</td>
                        <td>Optional. Generate number with or without ISD.</td>
                    </tr>
                    <tr>
                        <td>separator</td>
                        <td>String</td>
                        <td>EPhoneSeparator.SPACE</td>
                        <td>Optional. Separator is used to place one of the characters available in EPhoneSeparator between digits, if the format is not PLAIN.
                            <pre>{`EPhoneSeparator {
    HYPHEN = "-",
    FULLSTOP = ".",
    SPACE = " ",
    NON = ""
}`}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>startsWith</td>
                        <td>ICSymbol</td>
                        <td>EPhoneStartsWith.PLUS</td>
                        <td>Optional. Should generated number starts with one of the characters available in EPhoneStartsWith.
                            <pre>{`EPhoneStartsWith {
    PLUS = "+",
    ZEROS = "00",
    ISD = ""
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
const phoneNoJson1 = {
    "name": "mobile",
    "type": "phoneNo"
};

// Output for 1 record:
[{ mobile: '+91 707497296' }]

/** 
 * Sample 2: With isdInBraces = true and format = EPhoneFormats.GROUP_OF_3
 */
const phoneNoJson2 = {
    "name": "mobile",
    "type": "phoneNo",
    "options": {
        "countries": [{
            "name": "India",
            "isdCode": "91",
            "code2": "IN",
            "code3": "IND"
        }],
        "format": 3,
        "isdInBraces": true,
        "separateISD": true,
        "separator": " ",
        "startsWith": "+",
        "withISD": true
    }
};

// Output for 1 record:
[{ mobile: '(+91) 460 139 91' }]

/** 
 * Sample 3: With separator= "-" and format = EPhoneFormats.GROUP_OF_2
 */
const phoneNoJson3 = {
    "name": "mobile",
    "type": "phoneNo",
    "options": {
        "countries": [{
            "name": "India",
            "isdCode": "91",
            "code2": "IN",
            "code3": "IND"
        }],
        "format": 2,
        "isdInBraces": false,
        "separateISD": true,
        "separator": "-",
        "startsWith": "+",
        "withISD": true
    }
};

// Output for 1 record:
[{ mobile: '+91-68-02-57-67' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
phoneNo(); // Outputs: '+91 707497296'

/** With isdInBraces = true and format = EPhoneFormats.GROUP_OF_3 */
phoneNo({
    countries: [{
        name: 'India',
        isdCode: '91',
        code2: 'IN',
        code3: 'IND'
    }],
    format: 3,
    isdInBraces: true,
    separateISD: true,
    separator: ' ',
    startsWith: '+',
    withISD: true,
}); // Outputs: '(+91) 460 139 91'

/** With separator= "-" and format = EPhoneFormats.GROUP_OF_2 */
phoneNo({
    countries: [{
        name: 'India',
        isdCode: '91',
        code2: 'IN',
        code3: 'IND'
    }],
    format: 2,
    isdInBraces: false,
    separateISD: true,
    separator: '-',
    startsWith: '+',
    withISD: true,
}); // Outputs: '+91-68-02-57-67'`}
                </code>
            </pre>
        </article>);
    }
};