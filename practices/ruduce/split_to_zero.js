'use strict';

function spilt_to_zero(number, interval) {
    //在这里写入代码
    var array = [];
    var i = 0;
    array[i] = number;
    while (array[i] > 0) {
        i++;
        array[i] = (Number)((array[i - 1] - interval).toFixed(1));
    }
    return array;
}

module.exports = spilt_to_zero;