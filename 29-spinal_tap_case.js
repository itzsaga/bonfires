/**
 * Created by Seth on 8/4/2015.
 */
function spinalCase(str) {
    return str.replace(/([a-z](?=[A-Z]))|\s|_/g, "$1-").toLowerCase();
}