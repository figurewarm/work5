'use strict';

function hybrid_operation_to_uneven(collection) {
    var sum = 0;
    for (var i = 0, j = 0; i < collection.length; i++) {
        if (collection[i] % 2 != 0) {
            sum += collection[i] * 3 + 5;
        }
    }
    return sum;
    //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;