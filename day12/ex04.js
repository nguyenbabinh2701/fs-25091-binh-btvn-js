function isTriangle(a, b, c) {

  if (a <= 0 || b <= 0 || c <= 0) return false;

  if (a + b > c && a + c > b && b + c > a) {
    return true;
  }

  return false;
}
console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(3, 4, 7)); // false

let a = Number(window.prompt("Nhập cạnh a:"));
let b = Number(window.prompt("Nhập cạnh b:"));
let c = Number(window.prompt("Nhập cạnh c:"));

console.log(isTriangle(a, b, c));
