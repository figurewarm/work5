'use strict';

function calculate_elements_sum(collection) {
    //在这里写入代码
    var totol = 0;
    for (var i = 0; i < collection.length; i++)
        totol += collection[i];
    return totol;
}

module.exports = calculate_elements_sum;