'use strict';

function get_letter_interval_2(number_a, number_b) {
    //在这里写入代码
    var even_number = [];
    if (number_a < number_b) {
        for (var i = number_a, j = 0; i <= number_b; i++) {
            if (i <= 26) {
                even_number[j] = String.fromCharCode(96 + i);
                j++;
            } else if (i > 26 && i <= 52) {
                even_number[j] = 'a' + String.fromCharCode(96 + i - 26);
                j++;
            } else {
                even_number[j] = 'b' + String.fromCharCode(96 + i - 52);
                j++;
            }
        }
    } else if (number_a > number_b) {
        for (var i = number_a, j = 0; i >= number_b; i--) {
            if (i <= 26) {
                even_number[j] = String.fromCharCode(96 + i);
                j++;
            } else if (i > 26 && i <= 52) {
                even_number[j] = 'a' + String.fromCharCode(96 + i - 26);
                j++;
            } else if (i >= 53) {
                even_number[j] = 'b' + String.fromCharCode(96 + i - 52);
                j++;
            }
        }
    } else if (number_a == number_b) {
        for (var i = number_a, j = 0; i >= number_b; i--) {
            if (i <= 26) {
                even_number[j] = String.fromCharCode(96 + i);
                j++;
            } else if (i > 26 && i <= 52) {
                even_number[j] = 'a' + String.fromCharCode(96 + i - 26);
                j++;
            } else if (i >= 53) {
                even_number[j] = 'b' + String.fromCharCode(96 + i - 52);
                j++;
            }
        }
    }
    return even_number;
}

module.exports = get_letter_interval_2;