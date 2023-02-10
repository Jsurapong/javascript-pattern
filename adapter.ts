// The Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to work together.
// In functional programming, the Adapter pattern can be implemented using Higher-Order Functions (HOFs).

// Here is an example of how the Adapter pattern can be implemented in a functional programming style in TypeScript:
//EX1
// const Target = (() => {
//     return {
//         request: () => {
//             return 'Target: The default behavior.';
//         },
//     };
// })();

// const Adaptee = (() => {
//     return {
//         specificRequest: () => {
//             return '.eetpadA eht fo roivaheb laiceps eslaf dna yzal eht revo depmuj xof nworb kciuq ehT';
//         },
//     };
// })();

// const Adapter = (() => {
//     const adaptee = Adaptee;

//     return {
//         request: () => {
//             const result = adaptee.specificRequest();
//             return `Adapter: (TRANSLATED) ${result.split('').reverse().join('')}`;
//         },
//     };
// })();

// console.log(Target.request()); // "Target: The default behavior."
// console.log(Adaptee.specificRequest()); // ".eetpadA eht fo roivaheb laiceps eslaf dna yzal eht revo depmuj xof nworb kciuq ehT"
// console.log(Adapter.request()); // "Adapter: (TRANSLATED) The behavior of the adapted class is the opposite of the expected one and the string is reversed."

// In this example, Target and Adaptee are two objects with incompatible interfaces.
// The Adapter object acts as a bridge between these two objects by providing a new interface that is compatible with the Target object.
// The Adapter object wraps the Adaptee object and implements the request method, which translates the result of the specificRequest method into a form that can be understood by the Target object.
// The Adapter object returns the translated result to the Target object, which is unaware of the existence of the Adaptee object.


//EX2
interface ITarget {
    request(): string;
}

const Adaptee = (): ITarget => ({
    request: () => 'Hello from Adaptee',
});

const Adapter = (adaptee: ITarget): ITarget => ({
    request: () => `Adapter: ${adaptee.request()}`,
});

const target = Adapter(Adaptee());
console.log(target.request());

  // Output:
  // Adapter: Hello from Adaptee
