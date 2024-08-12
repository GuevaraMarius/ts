// How to Use:
// Enums are a way to define a set of named constants. You create an enum using the `enum` keyword followed by the enum name and its values.

// When to Use:
// Use enums when you have a set of related constants and want to make your code more readable and maintainable.
// Enums are useful for representing fixed sets of values like directions, days of the week, etc.

enum Color {
    Red,
    Green,
    Blue
}

let favoriteColor: Color = Color.Green;
console.log(favoriteColor);
