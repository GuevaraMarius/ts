// How to Use:
// Decorators are special functions that modify the behavior of classes, methods, or properties. 
// You apply a decorator by prefixing a class, method, or property with `@DecoratorName`.

// When to Use:
// Use decorators when you want to add metadata or modify the behavior of a class or method in a declarative way.
// Decorators are useful in scenarios like logging, access control, or dependency injection.

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} with arguments:`, args);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// A class with a method decorated by the `log` decorator.
class MyClass {
    @log
    public myMethod(a: number, b: number): number {
        return a + b;
    }
}

// Create an instance of MyClass and call the decorated method.
const instance = new MyClass();
const result = instance.myMethod(3, 4); 

console.log(`Result: ${result}`);
  
  