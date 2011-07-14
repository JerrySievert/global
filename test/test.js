var vows      = require('vows'),
    assert    = require('assert'),
    globe     = require('../lib/global');

vows.describe('Global Works').addBatch({
    'locally': {
        topic: function () {
            globe.foo = 'bar';
            return globe.foo;
        },
        'foo is set correctly': function (topic) {
            assert.equal(globe.foo, 'bar');
        }
    },
    'remotely': {
        topic: function () {
            var other = require('./otherfile');
            other.set('bar', 'baz');
            return other;
        },
        'bar is set correctly': function (topic) {
            assert.equal(topic.get('bar'), globe.bar);
        }
    }
}).export(module);
