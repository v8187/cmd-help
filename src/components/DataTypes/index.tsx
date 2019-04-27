import * as React from 'react';
import { Component } from 'react';
import { Location } from 'history';

import DTIndex from './DTIndex';
import Page404 from '../Page404';

import DTAadhaar from './DTAadhaar';
import DTAlphanumeric from './DTAlphanumeric';
import DTArray from './DTArray';
import DTAutoIncrement from './DTAutoIncrement';
import DTBoolean from './DTBoolean';
import DTCCPin from './DTCCPin';
import DTCity from './DTCity';
import DTColor from './DTColor';
import DTCompany from './DTCompany';
import DTCountry from './DTCountry';
import DTCreditCard from './DTCreditCard';
import DTCurrency from './DTCurrency';
import DTCVV from './DTCVV';
import DTDateTime from './DTDateTime';
import DTDuration from './DTDuration';
import DTEmail from './DTEmail';
import DTGender from './DTGender';
import DTJsonObject from './DTJsonObject';
import DTLatLong from './DTLatLong';
import DTPAN from './DTPAN';
import DTPassword from './DTPassword';
import DTPersonName from './DTPersonName';
import DTPhoneNo from './DTPhoneNo';
import DTPincode from './DTPincode';
import DTRandomNumber from './DTRandomNumber';
import DTRandomWords from './DTRandomWords';
import DTState from './DTState';
import DTStreetAddress from './DTStreetAddress';
import DTUID from './DTUID';
import DTUsername from './DTUsername';

export interface IDataTypeP {
    location: Location;
    onMount?: () => void;
};

export default class DataType extends Component<IDataTypeP> {

    render() {
        console.log('props', this.props);
        const pathname = this.props.location.pathname.replace(/\//, '');

        switch (pathname) {
            case 'aadhaar': return <DTAadhaar onMount={this.props.onMount} />;
            case 'alphanumeric': return <DTAlphanumeric onMount={this.props.onMount} />;
            case 'array': return <DTArray />;
            case 'autoIncrement': return <DTAutoIncrement onMount={this.props.onMount} />;
            case 'boolean': return <DTBoolean onMount={this.props.onMount} />;
            case 'ccPin': return <DTCCPin onMount={this.props.onMount} />;
            case 'city': return <DTCity onMount={this.props.onMount} />;
            case 'color': return <DTColor onMount={this.props.onMount} />;
            case 'company': return <DTCompany onMount={this.props.onMount} />;
            case 'country': return <DTCountry onMount={this.props.onMount} />;
            case 'creditCard': return <DTCreditCard onMount={this.props.onMount} />;
            case 'currency': return <DTCurrency onMount={this.props.onMount} />;
            case 'cvv': return <DTCVV onMount={this.props.onMount} />;
            case 'dateTime': return <DTDateTime onMount={this.props.onMount} />;
            case 'duration': return <DTDuration onMount={this.props.onMount} />;
            case 'email': return <DTEmail onMount={this.props.onMount} />;
            case 'gender': return <DTGender onMount={this.props.onMount} />;
            case 'jsonObject': return <DTJsonObject />;
            case 'latLong': return <DTLatLong onMount={this.props.onMount} />;
            case 'pan': return <DTPAN onMount={this.props.onMount} />;
            case 'password': return <DTPassword onMount={this.props.onMount} />;
            case 'personName': return <DTPersonName onMount={this.props.onMount} />;
            case 'phoneNo': return <DTPhoneNo onMount={this.props.onMount} />;
            case 'pincode': return <DTPincode onMount={this.props.onMount} />;
            case 'randomNumber': return <DTRandomNumber onMount={this.props.onMount} />;
            case 'randomWords': return <DTRandomWords onMount={this.props.onMount} />;
            case 'state': return <DTState onMount={this.props.onMount} />;
            case 'streetAddress': return <DTStreetAddress onMount={this.props.onMount} />;
            case 'uid': return <DTUID onMount={this.props.onMount} />;
            case 'username': return <DTUsername onMount={this.props.onMount} />;
            case 'dataTypes': return <DTIndex />;
            default: return <Page404 />;
        }
    }
};