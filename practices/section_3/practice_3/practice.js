function create_updated_collection(collection_a, object_b) {
    //在这里写入代码
    var record = [];
    var count = [];
    for (var i = 0; i < collection_a.length; i++)
        record[i] = collection_a[i];
    for (var i = 0; i < collection_a.length; i++) {
        for (var j = i + 1; j < collection_a.length; j++) {
            if (collection_a[i] === collection_a[j]) {
                collection_a.splice(j, 1);
                j--;
            }
        }
    }
    for (var i = 0; i < collection_a.length; i++) {
        var list = { key: '', count: 0 };
        list.key = collection_a[i];
        for (var j = 0; j < record.length; j++)
            if (collection_a[i] == record[j])
                list.count++;
        count[i] = list;
    }
    for (var i = 0; i < count.length; i++)
        for (var j = 0; j < object_b.value.length; j++) {
            if (count[i].key == object_b.value[j])
                count[i].count -= parseInt(count[i].count / 3);
        }
    return count;
}

module.exports = create_updated_collection;