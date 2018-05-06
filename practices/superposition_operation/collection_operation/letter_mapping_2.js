'use strict';

function average_to_letter(collection) {
    var sum = 0;
    var a;
    for (var i = 0; i < collection.length; i++)
        sum += collection[i];
    var average = Math.ceil(sum / collection.length);
    a = String.fromCharCode(average + 96);
    return a;
    //在这里写入代码
}

module.exports = average_to_letter;