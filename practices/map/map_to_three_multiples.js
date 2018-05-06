'use strict';
var map_to_three_multiples = function(collections) {
    var arry = [];
    for (var i = 0; i < collections.length; i++) {
        arry[i] = 3 * collections[i];
    }
    return arry;
};

module.exports = map_to_three_multiples;