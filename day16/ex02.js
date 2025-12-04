function filterLongStrings(arr) {
    return arr.filter(item => typeof item === 'string' && item.length > 5);
}

console.log(filterLongStrings(["ddddddd ", "dddddddd", "dddddd", "dddddddddddddddddd"]));
console.log(filterLongStrings(["tiny", "small", "big"]));
console.log(filterLongStrings([]));
console.log(filterLongStrings(["hello", "world!", "JavaScript", "is", "fun"]));