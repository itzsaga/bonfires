/**
 * Created by Seth on 8/3/2015.
 */
function unite(arr1, arr2, arr3) {
    var arrayLengths = [arr1.length, arr2.length, arr3.length];
    var repeated = [];
    var finalArr = [];

    for (i=0; i<arrayLengths[0]; i++) {
        repeated.push(arr1[i]);
        finalArr.push(arr1[i]);
    }

    for (i=0; i<arrayLengths[1]; i++) if (repeated.indexOf(arr2[i]) !== -1) repeated.push(arr2[i]); else finalArr.push(arr2[i]);
    for (i=0; i<arrayLengths[2]; i++) if (repeated.indexOf(arr3[i]) !== -1) repeated.push(arr3[i]); else finalArr.push(arr3[i]);
    return finalArr;
}