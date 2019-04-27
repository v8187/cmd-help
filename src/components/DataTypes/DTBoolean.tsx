import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTBoolean extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="boolean">
            <h1>Boolean</h1>
            <p>This Data Type can be used to generate true or false randomlly.</p>
            <Availability inApp={true} inLib={false} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <h3>Web App:</h3>
            <pre>
                <code className="language-javascript">
                    {`// Sample JSON:
[{"name": "isSeniorCitizen", "type", "boolean"}]

// Outputs:
[{isSeniorCitizen: true}]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <p>N/A</p>
        </article>);
    }
};