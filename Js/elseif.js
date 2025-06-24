// if(condition){
//     statement
// }
// else if(condition2){
//     statement2
// }
// else if(condition3){
//     statement3
// }
// else{
//     statement4
// }

let score = 80;

if (score >= 90) {
    console.log("Grade: A");
}
else if (score >= 80) {
    console.log("Grade: B");
} 
else if (score >= 70) {
    console.log("Grade: C");
} 
else if (score >= 60) {
    console.log("Grade: D");
} 
else {
    console.log("Grade: F");
}


// nested if-else
let number = 14;

if (number > 0) {
    if (number % 2 === 0) {
        console.log("Positive even number");
    } else {
        console.log("Positive odd number");
    }
}
else{
    console.log("negative number")
}

let isLoggedIn = true;
let isAdmin = true;

// if (isLoggedIn) {
//     if (isAdmin) {
//         console.log("Welcome Admin!");
//     } else {
//         console.log("Welcome User!");
//     }
// }
// else {
//     console.log("Please log in to continue.");
// }

// ternary operator
console.log(isLoggedIn ? (isAdmin ? "Welcome Admin!" : "Welcome User!") : "Please log in to continue.");

let isRaining = true;
let mess = isRaining ? "Take an umbrella." : "Enjoy the sunshine!";
console.log(mess);