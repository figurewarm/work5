'use strict';
var single_element = function(collection) {
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++) {
        if (i % 2 != 0) {
            array[j] = collection[i];
            j++;
        }
    }
    var record = [];
    for (var i = 0; i < array.length; i++)
        record[i] = array[i];
    array = array.sort(function(a, b) { return a - b; });
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    var count = [];
    for (var i = 0; i < array.length; i++) {
        count[i] = 0;
        for (var j = 0; j < record.length; j++) {
            if (array[i] == record[j]) {
                count[i]++;
            }
        }
    }
    for (var i = 0; i < count.length; i++) {
        if (count[i] > 1)
            array.splice(i, 1);
    }
    return array;
};
module.exports = single_element;