import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';
import LinkRsMock from '../LinkRsMock';
import LinkRsUtils from '../LinkRsUtils';

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
            <p>There is no method available in <LinkRsMock /> for Boolean.</p>
            <p> However, you can use <LinkRsUtils />'s randomItem method for the same shown in below example:</p>
            <pre>
                <code className="language-javascript">
                    {`randomItem([true, false]); // Outputs: true`}
                </code>
            </pre>
        </article>);
    }
};