'use strict';
var map_to_four_multiples_add_one = function(collection) {
    var arry = [];
    for (var i = 0; i < collection.length; i++) {
        arry[i] = 4 * collection[i] + 1;
    }
    return arry;
};

module.exports = map_to_four_multiples_add_one;