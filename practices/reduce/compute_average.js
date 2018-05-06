'use strict';

function compute_average(collection) {
    var aveage = 0;
    for (var i = 0; i < collection.length; i++)
        aveage += collection[i];
    return aveage / (collection.length);
    //在这里写入代码
}

module.exports = compute_average;