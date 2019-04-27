const alphanumeric = (param?: any): any => { };

/** Default */
alphanumeric(); // Outputs: ''

/** Format with Lower, Upper and digits */
alphanumeric({ format: 'aaxxAAaA' }); // Outputs: de89HUdE

/** Format with 5 digits */
alphanumeric({ format: 'xxxxx' }); // Outputs: 56702`