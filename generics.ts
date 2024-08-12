// How to Use:
// Generics allow you to create reusable components that work with different data types. 
// You define a generic by using `<T>` or another placeholder, which can then be replaced with a specific type when the function or class is used.

// When to Use:
// Use generics when you want to write code that can handle multiple data types while maintaining type safety.
// Generics are useful for functions, classes, or interfaces that should work with any data type.

function identity<T>(arg: T): T {
    return arg;
}

let resultString = identity<string>("Hello");
let resultNumber = identity<number>(42);

console.log(resultString);  
console.log(resultNumber); 
