'use strict';
var even_asc_odd_desc = function(collection) {
    var even_array = [];
    var odd_array = [];
    for (var i = 0, j = 0, k = 0; i < collection.length; i++) {
        if (collection[i] % 2 == 0) {
            even_array[j] = collection[i];
            j++
        } else {
            odd_array[k] = collection[i];
            k++;
        }
    }
    even_array = even_array.sort(function(a, b) { return a - b; });
    odd_array = odd_array.sort(function(a, b) { return b - a; });
    var array = [];
    var m = 0;
    for (var j = 0; j < even_array.length; j++) {
        array[j] = even_array[j];
        m++;
    }
    for (var i = 0; i < odd_array.length; i++) {
        array[m] = odd_array[i];
        m++;
    }
    return array;
};
module.exports = even_asc_odd_desc;