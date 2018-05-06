'use strict';
var rank_desc = function(collection) {
    var arr = collection.sort(function(a, b) {
        return a - b;
    })
    return arr;
};

module.exports = rank_desc;