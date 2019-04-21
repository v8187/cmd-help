import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

export default class DataTypes extends Component {

    render() {
        return (
            <article className="data-types">
                <h1>Data types</h1>
                <p>You can create Mock Data in following formats. Most of the formats are configurable. Click on Data type to see its' details</p>
                <h3>Nested:</h3>
                <ul>
                    <li><Link to="#">Array</Link></li>
                    <li><Link to="#">JSON Object</Link></li>
                </ul>
                <h3>Personal:</h3>
                <ul>
                    <li><Link to="#">Aadhaar Number (Indian biometric based identity number)</Link></li>
                    <li><Link to="#">Company Name (Organization Name)</Link></li>
                    <li><Link to="#">Email address</Link></li>
                    <li><Link to="#">Gender</Link></li>
                    <li><Link to="#">Password</Link></li>
                    <li><Link to="#">Person Name</Link></li>
                    <li><Link to="#">Phone/Mobile/Contact Number</Link></li>
                    <li><Link to="#">Username</Link></li>
                </ul>
                <h3>Geographical:</h3>
                <ul>
                    <li><Link to="#">City</Link></li>
                    <li><Link to="#">Country</Link></li>
                    <li><Link to="#">Latitude/Logitude</Link></li>
                    <li><Link to="#">Pincode (6 Digits)</Link></li>
                    <li><Link to="#">State / Region</Link></li>
                    <li><Link to="#">Street Address</Link></li>
                </ul>
                <h3>Finance:</h3>
                <ul>
                    <li><Link to="#">Credit Card PIN</Link></li>
                    <li><Link to="#">Credit Card Number</Link></li>
                    <li><Link to="#">Currency (Amount with various currency symbols)</Link></li>
                    <li><Link to="#">CVV Code</Link></li>
                    <li><Link to="#">Permanent Account Number (Indian PAN)</Link></li>
                </ul>
                <h3>Random (Value):</h3>
                <ul>
                    <li><Link to="#">Auto Increment Number</Link></li>
                    <li><Link to="#">Alphanumeric</Link></li>
                    <li><Link to="#">Boolean</Link></li>
                    <li><Link to="#">Date/Time</Link></li>
                    <li><Link to="#">Duration</Link></li>
                    <li><Link to="#">Number Range</Link></li>
                    <li><Link to="#">Random Number</Link></li>
                    <li><Link to="#">Random Words</Link></li>
                    <li><Link to="#">Unique Identity (UID)</Link></li>
                </ul>
                <h3>Random (Item):</h3>
                <ul>
                    <li><Link to="#">Animal Names (will be added in future versions</Link></li>
                    <li><Link to="#">Bird Names (will be added in future versions)</Link></li>
                    <li><Link to="#">Color Names</Link></li>
                    <li><Link to="#">Department Names (will be added in future versions)</Link></li>
                    <li><Link to="#">Fish Names (will be added in future versions)</Link></li>
                    <li><Link to="#">Flower Names (will be added in future versions)</Link></li>
                    <li><Link to="#">Fruit Names (will be added in future versions)</Link></li>
                    <li><Link to="#">Marital Status (will be added in future versions)</Link></li>
                    <li><Link to="#">Vegetable Names (will be added in future versions)</Link></li>
                </ul>
            </article>
        );
    }
};