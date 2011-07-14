var vows      = require('vows'),
    assert    = require('assert'),
    global    = require('../global');

vows.describe('Global Works').addBatch({
    'locally': {
        topic: function () {
            global.foo = 'bar';
            return global.foo;
        },
        'foo is set correctly': function (topic) {
            assert.equal(global.foo, 'bar');
        }
    },
    'remotely': {
        topic: function () {
            var other = require('./otherfile');
            other.set('bar', 'baz');
            return other;
        },
        'bar is set correctly': function (topic) {
            assert.equal(topic.get('bar'), global.bar);
        }
    }
}).export(module);