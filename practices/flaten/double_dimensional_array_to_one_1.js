'use strict';

function double_to_one(collection) {

    //在这里写入代码
    var array = [];
    var record = [];
    array = collection.join(",").split(",");
    for (var i = 0; i < array.length; i++) {
        record[i] = (Number)(array[i]);
    }
    return record;
}

module.exports = double_to_one;