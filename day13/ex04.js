function printChristmasTree(n, character) {

    if (
        !Number.isInteger(n) || n <= 0 || n >= 100 ||
        typeof character !== 'string' || character.length !== 1
    ) {
        console.error("Invalid input: n must be a positive integer less than 100 and character must be a single character string.");
        return;
    }

    const width = 2 * n - 1;

    for (let level = 1; level <= n; level++) {
        const numChars = 2 * level - 1;
        const numSpaces = (width - numChars) / 2;
        const line = ' '.repeat(numSpaces) + character.repeat(numChars);
        console.log(line);
    }

    const baseSpaces = Math.floor((width - 1) / 2);
    const baseLine = ' '.repeat(baseSpaces) + character;
    console.log(baseLine);
}
printChristmasTree(5, "*");
printChristmasTree(4, "o");