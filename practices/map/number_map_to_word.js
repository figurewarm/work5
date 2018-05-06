'use strict';
var number_map_to_word = function(collection) {
    var even_number = [];
    var j = 0;
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] <= 26) {
            even_number[j] = String.fromCharCode(96 + collection[i]);
            j++;
        } else if (collection[i] > 26 && collection[i] <= 52) {
            even_number[j] = 'a' + String.fromCharCode(96 + collection[i] - 26);
            j++;
        }
    }
    return even_number;
};

module.exports = number_map_to_word;