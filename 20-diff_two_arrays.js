/**
 * Created by Seth on 7/30/2015.
 */
function diff(arr1, arr2) {
    var newArr = [];
    for (var x in arr1) {
        if (arr2.indexOf(arr1[x]) === -1) {
            newArr.push(arr1[x]);
        }
    }
    for (var y in arr2) {
        if (arr1.indexOf(arr2[y]) === -1) {
            newArr.push(arr2[y]);
        }
    }
    return newArr;
}