/**
 * Created by Seth on 6/27/2015.
 */
function palindrome(str) {
    str = str.replace(/\W\s*/g,'').toLowerCase();
    revStr = str.split('').reverse().join('');
    if(str == revStr) {
        return true;
    } else {
        return false;
    }
}