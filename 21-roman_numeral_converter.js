/**
 * Created by Seth on 7/30/2015.
 */
function convert(num) {
    var converted = '';
    dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    dec.forEach(function (x, i) {
        while (num >= x) {
            converted += roman[i];
            num -= x;
        }
    });
    return converted;
}