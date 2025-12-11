const constant = [1, 2, 3, 10, 11, 12, 13, 15, 16];

function findLongestConsecutive(arr) {
    if (arr.length === 0) return [];

    let config = {
        current: [arr[0]],
        best: [arr[0]]
    };

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === config.current[config.current.length - 1] + 1) {
            config.current.push(arr[i]);
        } else {
            if (config.current.length > config.best.length) {
                config.best = [...config.current];
            }
            config.current = [arr[i]];
        }
    }

    if (config.current.length > config.best.length) {
        config.best = [...config.current];
    }

    return config.best;
}

console.log(findLongestConsecutive(constant));
