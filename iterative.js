for (let i = 0; i < 5; i++) {
    console.log("hello");
}

let i=0;
while(i<5){
    console.log("hello", i);
    i++;
}

let a =[6, 7, 8, 9, 10];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }

for (let k of a) {
    console.log(k);
}

let r ={name: "John", age: 30, city: "New York"};
for (let key in r) {
    console.log(key);
    console.log(r[key]);
}