/**
 * Configurable Options
 */
export const groupedDataTypes = [{
    label: 'Nested',
    dataTypes: [
        { label: 'Array', id: 'array' },
        { label: 'JSON Object', id: 'jsonObject', isParent: true }
    ]
}, {
    label: 'Personal',
    dataTypes: [
        { label: 'Aadhaar Number', id: 'aadhaar' },
        { label: 'Company', id: 'company' },
        { label: 'Email', id: 'email' },
        { label: 'Gender', id: 'gender' },
        { label: 'Password', id: 'password' },
        { label: 'Person Name', id: 'personName' },
        { label: 'Phone Number', id: 'phoneNo' },
        { label: 'Username', id: 'username' },
    ]
}, {
    label: 'Geographical',
    dataTypes: [
        { label: 'City', id: 'city' },
        { label: 'Country', id: 'country' },
        { label: 'Latitude/Logitude', id: 'latLong' },
        { label: 'Pincode', id: 'pincode' },
        { label: 'State / Region', id: 'state' },
        { label: 'Street Address', id: 'streetAddress' }
    ]
}, {
    label: 'Finance',
    dataTypes: [
        { label: 'Credit Card PIN', id: 'ccPin' },
        { label: 'Credit Card Number', id: 'creditCard' },
        { label: 'Currency', id: 'currency' },
        { label: 'CVV Code', id: 'cvv' },
        { label: 'Permanent Account Number', id: 'pan' }
    ]
}, {
    label: 'Random (Value)',
    dataTypes: [
        { label: 'Auto Increment Number', id: 'autoIncrement' },
        { label: 'Alphanumeric', id: 'alphanumeric' },
        { label: 'Boolean', id: 'boolean' },
        { label: 'Date/Time', id: 'dateTime' },
        { label: 'Duration', id: 'duration' },
        // { label: 'Number Range', id: 'numRange' },
        { label: 'Random Number', id: 'randomNumber' },
        { label: 'Random Words', id: 'randomWords' },
        { label: 'Unique ID', id: 'uid' }
    ]
}, {
    label: 'Random (Item)',
    dataTypes: [
        // { label: 'Animal Name', id: 'animal' },
        // { label: 'Bird Name', id: 'bird' },
        { label: 'Color Name', id: 'color' },
        // { label: 'Department Names', id: 'department' },
        // { label: 'Fish Name', id: 'fish' },
        // { label: 'Flower Name', id: 'flower' },
        // { label: 'Fruit Name', id: 'fruit' },
        // { label: 'Marital Status', id: 'marital' },
        // { label: 'Vegetable Name', id: 'vegetable' }
    ]
}];

export const unGroupedDataTypes: any = [];

groupedDataTypes.map(dTypes => {
    unGroupedDataTypes.push(...dTypes.dataTypes);
});

unGroupedDataTypes.sort((a, b) => {
    return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
});