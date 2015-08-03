/**
 * Created by Seth on 6/25/2015.
 */
function factorialize(x) {
    result = 1;
    for(i = 1; i <= x; i++) {
        result = result * i;
    }
    return result;
}