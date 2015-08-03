/**
 * Created by Seth on 7/19/2015.
 */
function bouncer(arr) {
    var filtered = arr.filter(function(x) {
        return !(x === "" || typeof x == "undefined" || x === null || x === false || x === 0);
    });
    return filtered;
}