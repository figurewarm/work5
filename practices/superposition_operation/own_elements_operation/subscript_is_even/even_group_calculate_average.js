'use strict';
var even_group_calculate_average = function(collection) {
    var array = [];
    for (var i = 0, j = 0; i < collection.length; i++) {
        if ((i + 1) % 2 == 0) {
            array[j] = collection[i];
            j++;
        }
    }
    var record = [];
    var average = [0];
    for (var i = 0, j = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            record[j] = array[i];
            j++;
        }
    }
    var sum1 = 0;
    var sum2 = 0;
    var sum3 = 0;
    var t = true;
    record = record.sort(function(a, b) { return a - b; })
    for (var i = 0, j = 0, m = 0, k = 0; i < record.length; i++) {
        if (record[0] < 100)
            t = false;
        if (t == false) {
            if (record[i] < 10) {
                sum1 += record[i];
                j++;
                average[0] = sum1 / j;
            } else if (record[i] < 100 && record[i] > 9) {
                sum2 += record[i];
                m++;
                average[1] = sum2 / m;
            } else if (record[i] > 99) {
                sum3 += record[i];
                k++;
                if (i == record.length - 1) {
                    average[2] = sum3 / k;
                }
            }
        } else {
            if (record[i] > 99) {
                sum3 += record[i];
                k++;
                if (i == record.length - 1) {
                    average[0] = sum3 / k;
                }
            }
        }
    }
    // var sum1 = sum2 = sum3 = [];
    // for (var i = 0, j = 0, k = 0, m = 0; i < record.length; i++) {

    //     if (record[i] < 10) {
    //         sum1[j] = record[i];
    //         j++;
    //     } else if (record[i] >= 10 && record[i] < 100) {
    //         sum2[k] = record[i];
    //         k++;
    //     } else if (record >= 100) {
    //         sum3[m] = record[i];
    //         m++;
    //     }
    // }
    // for (var i = 0; i < 3; i++)

    //     average[j] = sum[i];
    return average;
};
module.exports = even_group_calculate_average;