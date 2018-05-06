'use strict';

function rank_by_two_large_one_small(collection) {
    //这里写代码。。。
    collection = collection.sort(function(a, b) { return a - b });
    for (var i = 0; i < collection.length; i += 3) {
        var temp1 = collection[i];
        collection[i] = collection[i + 1];
        collection[i + 1] = collection[i + 2];
        collection[i + 2] = temp1;
        if (i > collection.length / 3)
            break;
    }
    return collection;
}
module.exports = rank_by_two_large_one_small;