/** 
 * Array as parent with 2 children
 */
const arrayJson = [{
    "I__D": "marks",
    "name": "marks",
    "type": "array",
    "options": { "count": 1 }
}, {
    "name": "sem1",
    "type": "randomNumber",
    "options": {
        "min": 200, "max": 300
    },
    "parentRef": "marks"
}, {
    "name": "sem2",
    "type": "randomNumber",
    "options": {
        "min": 400, "max": 500
    },
    "parentRef": "marks"
}];

// Output for 1 record:
[{
    "marks": [
        {
            "sem1": 267,
            "sem2": 406
        }
    ]
}]