(function () {
    var globe = require('../lib/global');
    
    exports.set = function (key, value) {
        globe.key = value;
    };
    
    exports.get = function (key) {
        return globe[key];
    };
})();
