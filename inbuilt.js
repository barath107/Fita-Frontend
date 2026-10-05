let s = "Hello javascript";
console.log(s.replace("Hello","Hi"));
console.log(s.split(""));
console.log(s.split(""));
console.log(s.length);


console.log(s.charAt(2));
console.log(s.indexOf("l",3));
console.log(s.search(/L/i));
console.log(s.match("l"));
console.log(Array.from(s.matchAll("l")));

console.log(s.includes("llo"));
console.log(s.startsWith("H"));
console.log(s.endsWith("t"));

// pad slice trim
let u = "Hi";
console.log(u.padStart(4,"Madadadefjne"));
console.log(s.slice(5,8));
console.log(s.slice(-4));
console.log(s.substring(3,8));

let r ="    Hello,World!    ";
console.log(r.trim.length);

console.log(s.toUpperCase());
console.log(s.toLowerCase());

