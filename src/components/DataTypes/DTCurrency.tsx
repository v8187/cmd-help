import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCurrency extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="currency">
            <h1>Currency</h1>
            <p>This Data Type can be used to generate random Currency Amount in various formats.</p>
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
                        <td>min</td>
                        <td>number</td>
                        <td>10</td>
                        <td>Optional. min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>1000</td>
                        <td>Optional. max value must be greater than min value.</td>
                    </tr>
                    <tr>
                        <td>decimals</td>
                        <td>number</td>
                        <td>2</td>
                        <td>Optional. Number of digits allowed after decimal.</td>
                    </tr>
                    <tr>
                        <td>separator</td>
                        <td>String</td>
                        <td>comma (,)</td>
                        <td>Optional. separator is used to place any character after every 3 digits from right hand side.
                            If amount is less than 3 digits than , there will be no separator used.
                        </td>
                    </tr>
                    <tr>
                        <td>symbol</td>
                        <td>ICSymbol</td>
                        <td><pre>{`{
    unicode: 'U+0024',
    htmlCode: '\\\\0024',
    name: 'DOLLAR SIGN',
    symbol: '$'
}`}</pre></td>
                        <td>Optional.
                            <pre>{`ICSymbol {
    unicode?: string;
    htmlCode?: string;
    name?: string;
    symbol: string;
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
const currencyJson1 = {
    "name": "price",
    "type": "currency"
};

// Output for 1 record:
[{ price: '$433.26' }]

/** 
 * Sample 2: With Indian Rupee Symbol and 4 decimal place
 */
const currencyJson2 = {
    "name": "price",
    "type": "currency",
    "options": {
        "min": 10,
        "max": 1000,
        "decimals": 4,
        "separator": ",",
        "symbol": {
            "unicode": "U+20B9",
            "htmlCode": "\\u0010B9",
            "name": "INDIAN RUPEE SIGN",
            "symbol": "₹"
        }
    }
};

// Output for 1 record:
[{ price: '₹621.8930' }]

/** 
 * Sample 3: With min = 10000 and max 12000
 */
const currencyJson3 = {
    "name": "price",
    "type": "currency",
    "options": {
        "min": 10000,
        "max": 12000,
        "decimals": 2,
        "separator": ",",
        "symbol": {
            "unicode": "U+0024",
            "htmlCode": "\\\\0024",
            "name": "DOLLAR SIGN",
            "symbol": "$"
        }
    }
};

// Output for 1 record:
[{ price: '$11,391.34' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
currency(); // Outputs: '$433.26'

/** With Indian Rupee Symbol and 4 decimal place */
currency({
    min: 10,
    max: 1000,
    decimals: 4,
    separator: ',',
    symbol: {
        unicode: 'U+20B9',
        htmlCode: '\\u0010B9',
        name: 'INDIAN RUPEE SIGN',
        symbol: '₹'
    }
}); // Outputs: '₹621.8930'

/** With min = 10000 and max 12000 */
currency({
    min: 10000,
    max: 12000,
    decimals: 2,
    separator: ',',
    symbol: {
        unicode: 'U+0024',
        htmlCode: '\\\\0024',
        name: 'DOLLAR SIGN',
        symbol: '$'
    }
}); // Outputs: '$11,391.34'`}
                </code>
            </pre>
        </article>);
    }
};