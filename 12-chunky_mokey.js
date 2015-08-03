/**
 * Created by Seth on 7/11/2015.
 */
function chunk(arr, size) {
    var chunks = [],
        i = 0,
        n = arr.length;
    while (i < n) {
        chunks.push(arr.slice(i, i += size));
    }
    return chunks;
}