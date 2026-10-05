//pure,impure,arrow,IIFE(anonymous),callback,high order,
function hi(){
    console.log("welcome to javascript funtions")
}
hi();

// Impure
let k=29;
function hello(){
    k=50;
    console.log("Hello,World");
}
hello();

// pure
function hello(){
    let k=29;
    k = 50;
    console.log("Hello,World!");
}
hello();

// arrow
let hello1 = () => {
    console.log("arrow function");
} 
hello1();

// IIFE(anonyms)
(() => {
    console.log("IIFE");
})()

// higher order
function high(a){
    a();
}

function low(){
    console.log("this is low function")
}
high(low);

// map
let numbers = [10, 20, 30, 40,50, 60];
let result = numbers.map((value, index, array) => {
    return value * 2;
});
console.log(result);


// filter
let mEx = numbers.filter((value,index,array) => {
    return value <40;
})
console.log(mEx);


// find
let t = [10, 20, 30, 40];
let res = t.find((value, index, array) => {
    return value > 25;
});
console.log(res);


// reduce
let a = [10, 20, 30, 40];
let gEx = a.reduce((value, index, array) => {
    return value + index;
}, 0);

console.log(gEx);