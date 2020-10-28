
for (var n = 10; n <= 50; n++) {
    var notPrime = false;
    for (var i = 2; i <= n; i++) {
        if (n % i === 0 && i !== n) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
        console.log(n);
    }

   
}
