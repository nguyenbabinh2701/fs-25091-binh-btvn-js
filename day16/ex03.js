function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findMinMaxAverage(arr) {
    if (arr.length === 0) return { max: null, maxIndex: -1, min: null, minIndex: -1, primeAverage: null };

    let max = -Infinity, min = Infinity, maxIndex = -1, minIndex = -1;
    let primes = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            maxIndex = i;
        }
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }

    let primeAverage = primes.length > 0 ? Math.round((primes.reduce((a, b) => a + b, 0) / primes.length) * 100) / 100 : null;

    return { max, maxIndex, min, minIndex, primeAverage };
}

// Test cases
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6]));
// Expected: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }

console.log(findMinMaxAverage([5, 5, 2, 2, 1]));
// Expected: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }

console.log(findMinMaxAverage([-3, 7, -8, 11, 0]));
// Expected: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }

