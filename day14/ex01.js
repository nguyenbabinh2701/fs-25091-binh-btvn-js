function countWords(str) {
    str = str.trim();
    str = str.replace(/\s+/g, ' ');
    return str.split(' ').length;
}

// Example usage
console.log(countWords("   Hôm  nay   trời đẹp quá   "));
