// How to Use:
// Define an `interface` to specify the structure of an object. 
// Use this interface to type-check objects, ensuring they contain the required properties with the correct types.

// When to Use:
// Use interfaces when you want to define the shape of an object or class and enforce that shape across your codebase.
// Interfaces help in maintaining consistency and catching errors during development.

interface User {
    name: string;
    age: number;
    isActive: boolean;
}

let user: User = {
    name: "Bob",
    age: 30,
    isActive: true,
};

console.log(user.name);  
console.log(user.age);   
console.log(user.isActive);
