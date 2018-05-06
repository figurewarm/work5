function collect_same_elements(collection_a, object_b) {
    //在这里写入代码
    var array = [];
    var k = 0;
    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < object_b.value.length; j++) {
            if (collection_a[i]['key'] == object_b.value[j]) {
                array[k] = object_b.value[j];
                k++;
            }
        }
    }
    return array;
}

module.exports = collect_same_elements;