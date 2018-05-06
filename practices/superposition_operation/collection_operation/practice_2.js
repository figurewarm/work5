'use strict';

function hybrid_operation_to_uneven(collection) {
    //在这里写入代码
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++) {
        if (collection[i] % 2 != 0) {
            array[j] = collection[i] * 3 + 2;
            j++;
        }
    }
    return array;
}

module.exports = hybrid_operation_to_uneven;