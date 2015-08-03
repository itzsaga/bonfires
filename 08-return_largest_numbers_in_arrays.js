/**
 * Created by Seth on 7/7/2015.
 */
function largestOfFour(arr) {
    function maxArray(x){
        return Math.max.apply(null, x);
    }
    return arr.map(maxArray);
}