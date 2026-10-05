const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(n =>
    n % 2 === 0
);
console.log(result);

const word = "hello";
const res =
    word.split("").reverse().join("");
console.log(res);

// const employees = [{id:101},{id:102}];
// const employee = employees.find(
//     emp =>emp.id ===102
// );
// console.log(employee);

const employees = [
    { name: "Arun", salary: 30000 },
    { name: "Priya", salary: 40000 },
    { name: "Karthik", salary: 35000 },
    { name: "Divya", salary: 45000 }
];

const total = employees.reduce(
    (sum, emp) => sum + emp.salary,
    0
);

console.log("Total Salary:", total);


