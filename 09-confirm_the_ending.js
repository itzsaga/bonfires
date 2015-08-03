/**
 * Created by Seth on 7/7/2015.
 */
function end(str, target) {
    if (str.substr(str.length - target.length, target.length) === target){
        return true;
    }
    else {
        return false;
    }
}