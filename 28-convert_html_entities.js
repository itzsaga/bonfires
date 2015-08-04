/**
 * Created by Seth on 8/3/2015.
 */
function convert(str) {
    return str.replace(/[&<>"']/g, function($0) {
        return {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&apos;"}[$0];
    });
}