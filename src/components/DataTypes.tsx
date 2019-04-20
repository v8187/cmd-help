import * as React from 'react';
import { Component } from 'react';

import menuItems from '../configs/menuItems';

export class DataTypes extends Component {

    render() {
        return (
            <article className="data-types">
                <h1>Data types</h1>
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