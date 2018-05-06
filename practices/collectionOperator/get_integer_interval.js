'use strict';

function get_integer_interval(number_a, number_b) {
    //在这里写入代码
    var even_number = [];
    if (number_a < number_b) {
        for (var i = number_a, j = 0; i <= number_b; i++, j++)
            even_number[j] = i;
    } else if (number_a > number_b) {
        for (var i = number_a, j = 0; i >= number_b; i--, j++)
            even_number[j] = i;
    } else if (number_a == number_b) {
        even_number[0] = number_a;
    }
    return even_number;
}

module.exports = get_integer_interval;