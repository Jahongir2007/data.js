## Data.js guide

With this framework, you can easily work in arrays.

### Usage

This framework syntax very simple

```javascript
const Data = require("./data"); // importing data.js
var app = new Data(["data.js","javascript",14,25,9,16], // the main array that the framework takes
{
    get: 0, // returns the desired value from the array
    getLength: true, // returns length of array
    join: ", ", // places the desired value between array values
    copy: 1, // copies any value in the array
    constructor: true, // returns the data type
    entries: true, // returns the data type
    reverse: true, // displays the values ​​in reverse order.
    sort: true, // sorts the values in alphabetical order
    fill: "data.js", // replaces the array values ​​with the value in this method
    shift: true, // assigns the first value
    map: Math.sqrt, // returns the root of array values
    pop: true // returns the final value
});
```

### Importing Data.js
To use this framework, upload it to your new file
```javascript
const Data = require("./data") // importing
```

### First method in Data.js
Since the method name is not given in Data.js, you name it with the name of the imported variable
```javascript
var app = new Data([12,13,"Hello, world"],{
});
```
### Determine the number of values ​​in an array
This is done using the `getLength:` method.
```javascript
var app = new Data([12,13,"Hello, world"],{
    getLength: true
});
```
