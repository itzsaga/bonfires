/**
 * Created by Seth on 7/1/2015.
 */
function titleCase(str) {
    return str.toLowerCase().replace(/^(.)|\s(.)/g,
        function($1) { return $1.toUpperCase(); });
}