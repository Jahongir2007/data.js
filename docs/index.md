## Data.js framework

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
    entries: true, // 
    reverse: true,
    sort: true,
    fill: true,
    shift: true,
    map: Math.sqrt(),
    pop: true
});
```

#### Importing Data.js



### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
