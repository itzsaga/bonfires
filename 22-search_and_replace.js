/**
 * Created by Seth on 7/31/2015.
 */
function replace(str, before, after) {
    var firstLetter = before.charAt(0);
    if (firstLetter === firstLetter.toUpperCase()) {
        return str.replace(before, after.replace(/\S+/g, function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
        }));
    }
    else {
        return str.replace(before, after.toLowerCase());
    }
}