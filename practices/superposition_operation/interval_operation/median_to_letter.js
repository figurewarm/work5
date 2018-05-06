'use strict';

function median_to_letter(collection) {

    //在这里写入代码
    var lowMiddle = Math.ceil((collection.length - 1) / 2);
    var highMiddle = Math.floor((collection.length - 1) / 2);
    return 'a' + String.fromCharCode((lowMiddle + highMiddle) / 2 + 96 - 5);
}

module.exports = median_to_letter;