import * as React from 'react';
import { Component } from 'react';
import Availability from '../Availability';

export default class DTDateTime extends Component<IOnMount> {

    componentDidMount() {
        this.props.onMount && this.props.onMount();
    }

    render() {
        return (<article className="dateTime">
            <h1>Date / Time</h1>
            <p>This Data Type can be used to generate random Date / Time in various formats.</p>
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
                        <td>from</td>
                        <td>number</td>
                        <td>1 month in back from current date/time in Unix format (13 digits number)</td>
                        <td>Optional. Date/Time in Unix format.</td>
                    </tr>
                    <tr>
                        <td>to</td>
                        <td>number</td>
                        <td>1 month in future from date/time in Unix format (13 digits number)</td>
                        <td>Optional. Date/Time in Unix format.</td>
                    </tr>
                    <tr>
                        <td>unixTimestampMilisecond</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should generate Date/Time in Unix format (13 digits number)?</td>
                    </tr>
                    <tr>
                        <td>unixTimestampSecond</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should generate Date/Time in Unix format (11 digits number)?</td>
                    </tr>
                    <tr>
                        <td>sqlTimestamp</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should generate SQL timestamp format?</td>
                    </tr>
                    <tr>
                        <td>onlyTime</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should generate only Time and not Date?</td>
                    </tr>
                    <tr>
                        <td>hasTime</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>Optional. Should generate Time as well along with Date?</td>
                    </tr>
                    <tr>
                        <td>variant</td>
                        <td>EVariant</td>
                        <td>EVariant.FULL</td>
                        <td>Optional. Can one of the options available in EVariant.
                            <pre>{`EVariant {
    SHORT = "Short",
    MEDIUM = "Medium",
    LONG = "Long",
    FULL = "Full"
}`}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>dateSequence</td>
                        <td>EDateSequence</td>
                        <td>EDateSequence.MDY</td>
                        <td>
                            <p>Optional. Can one of the options available in EDateSequence.</p>
                            <p>This option is considered only if variant is short.</p>
                            <pre>{`EDateSequence {
    MDY = "MDY",
    DMY = "DMY",
    YMD = "YMD"
}`}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>dateSeparator</td>
                        <td>String</td>
                        <td>EDateSeparator.SLASH</td>
                        <td>
                            <p>Optional. dateSeparator is used to place one of the characters available in EDateSeparator between date values.</p>
                            <p>This option is considered only if variant is short and onlyTime is not enabled.</p>
                            <pre>{`EDateSeparator {
    HYPHEN = "-",
    FULLSTOP = ".",
    COMMA = ",",
    SLASH = "/",
    SPACE = " "
}`}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td>timeSeparator</td>
                        <td>String</td>
                        <td>ETimeSeparator.COLON</td>
                        <td>
                            <p>Optional. timeSeparator is used to place one of the characters available in ETimeSeparator between time values.</p>
                            <p>This option is considered only if hasTime is enabled.</p>
                            <pre>{`ETimeSeparator {
    HYPHEN = "-",
    FULLSTOP = ".",
    COLON = ":"
}`}</pre>
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
const dateTimeJson1 = {
    "name": "when",
    "type": "dateTime"
};

// Output for 1 record:
[{ when: 'Sunday, May 12, 2019' }]

/** 
 * Sample 2: Generate SQL timestamp
 */
const dateTimeJson2 = {
    "name": "when",
    "type": "dateTime",
    "options": {
        "sqlTimestamp": true
    }
};

// Output for 1 record:
[{ when: '2019-06-04T12:50:15.090Z' }]

/** 
 * Sample 3: Generate unix Timestamp Milisecond (13 digits)
 */
const dateTimeJson3 = {
    "name": "when",
    "type": "dateTime",
    "options": {
        "unixTimestampMilisecond": true
    }
};

// Output for 1 record:
[{ when: '1560184527138' }]

/** 
 * Sample 4: Generate only Time
 */
const dateTimeJson4 = {
    "name": "when",
    "type": "dateTime",
    "options": {
        "onlyTime": true
    }
};

// Output for 1 record:
[{ when: '07:58:23 AM IST+05:30' }]`}
                </code>
            </pre>
            <h3>Utility method:</h3>
            <pre>
                <code className="language-javascript">
                    {`/** Default */
dateTime(); // Outputs: 'Sunday, May 12, 2019'

/** Generate SQL timestamp */
dateTime({
    sqlTimestamp: true
}); // Outputs: '2019-06-04T12:50:15.090Z'

/** Generate unix Timestamp Milisecond (13 digits) */
dateTime({
    unixTimestampMilisecond: true
}); // Outputs: '1560184527138'

/** Generate only Time */
dateTime({
    onlyTime: true
}); // Outputs: '07:58:23 AM IST+05:30'`}
                </code>
            </pre>
        </article>);
    }
};