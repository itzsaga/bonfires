/**
 * Created by Seth on 8/7/2015.
 */
function steamroller(arr){
    return arr.reduce(function (flat, toFlatten){
        return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
    }, []);
}