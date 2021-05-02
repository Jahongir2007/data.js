![logo](https://user-images.githubusercontent.com/69193276/116789747-d4c8a600-aac9-11eb-9651-78510e6fad1c.png)
# Data.js
- Version: 1.0.0
- License: MIT
- Author: [Jahongir Sobirov](jahongir.sobirov.simplesite.com)
## Launch this framework:
1. Download the Data.js framework from github in .zip format.
2. Place the bin folder in the application folder you are creating.
3. Copy and paste `bin \ data.js` into the require function in your program code.
4. Start

## Software creation procedure
```
|___app.js
|___bin
      |__data.js
      |__test.js
```
#### In `app.js` file:
```js
const Data = require(".bin/data")
var app = new Data(["data.js","php",14],{
      get: 0, 
      getLenght: false,
      join: false,
      copy: 1,
      constructor: true,
      entries: false,
      reverse: false,
      sort: true,
      fill: false,
      shift: false,
      map: false,
      pop: false
});
```
### Terms of use
You must write a list of all methods in this framework in order. You must write a value of `false` to the method you do not want to use (otherwise `true` or some value).
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
    map: Math.sqrt, // delete array values
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

### Returns any value in the array
The `get:` method will help you to do this.
```js
var app = new Data([12,13,"Hello, world"],{
    get: 3
});
```

### Determine the number of values ​​in an array
This is done using the `getLength:` method.
```javascript
var app = new Data([12,13,"Hello, world"],{
    getLength: true
});
```

### Add any character or letter between values ​​in the array
For example, if you want to add a comma between array values, please:
```js
var app = new Data(["Hello world",12,16,18],{
   join: ", " 
});
```

### Copy any value in the array
It's very easy:
```js
var app = new Data(["Hello world",12,16,18],{
   copy: 0 
});
```

### Check that it is array
Try:
```js
var app = new Data(["Hello world",12,16,18],{
   constructor: true,
   /*
    or
   */
   entries: true
});
```

### Return array values ​​in reverse order
You reverse the array values ​​using the `reverse:` method.
```js
var app = new Data(["Hello world",12,16,18],{
    reverse: true
});
```
### Return array values ​​in English alphabetical order
To do this, you need the `sort:` method.
```js
var app = new Data(["D","B","A","C"],{
    sort: true
});
```
### Change all values ​​of the array to a single value
To do this, you need the `fill:` method.
```js
var app = new Data(["D","B","A","C"],{
    fill: "data.js"
});
```
### Delete the values ​​of the array
Try:
```js
var app = new Data(["D","B","A","C"],{
    shift: true
});
### End of
All rights reserved (c) 2021
