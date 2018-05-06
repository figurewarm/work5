'use strict';

function even_to_letter(collection) {
    var array = [];
    for (var i = 0, k = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0) {
            array[k] = String.fromCharCode(96 + collection[i]);
            k++;
        }
    }
    return array;
    //在这里写入代码
}

module.exports = even_to_letter;