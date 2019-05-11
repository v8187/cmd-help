import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import NoUtilityRemarks from '../NoUtilityRemarks';

export default class DTCVV extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="cc-pin">
            <h1>CVV Code</h1>
            <p>This Data Type can be used to generate 3 digit CVV code.</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Sample JSON:
 */
const cvvJson1 = [{
    "name": "myCvv",
    "type": "cvv"
}];

// Output for 1 record:
[{ myCvv: 459 }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <NoUtilityRemarks methodName="xToNum" dataType="CVV Code" />
            <pre>
                <code className="language-javascript">
                    {`/** 
 * Pass 3 "x" to get random CVV Code 
 */
xToNum('xxx'); // Outputs: 459`}
                </code>
            </pre>
        </article>);
    }
};