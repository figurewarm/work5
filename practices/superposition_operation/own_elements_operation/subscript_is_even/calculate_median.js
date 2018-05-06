'use strict';
var calculate_median = function(collection) {
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0) {
            array[j] = collection[i];
            j++
        }
    }
    var highMiddle = Math.ceil((array.length - 1) / 2);
    var lowMiddle = Math.floor((array.length - 1) / 2);
    return (array[highMiddle] + array[lowMiddle]) / 2;
};
module.exports = calculate_median;