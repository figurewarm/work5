function collect_same_elements(collection_a, collection_b) {
    //在这里写入代码
    var array = [];
    var k = 0;
    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < collection_b.length; j++) {
            if (collection_a[i] == collection_b[j]) {
                array[k] = collection_a[i];
                k++;
            }
        }
    }
    return array;
}

module.exports = collect_same_elements;