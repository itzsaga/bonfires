/**
 * Created by Seth on 8/7/2015.
 */
function add() {
    var check = false;
    for (i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== "number") return;
        check = true;
    }
    if (check === true && arguments.length > 1) return arguments[0] + arguments[1];
    var args = arguments[0];
    return function (x) {
        if (typeof x == "number") return args + x;
        return;
    };
}