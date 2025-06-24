// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// const person1 = new Person("John", 30);
// console.log(person1.greet()); 

// class Employee extends Person {
//     constructor(name, age, job) {
//         super(name, age);
//         this.job = job;
//     }

//     work() {
//         console.log(`Hello, I'm ${this.name} I working as a ${this.job} and I'm ${this.age}.`);
//     }
// }

// const employee1 = new Employee("Jane", 28, "Software Engineer");
// console.log(employee1.work());


// Encapsulation
// class BankAccount {
//     constructor(accountNumber, balance) {
//         this.accountNumber = accountNumber;
//         this._balance = balance; // Using underscore to indicate private property
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//             console.log(`Deposited: $${amount}. New balance: $${this._balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     }

//     withdraw(amount) {
//         if (amount > 0 && amount <= this._balance) {
//             this._balance -= amount;
//             console.log(`Withdrew: $${amount}. New balance: $${this._balance}`);
//         } else {
//             console.log("Invalid withdrawal amount.");
//         }
//     }

//     getBalance() {
//         return this._balance;
//     }
// }

// const account1 = new BankAccount("123456789", 1000);
// account1.deposit(500);
// account1.withdraw(200);


// class Car {
//     constructor(model, price) {
//         this.model = model;
//         this._price = price;
//     }

//     get price(){
//         return `This car is a ${this._price} ${this.model}.`;
//     }

//     set price(newPrice){
//         if(newPrice > 0){
//             this._price = newPrice;
//         }
//         else {
//             console.log("Price must be positive.");
//         }
//     }
// }

// const myCar = new Car("Toyota", 20000);
// console.log(myCar.price); // This car is a Toyota.

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name(){
        return `I'm ${this._name} and I'm ${this._age} years old.`;
    }

    set name(newName){
        if(typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
        }
        else {
            throw new Error("Name must be a string.");
        }
    }

    get age(){
        return this._age;
    }   

    set age(newAge){
        if(typeof newAge === 'number' && newAge > 0) {
            this._age = newAge;
        }
        else {
            throw new Error("Age must be a positive number.");
        }
    }


}

const person =new Person();

person.name = "Alice";
person.age = 25;

console.log(person.name); // I'm Alice and I'm 25 years old.
// console.log(person.age);

// polymorphism

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

const dog = new Dog("Dog", 3);
const cat = new Cat("Cat", 2);

dog.speak(); // Dog barks.
cat.speak(); // Cat meows.