// arithmetic operator  + - * ** / % ++ --
let a = 10;
let b = 20;
console.log("Arithmetic operator")
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(++a);
console.log(a++);
console.log(a);

console.log("Assignment operator");
// Assignment operator = += -= *= /= %= **=
let c = 10;
c += 5;
console.log(c);
c -= 2;
console.log(c);
c *= 2;
console.log(c);
c /= 2;
console.log(c);
c %= 2;
console.log(c);
c **= 2;
console.log(c);

// Comparison operator == === != !== > < <= >= ?
console.log("Comparison operator");
let d = 10;
let e = 20;
console.log(d==e);
console.log(d===e);
console.log(d!=e);
console.log(d!==e);
console.log(d>e);
console.log(d<e);
console.log(d<=e);
console.log(d>=e);
console.log(d?e:"No Value");

// Logical operators && || !a
console.log("Logical operator");

let m = 10;
let n = 20;

console.log(m < n && n > 15);
console.log(m > n && n > 15);
console.log(m < n || n < 15);
console.log(m > n || n < 15);
console.log(!(m < n));
console.log(!(m > n));


