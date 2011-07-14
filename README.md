## Global -- Implementation of the Global Pattern for Node.js

* Works
* Small Footprint (37 bytes)

# Using

File1.js:

    var global = require('global');
    
    global.foo = 'bar';

File2.js:

    var global = require('global');
    
    console.log(global.foo); // should be 'bar'

# Installing

    npm install global

# Running Tests

    vows test/test.js
