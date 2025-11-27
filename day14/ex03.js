function shortNumber(num) {
    if (num >= 1000000) {
        let val = (num / 1000000).toFixed(1);
        if (val.endsWith('.0')) {
            val = val.slice(0, -2);
        }
        return val + 'M';
    } else if (num >= 1000) {
        let val = (num / 1000).toFixed(1);
        if (val.endsWith('.0')) {
            val = val.slice(0, -2);
        }
        return val + 'K';
    } else {
        return num.toString();
    }
}

console.log(shortNumber(1500)); 
console.log(shortNumber(2000000));
console.log(shortNumber(800));
