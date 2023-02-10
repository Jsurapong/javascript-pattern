// The Singleton pattern is a creational design pattern that ensures a class has only one instance,
// while providing a global point of access to this instance.In functional programming, the Singleton pattern can be implemented using a closure.
// Here is an example of how the Singleton pattern can be implemented in a functional programming style in TypeScript:

// EX1 Functional Singleton
// In this example, the Singleton closure returns an object that provides access to the single instance of the createInstance function.
// The createInstance function creates an object with a name property and a getName method.
// The Singleton.getInstance method is used to get the single instance of the createInstance function.
// When called for the first time, it creates the instance and stores it in the instance variable. 
// Subsequent calls to Singleton.getInstance return the same instance, ensuring that there is only one instance of the createInstance function in the entire application.

const Singleton = (() => {
    let instance: any;

    const createInstance = () => {
        const object = {
            name: 'Singleton',
            getName: () => {
                return object.name;
            },
        };

        return object;
    };

    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }

            return instance;
        },
    };
})();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true


//EX2 class
// class Singleton {
//     private static instance: Singleton;
//     private constructor() {}
  
//     static getInstance(): Singleton {
//       if (!Singleton.instance) {
//         Singleton.instance = new Singleton();
//       }
  
//       return Singleton.instance;
//     }
  
//     name = 'Singleton';
//     getName() {
//       return this.name;
//     }
//   }
  
//   const singleton1 = Singleton.getInstance();
//   const singleton2 = Singleton.getInstance();
  
//   console.log(singleton1 === singleton2); // true