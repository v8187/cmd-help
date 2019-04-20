import * as React from 'react';
import { Component } from 'react';

import menuItems from '../configs/menuItems';

export class Introduction extends Component {

    render() {
        return (
            <article className="introduction">
                <h1>Introduction</h1>
                <p>This tool can be used to generate mock data for your application(s) in multiple cross platform formats. Following are the key features of this tool:</p>
                <h2>Features:</h2>
                <ul>
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
                    <li>Data is being created using @v8187/rs-mock node module (written by me only :) ).</li>
                    <li>You can use @v8187/rs-mock node module, if you would like to generate data dynamically within your code.</li>
                </ul>
                <h2>Data types:</h2>
                <h3>Personal:</h3>
                <ul>
                    <li>Aadhaar Number (Indian biometric based identity number)</li>
                    <li>Company Name (Organization Name)</li>
                    <li>Email address</li>
                    <li>Gender</li>
                    <li>Password</li>
                    <li>Person Name</li>
                    <li>Phone/Mobile/Contact Number</li>
                    <li>Username</li>
                </ul>
                <h3>Geographical:</h3>
                <ul>
                    <li>City</li>
                    <li>Country</li>
                    <li>Latitude/Logitude</li>
                    <li>Pincode (6 Digits)</li>
                    <li>State / Region</li>
                    <li>Street Address</li>
                </ul>
                <h3>Finance:</h3>
                <ul>
                    <li>Credit Card PIN</li>
                    <li>Credit Card Number</li>
                    <li>Currency (Amount with various currency symbols)</li>
                    <li>CVV Code</li>
                    <li>Permanent Account Number (Indian PAN)</li>
                </ul>
                <h3>Random (Value):</h3>
                <ul>
                    <li>Auto Increment Number</li>
                    <li>Alphanumeric</li>
                    <li>Boolean</li>
                    <li>Date/Time</li>
                    <li>Duration</li>
                    <li>Number Range</li>
                    <li>Random Number</li>
                    <li>Random Words</li>
                    <li>Unique Identity (UID)</li>
                </ul>
                <h3>Random (Item):</h3>
                <ul>
                    <li>Animal Names (will be added in future versions</li>
                    <li>Bird Names (will be added in future versions)</li>
                    <li>Color Names</li>
                    <li>Department Names (will be added in future versions)</li>
                    <li>Fish Names (will be added in future versions)</li>
                    <li>Flower Names (will be added in future versions)</li>
                    <li>Fruit Names (will be added in future versions)</li>
                    <li>Marital Status (will be added in future versions)</li>
                    <li>Vegetable Names (will be added in future versions)</li>
                </ul>
            </article>
        );
    }
};