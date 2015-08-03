/**
 * Created by Seth on 7/30/2015.
 */
function sumAll(arr) {
    var max = Math.max.apply(null, arr);
    var min = Math.min.apply(null, arr);
    var num = 0;
    for (var i = min; i <= max; i++) {
        num += i;
    }
    return num;
}