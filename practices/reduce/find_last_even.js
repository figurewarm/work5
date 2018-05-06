'use strict';

function find_last_even(collection) {
    //在这里写入代码
    var array = [];
    for (var i = 0, j = collection.length - 1; i < collection.length; j--, i++) {
        array[j] = collection[i];
    }
    for (var i = 0; i < collection.length; i++) {
        if (array[i] % 2 == 0) {
            return array[i];
            break;
        }
    }
}

module.exports = find_last_even;