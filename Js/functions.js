const functionName = (parameters) => {
    //code to be executed
}

const meet = (name) => {
    console.log("Hello, " + name + "!");
}

meet("Alice");
meet("Bob");
meet("Charlie");
meet("Dave");
meet("Eve");
meet("Frank");
meet("Grace");
meet("Hannah");


const multiply = (x, y) => {
    console.log(x * y);
}

multiply(2, 3);
multiply(4, 5);
multiply(6, 7);

function sayHi(name) {
    console.log("Hi, " + name + "!");
}

sayHi("Alice");
sayHi("Bob");
sayHi("vibewithcode")

const getUser = (name, age) => ({
    name: name,
    age: age,
    intro(){
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
})

console.log(getUser("Asumba", 25).intro());