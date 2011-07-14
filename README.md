## Global -- Implementation of the Global Pattern for Node.js

* Works
* Small Footprint (37 bytes)

# Using

File1.js:

    var globe = require('global');
    
    globe.foo = 'bar';

File2.js:

    var globe = require('global');
    
    console.log(globe.foo); // should be 'bar'

# Not Using

File1.js:

    global.foo = 'bar';

File2.js:

    console.log(global.foo); // should be 'bar'

# Installing

    npm install global

# Running Tests

    vows test/test.js
