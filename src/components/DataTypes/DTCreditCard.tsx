import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCreditCard extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="creditCard">
            <h1>Credit Card Number</h1>
            <p>This Data Type can be used to generate random Credit Card Number in various formats.</p>
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
                        <td>separator</td>
                        <td>String</td>
                        <td>&lt;space&gt;</td>
                        <td>Optional. separator is used to fill any character between every 4 digits.
                            Provide empty string ('') to get value without any space or character.
                        </td>
                    </tr>
                    <tr>
                        <td>cardTypes</td>
                        <td>ICCardType[]</td>
                        <td><pre>{`[{
    name: 'American Express',
    formats: [{
        iins: [34, 37],
        range: {
            min: 15,
            max: 15
        }
    }]
}]`}</pre></td>
                        <td>Optional.
                            <pre>{`ICCardType {
    name?: string;
    formats: ICCardFormat[];
}

ICCardFormat {
    iins: Array<IMinMax | number>;
    range: IMinMax;
}

IMinMax {
    min: number;
    max: number;
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
const creditCardJson1 = [{
    "name": "myCC",
    "type": "creditCard"
}];

// Output for 1 record:
[{ myCC: '370 0305 0952 7530' }]

/** 
 * Sample 2: With Empty String as seperator
 */
const creditCardJson2 = [{
    "name": "myCC",
    "type": "creditCard",
    "options": {
        "separator": ""
    }
}];

// Output for 1 record:
[{ myCC: '378554203655751' }]

/** 
 * Sample 3: With "-" as separator and with iins as numeric array or range of numbers
 */
const creditCardJson3 = [{
    "name": "myCC",
    "type": "creditCard",
    "options": {
        "separator": "-",
        "cardTypes": [{
            "name": "Diners Club United States & Canada",
            "formats": [{
                "iins": [54, 55],
                "range": { "min": 16, "max": 16 }
            }]
        }, {
            "name": "JCB",
            "formats": [{
                "iins": [{
                    "min": 3528, "max": 3589
                }],
                "range": { "min": 16, "max": 19 }
            }]
        }]
    }
}];

// Output for 1 record:
[{ myCC: '3560-6609-1511-3386' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
creditCard(); // Outputs: '370 0305 0952 7530'

/** With Empty String as seperator */
creditCard({ separator: '' }); // Outputs: '378554203655751'

/** With "-" as separator and with iins as numeric array or range of numbers */
creditCard({
    separator: '-',
    cardTypes: [{
        name: 'Diners Club United States & Canada',
        formats: [{
            iins: [54, 55],
            range: { min: 16, max: 16 }
        }]
    }, {
        name: 'JCB',
        formats: [{
            iins: [{
                min: 3528, max: 3589
            }],
            range: { min: 16, max: 19 }
        }]
    }]
}); // Outputs: '3560-6609-1511-3386'`}
                </code>
            </pre>
        </article>);
    }
};