'use strict';

function double_to_one(collection) {

    //在这里写入代码
    var array = [];
    var record = [];
    array = collection.join(",").split(",");
    for (var i = 0; i < array.length; i++) {
        record[i] = (Number)(array[i]);
    }
    for (var i = 0; i < record.length; i++) {
        for (var j = 0; j < record.length; j++) {
            if (i == j)
                j++;
            if (record[i] == record[j])
                record.splice(j, 1);
        }
    }
    return record;
}

module.exports = double_to_one;