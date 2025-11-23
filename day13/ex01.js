function printSquareNumber(n) {
    let result = [];
    let limit = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= limit; i++) {
        let square = i * i;
        if (square <= n) {
            result.push(square);
        }
    }
    console.log(result.join(' '));
}


printSquareNumber(10); 
printSquareNumber(20);
