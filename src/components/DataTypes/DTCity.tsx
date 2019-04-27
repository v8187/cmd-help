import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTCity extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="city">
            <h1>City</h1>
            <p>This Data Type can be used to generate random City name</p>
            <Availability inApp={true} inLib={true} />
            <h2>Options</h2>
            <p>It does not have any options to customize the output.</p>
            <h2>Examples</h2>
            <pre>
                <code className="language-javascript language-markup">
                    // Defaults
                    city(); // Outputs: true
                </code>
            </pre>
        </article>);
    }
};