import * as React from 'react';
import { Component } from 'react';
import LinkRsMock from './LinkRsMock';
import LinkRsUtils from './LinkRsUtils';

export default class Introduction extends Component {

    render() {
        return (
            <article className="introduction">
                <h1>Introduction</h1>
                <p>This tool can be used to generate mock data for your application(s) in multiple cross platform formats. Following are the key features of this tool:</p>
                <h2>Features:</h2>
                <ul className="lines">
                    <li>Mock data can be generated in JSON, HTML, CSV and XML formats.</li>
                    <li>There is no limit on number of records to be generated.</li>
                    <li>Complex data can be generated as required.</li>
                    <li>Data can be generated with nested Objects/Entities and Arrays/Lists.</li>
                    <li>Mock data output can be customized using given Data types' configurations.</li>
                    <li>Data Model once created can be saved in JSON format for later use.</li>
                    <li>Generating mock data with saved Data Model/Configurations can be done in couple of steps.</li>
                    <li>Generated data can be selected just by single click anywhere on the data screen.</li>
                    <li>All the Data Types have default configuration, so it's not mandatory to configure each data type.</li>
                    <li>I tried my best to make the tool configurable to cover the most of the data types and possible value variations for all data types. Let me know, if need to add more Data types and can make it more configurable.</li>
                    <li>Data is being created using <LinkRsMock /> OR <LinkRsUtils /> node module (written by me only :) ).</li>
                    <li>You can use <LinkRsMock /> OR <LinkRsUtils /> node module, if you would like to generate data dynamically within your code.</li>
                </ul>
            </article>
        );
    }
};