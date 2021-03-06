import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCountry extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="country">
            <h1>Country</h1>
            <p>
                This Data Type can be used to generate random Country name.</p>
            <p>
                As of now, data is available only for following countries: India, China, USA, Brazil, France.
            </p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`/**
 * Sample JSON:
 */
const conJson1 = [{
    "name": "myCountry",
    "type": "country"
}];

// Output for 1 record:
[{ myCountry: 'India' }]
`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    country(); // Outputs: India
                </code>
            </pre>
        </article>);
    }
};