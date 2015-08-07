/**
 * Created by Seth on 8/7/2015.
 */
function drop(arr, func){
    var result = [];
    for (i = arr.length - 1; i >= 0; i--) if (func(arr[i])) result.push(arr[i]);
    return result.sort();
}