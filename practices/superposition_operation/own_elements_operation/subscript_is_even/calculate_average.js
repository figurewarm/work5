'use strict';
var calculate_average = function(collection) {
    var sum = 0,
        j = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0) {
            sum += collection[i];
            j++;
        }
    }
    return sum / j;
};
module.exports = calculate_average;