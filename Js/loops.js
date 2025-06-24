// for(initializing; condition; iteration){
//     // code execution
// }

// for(let i = 0; i < 5; i++){
//     console.log(i);
// }

// let cars = ["Range Rover", "BMW", "Mercedes", "Audi", "Toyota"];

// for(let i = 0; i < cars.length; i++){
//     console.log(cars[i]);
// }

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         break
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 10; i++){
//     if(i === 5){
//         continue
//     }
//     console.log(i);
// }

// do while loop

// do {
//     statements
// } while (condition);

// let i = 0;

// do {
//     console.log("Count is: " + i);
//     i++;
// } while (i < 5);


// let number = 1;
// let sum = 0;

// do {
//     sum += number;
//     number++;
// } while (number <= 5);

// console.log("Sum of first 5 numbers is: " + sum);


// while loop

// while (condition) {
//     // code execution
// }

// let i = 0;
// while (i < 5) {
//     console.log("Count is: " + i);
//     i++;
// }

// let n = 0;
// let x = 0;

// while(n < 4){
//     n++;
//     x += n;
//     console.log(n, x);
// }


// for in 

// const person = {
//     name: "Kelvin",
//     age: 40,
//     role: "Manager"
// };

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// const arr = [10, 20, 30, 40, 50];

// for (let index in arr){
//     console.log(index);
//     console.log(arr[index]);
// }

// for of
const arr1 = [10, 20, 30, 40, 50];

for( let value of arr1){
    console.log(value);
}