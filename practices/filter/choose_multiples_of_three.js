'use strict';

function choose_multiples_of_three(collection) {

    //在这里写入代码
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++) {
        if (collection[i] % 3 == 0) {
            array[j] = collection[i];
            j++;
        }
    }
    return array;
}

module.exports = choose_multiples_of_three;