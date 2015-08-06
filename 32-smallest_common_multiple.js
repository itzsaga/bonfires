/**
 * Created by Seth on 8/6/2015.
 */
function smallestCommons(arr) {
    var sortedArr = arr.sort();
    var lowEnd = sortedArr[0];
    var highEnd = sortedArr[1];
    var newArr = [];
    for (var h = lowEnd; h <= highEnd; h++) newArr.push(h);
    var x = newArr.length, w = Math.abs(newArr[0]);
    for (var i=1; i<x; i++) {
        var y = Math.abs(newArr[i]), z=w;
        while (w&&y) if (w > y) w %= y; else y %= w;
        w = Math.abs(z * newArr[i])/(w + y);
    }
    return w;
}