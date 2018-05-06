'use strict';
var is_exist_element = function(collection, element) {
    var t = false;
    for (var i = 0; i < collection.length; i++) {
        if (i % 2 == 0) {
            if (collection[i] == element)
                t = true;
        }
    }
    return t;
};
module.exports = is_exist_element;