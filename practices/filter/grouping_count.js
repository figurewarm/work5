'use strict';

function grouping_count(collection) {
    //在这里写入代码
    var record = [];
    var count = [];
    for (var i = 0; i < collection.length; i++)
        record[i] = collection[i];
    for (var i = 0; i < collection.length; i++) {
        for (var j = 0; j < collection.length; j++) {
            if (i == j)
                j++;
            if (collection[i] == collection[j])
                collection.splice(j, 1);
        }
    }
    for (var i = 0; i < collection.length; i++) {
        count[collection[i]] = 0;
    }
    for (var i = 0; i < record.length; i++) {
        for (var j = 0; j < collection.length; j++) {
            if (record[i] == collection[j]) {
                count[collection[j]]++;
            }
        }
    }
    return count;
}
module.exports = grouping_count;