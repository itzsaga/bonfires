/**
 * Created by Seth on 7/13/2015.
 */
function mutation(arr) {
    var string2 = arr.splice(1).toString().toLowerCase();
    var string1 = arr.toString().toLowerCase();
    for(var i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2.charAt(i)) == -1) {
            return false;
        }
    }
    return true;
}