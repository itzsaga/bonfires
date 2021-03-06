/**
 * Created by Seth on 8/5/2015.
 */
function isPrime(num) {
    for (var i=2; i<num; i++) if (!(num % i)) return false;
    return true;
}
function sumPrimes(num) {
    var sum = 0;
    for (var i=2; i<=num; i++) if (isPrime(i)) sum += i;
    return sum;
}