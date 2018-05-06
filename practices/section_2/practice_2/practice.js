function count_same_elements(collection) {
    //在这里写入代码
    var record = [];
    var count = [];
    for (var i = 0; i < collection.length; i++) {
        if (collection[i] == "d-5") {
            collection[i] = 'd';
            collection[i + 1] = 'd';
            collection[i + 2] = 'd';
            collection[i + 3] = 'd';
            collection[i + 4] = 'd';
        }
    }
    for (var i = 0; i < collection.length; i++)
        record[i] = collection[i];
    for (var i = 0; i < collection.length; i++) {
        for (var j = i + 1; j < collection.length; j++) {
            if (collection[i] === collection[j]) {
                collection.splice(j, 1);
                j--;
            }
        }
    }
    for (var i = 0; i < collection.length; i++) {
        var list = {
            key: '',
            count: 0
        };
        list.key = collection[i];
        for (var j = 0; j < record.length; j++)
            if (collection[i] == record[j])
                list.count++;
        count[i] = list;
    }
    return count;
}

module.exports = count_same_elements;