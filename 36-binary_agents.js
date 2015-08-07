/**
 * Created by Seth on 8/7/2015.
 */
function binaryAgent(str) {
    str = str.split(' ');
    for (i = 0; i < str.length; i++) {
        str[i] = String.fromCharCode(parseInt(str[i], 2));
        str[i].replace('/\s+/g ', '');
    }
    str = str.join('').toString();
    return str;
}