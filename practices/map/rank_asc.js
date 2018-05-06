'use strict';
var rank_asc = function(collection) {
    var arr = collection.sort(function(a, b) {
        return b - a;
    })
    return arr;
};

module.exports = rank_asc;