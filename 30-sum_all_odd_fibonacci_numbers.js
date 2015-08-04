/**
 * Created by Seth on 8/4/2015.
 */
function sumFibs(num) {
    var fib0 = 0;
    var fib1 = 1;
    var fib = 1;
    var sum = fib0;
    while (fib <= num) {
        if (fib % 2) sum += fib1;
        fib = fib0 + fib1;
        fib1 += fib0;
        fib0 = fib1 - fib0;
    }
    return sum;
}