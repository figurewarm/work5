'use strict';

function one_add_next_multiply_three(collection) {
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++, j++) {
        if (i != collection.length - 1) {
            array[j] = (collection[i] + collection[i + 1]) * 3;
        }
    }
    return array;
}
module.exports = one_add_next_multiply_three;