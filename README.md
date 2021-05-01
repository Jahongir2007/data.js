# Data.js
- [Guide](jahongir2007.github.io/data.js)
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
### End of
All rights reserved (c) 2021
