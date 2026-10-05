// let a = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(a.length);
// console.log(a.push(6));
// console.log(a);
// console.log(a.pop());
// console.log(a);
// console.log(a.unshift(0));
// console.log(a);
// console.log(a.shift());
// console.log(a);
// console.log(a.indexOf(3));
// console.log(a.includes(3));
// console.log(a.slice(1, 4));
// console.log(a.splice(1, 2));
// console.log(a);
// console.log(a.concat([6, 7]));
// console.log(a.join("-"));
// console.log(a.reverse());
// console.log(a.sort());
// console.log(Array.isArray(a));
// console.log(Array.from("HELLO"));


let a= [2,3,4,5,6];
a.push(12);
a.unshift(15);
a.pop(6);
a.shift();
a.splice(2,0,22);
console.log(a.includes(22));
console.log(a.indexOf(5));
console.log(a.slice(2,3));
console.log(a.join(" ,"));
console.log(a);


let t= [[11,2[31,14,51[17,8[9,10]]]]];
console.log(t.length);
t = t.flat(Infinity);
console.log(t);
t.sort((a,b)=> a-b);
console.log(t);
t.copyWithin(4,0,2);
console.log(t);

t.fill(12,0,3);
console.log(t);


