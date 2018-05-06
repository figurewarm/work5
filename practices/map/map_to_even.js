'use strict';

function map_to_even(collection) {
    var arry = [];
    for (var i = 0; i < collection.length; i++) {
        arry[i] = 2 * collection[i];
    }
    return arry;
}
module.exports = map_to_even;