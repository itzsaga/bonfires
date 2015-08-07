/**
 * Created by Seth on 8/7/2015.
 */
function find(arr, func) {
    for (i = 0; i < arr.length; i++) if (func(arr[i])) {
        var result = arr[i];
        break;
    }
    return result;
}