/**
 * Created by Seth on 7/28/2015.
 */
function where(collection, source) {
    var arr = [];
    var keys = Object.keys(source);
    // What's in a name?
    for (var i=0; i < collection.length; i++) {
        var item = collection[i];
        for (var x=0; x < keys.length; x++) {
            var key = keys[x];
            if (item.hasOwnProperty(key)) {
                if (item[key] == source[key]) arr.push(item);
            }
        }
    }
    return arr;
}