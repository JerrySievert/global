(function () {
    var global = require('../lib/global');
    
    exports.set = function (key, value) {
        global.key = value;
    };
    
    exports.get = function (key) {
        return global[key];
    };
})();