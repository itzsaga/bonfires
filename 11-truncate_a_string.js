/**
 * Created by Seth on 7/7/2015.
 */
function truncate(str, num) {
    if (str.length > num){
        return str.slice(0, num - 3) + '...';
    } else {
        return str;
    }
}