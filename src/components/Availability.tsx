import * as React from 'react';
import { Component } from 'react';
import LinkRsMock from './LinkRsMock';
import LinkWebApp from './LinkWebApp';

export interface IAvailabilityP {
    inApp: boolean;
    inLib: boolean;
};

export default class Availability extends Component<IAvailabilityP> {

    render() {
        return (
            <article className="available-in">
                <h2>Available In</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.props.inApp ? <span className="yes">&#10004;</span> : <span className="no"> &#10008; </span>}</td>
                            <th>Web App? [ <LinkWebApp /> ]</th>
                        </tr>
                        <tr>
                            <td>{this.props.inLib ? <span className="yes">&#10004;</span> : <span className="no"> &#10008;</span>}</td>
                            <th>Mock Utility Library? [ <LinkRsMock /> ]</th>
                        </tr>
                    </tbody>
                </table>
            </article>
        );
    }
};