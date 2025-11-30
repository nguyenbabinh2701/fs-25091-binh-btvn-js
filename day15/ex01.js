const numbers = [2, 15, 30, 55, 60, 77, 90];

function findNearest(arr, x) {
    if (arr.length === 0) {
        return null;
    }
    let closest = arr[0];
    let minDiff = Math.abs(arr[0] - x);
    for (let i = 1; i < arr.length; i++) {
        let diff = Math.abs(arr[i] - x);
        if (diff < minDiff) {
            minDiff = diff;
            closest = arr[i];
        }
    }
    return closest;
}

console.log(findNearest(numbers, 50)); 
console.log(findNearest(numbers, 20));
