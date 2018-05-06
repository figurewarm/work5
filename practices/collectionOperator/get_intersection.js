'use strict';

function get_intersection(collection_a, collection_b) {
    //在这里写入代码
    var array = [];
    var k = 0;
    for (var i = 0; i < collection_b.length; i++)
        for (var j = 0; j < collection_a.length; j++)
            if (collection_b[i] == collection_a[j]) {
                array[k] = collection_b[i];
                k++;
            }
    return array;
}

module.exports = get_intersection;