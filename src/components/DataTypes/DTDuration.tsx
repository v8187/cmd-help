import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTDuration extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="duration">
            <h1>Duration</h1>
            <p>This Data Type can be used to generate random Duration in various formats.</p>
            <p>Only one of the unixTimestampMilisecond, unixTimestampSecond, sqlTimestamp will be considered at a moment.</p>
            <p>Time options will be used only if hasTime is enabled.</p>
            <p>Date options will be used only if onlyTime is disabled.</p>
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
                        <td>prefix</td>
                        <td>string</td>
                        <td>Empnty string</td>
                        <td>Optional. String to prefix to the generated duration value.</td>
                    </tr>
                    <tr>
                        <td>sufix</td>
                        <td>string</td>
                        <td>Empnty string</td>
                        <td>Optional. String to sufix to the generated duration value.</td>
                    </tr>
                    <tr>
                        <td>decades</td>
                        <td rowSpan={9}>IDUnit</td>
                        <td rowSpan={9}>For details refer <b>Defaults Values</b> section.</td>
                        <td rowSpan={9}>Optional. For details refer <b>IDUnit Info</b> section.</td>
                    </tr>
                    <tr><td>years</td></tr>
                    <tr><td>months</td></tr>
                    <tr><td>weeks</td></tr>
                    <tr><td>days</td></tr>
                    <tr><td>hours</td></tr>
                    <tr><td>minutes</td></tr>
                    <tr><td>seconds</td></tr>
                    <tr><td>miliseconds</td></tr>
                </tbody>
            </table>
            <h4>IDUnit Info</h4>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>title</td>
                        <td>string</td>
                        <td>Optional. Title to display on UI.</td>
                    </tr>
                    <tr>
                        <td>selected</td>
                        <td>boolean</td>
                        <td>Optional. Should include decade value?</td>
                    </tr>
                    <tr>
                        <td>min</td>
                        <td>number</td>
                        <td>Optional. min value must be lower than max value.</td>
                    </tr>
                    <tr>
                        <td>max</td>
                        <td>number</td>
                        <td>Optional. max value must be greater than min value.</td>
                    </tr>
                    <tr>
                        <td>prefix</td>
                        <td>string</td>
                        <td>Optional. String to prefix to the generated decades value.</td>
                    </tr>
                    <tr>
                        <td>sufix</td>
                        <td>string</td>
                        <td>Optional. String to sufix to the generated decades value.</td>
                    </tr>
                </tbody>
            </table>
            <h4>Defaults Values</h4>
            <table>
                <thead>
                    <tr>
                        <th />
                        <th>title</th>
                        <th>selected</th>
                        <th>min</th>
                        <th>max</th>
                        <th>sufix</th>
                        <th>prefix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>decades</th>
                        <td>Decades</td>
                        <td>false</td>
                        <td rowSpan={9}>0</td>
                        <td>9</td>
                        <td>Decades</td>
                        <td rowSpan={9}>Empty String</td>
                    </tr>
                    <tr>
                        <th>years</th>
                        <td>Years</td>
                        <td>false</td>
                        <td>1000</td>
                        <td>Years</td>
                    </tr>
                    <tr>
                        <th>months</th>
                        <td>Months</td>
                        <td>false</td>
                        <td>11</td>
                        <td>Months</td>
                    </tr>
                    <tr>
                        <th>weeks</th>
                        <td>Weeks</td>
                        <td>false</td>
                        <td>4</td>
                        <td>Weeks</td>
                    </tr>
                    <tr>
                        <th>days</th>
                        <td>Days</td>
                        <td>true</td>
                        <td>29</td>
                        <td>Days</td>
                    </tr>
                    <tr>
                        <th>hours</th>
                        <td>Hours</td>
                        <td>false</td>
                        <td>23</td>
                        <td>Hours</td>
                    </tr>
                    <tr>
                        <th>minutes</th>
                        <td>Minutes</td>
                        <td>false</td>
                        <td>59</td>
                        <td>Minutes</td>
                    </tr>
                    <tr>
                        <th>seconds</th>
                        <td>Seconds</td>
                        <td>false</td>
                        <td>59</td>
                        <td>Seconds</td>
                    </tr>
                    <tr>
                        <th>miliseconds</th>
                        <td>Miliseconds</td>
                        <td>false</td>
                        <td>999</td>
                        <td>Miliseconds</td>
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
const durationJson1 = {
    "name": "timeLeft",
    "type": "duration"
};

// Output for 1 record:
[{ timeLeft: '7Days' }]

/** 
 * Sample 2: With Weeks and Days enabled
 */
const durationJson2 = {
    "name": "timeLeft",
    "type": "duration",
    "options": {
        "prefix": "Only",
        "sufix": "Left",
        "weeks": {
            "title": "Weeks",
            "selected": true,
            "min": 0,
            "max": 4,
            "sufix": " Weeks",
            "prefix": ""
        },
        "days": {
            "title": "Days",
            "selected": true,
            "min": 0,
            "max": 29,
            "sufix": " Days",
            "prefix": "and"
        }
    }
};

// Output for 1 record:
[{ timeLeft: 'Only 1 Weeks and 11 Days Left' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
duration(); // Outputs: '7Days'

/** With Weeks and Days enabled */
duration({
    prefix: 'Only',
    sufix: 'Left',
    weeks: {
        title: 'Weeks',
        selected: true,
        min: 0,
        max: 4,
        sufix: ' Weeks',
        prefix: ''
    },
    days: {
        title: 'Days',
        selected: true,
        min: 0,
        max: 29,
        sufix: ' Days',
        prefix: 'and'
    }
}); // Outputs: 'Only 1 Weeks and 11 Days Left'`}
                </code>
            </pre>
        </article>);
    }
};