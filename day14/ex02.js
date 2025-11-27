function isPalindrome(str) {
    str = str.replace(/\s/g, '');
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Race car"));
console.log(isPalindrome("hello"));
