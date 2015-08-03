/**
 * Created by Seth on 6/27/2015.
 */
function findLongestWord(str) {
    var strArray = str.split(' ');
    var strLongest = 0;
    var longWord = null;
    for(var i = 0; i < strArray.length; i++){
        if (strLongest < strArray[i].length) {
            strLongest = strArray[i].length;
            longWord = strArray[i];
        }
    }
    return longWord.length;
}