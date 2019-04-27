/** 
 * Sample 1: Without options 
 */
const alphaJson1 = [{
    "name": "vechicleNo",
    "type": "alphanumeric"
}];

// Output for 1 record:
[{ vechicleNo: '' }]

/** 
 * Sample 2: With options containing Lower, Upper and digits
 */
// Sample JSON:
const alphaJson2 = [{
    "name": "vechicleNo",
    "type": "alphanumeric",
    "options": { "format": "aaxxAAaA" }
}];

// Output for 1 record:
[{ vechicleNo: 'de89HUdE' }]

/** 
 * Sample 3: With options containing digits only
 */
const alphaJson3 = [{
    "name": "vechicleNo",
    "type": "alphanumeric",
    "options": { "format": "xxxxx" }
}];

// Output for 1 record:
[{ vechicleNo: '56702' }]