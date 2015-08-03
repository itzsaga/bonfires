/**
 * Created by Seth on 8/2/2015.
 */
function translate(str) {
    str = str.toLowerCase();
    var n = str.search(/[aeiuo]/);
    switch (n){
        case 0: str = str+"way"; break;
        case -1: str = str+"ay"; break;
        default:
            str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    return str;
}