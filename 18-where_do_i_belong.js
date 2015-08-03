/**
 * Created by Seth on 7/28/2015.
 */
function where(arr, num) {
    // Find my place in this sorted array.
    var sortedArray = arr.sort();
    for (var i in sortedArray) {
        console.log(i, arr[i], num);
        if (num === sortedArray[i]) return i * 1;
        if (num < sortedArray[i]) return i *1;
    }
}