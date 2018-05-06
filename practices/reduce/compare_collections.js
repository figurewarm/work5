'use strict';

function compare_collections(collection_a, collection_b) {
    //在这里写入代码
    var i = true;
    for (var a = 0; a < collection_a; a++)
        if (collection_a[a] != collection_b[a])
            i = false;
    return i;
}

module.exports = compare_collections;