'use strict';

function get_integer_interval_2(number_a, number_b) {
    //在这里写入代码
    var even_number = [];
    if (number_a < number_b) {
        for (var i = number_a, j = 0; i <= number_b; i++)
            if (i % 2 == 0) {
                even_number[j] = i;
                j++;
            }
    } else if (number_a > number_b) {
        for (var i = number_a, j = 0; i >= number_b; i--)
            if (i % 2 == 0) {
                even_number[j] = i;
                j++;
            }
    } else if (number_a == number_b) {
        if (number_a % 2 == 0)
            even_number[0] = number_a;
    }
    return even_number;
}


module.exports = get_integer_interval_2;