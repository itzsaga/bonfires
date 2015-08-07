/**
 * Created by Seth on 8/7/2015.
 */
function every(collection, pre) {
    var truthy = [];
    for (i = 0; i < collection.length; i++) if (collection[i].hasOwnProperty(pre)) truthy.push(true); else truthy.push(false);
    var result = true;
    for (i = 0; i < truthy.length; i++) if (truthy[i] === false) result = false;
    return result;
}