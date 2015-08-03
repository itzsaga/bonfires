/**
 * Created by Seth on 8/3/2015.
 */
function pair(str) {
    str = str.toUpperCase();
    var strArr = str.split('');
    var strArrLength = strArr.length;
    var tempArr = [];
    var result = [];

    for (i = 0; i < strArrLength; i++) {
        if (strArr[i] === 'C') {
            tempArr = [strArr[i], 'G'];
        } else if (strArr[i] === 'G') {
            tempArr = [strArr[i], 'C'];
        } else if (strArr[i] === 'A') {
            tempArr = [strArr[i], 'T'];
        } else if (strArr[i] === 'T') {
            tempArr = [strArr[i], 'A'];
        } else {

        }

        result.push(tempArr);
        tempArr = [];
    }
    return result;
}