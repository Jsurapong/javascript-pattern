interface Creator {
    factoryMethod(): Product;
}

interface Product {
    operation(): string;
}

const ConcreteProductA: Product = {
    operation: () => "Hello from ConcreteProductA",
};

const ConcreteProductB: Product = {
    operation: () => "Hello from ConcreteProductB",
};

const ConcreteCreatorA: Creator = {
    factoryMethod: () => ConcreteProductA,
};

const ConcreteCreatorB: Creator = {
    factoryMethod: () => ConcreteProductB,
};

const clientCode = (creator: Creator) => {
    const product = creator.factoryMethod();
    console.log(product.operation());
};

clientCode(ConcreteCreatorA);
clientCode(ConcreteCreatorB);

// Output:
// Hello from ConcreteProductA
// Hello from ConcreteProductB
//   In this example, the Creator interface represents the factory method interface, and the Product interface represents the product interface.
//   The ConcreteProductA and ConcreteProductB objects are the concrete products that implement the Product interface.
//   The ConcreteCreatorA and ConcreteCreatorB objects are the concrete factories that implement the Creator interface and provide the factory method that creates the appropriate product.

//   The clientCode function is the client code that uses the factory method.
//   It takes an instance of the Creator interface as an argument and calls its factoryMethod method to create the product.
//   The client code can work with the Creator interface and the returned product without needing to be aware of the underlying concrete products, as long as the Creator interface provides the required factory method.

//   This is the essence of the Factory Method pattern: it provides a way to delegate the object creation to subclasses, and it provides a level of abstraction between the client code and the concrete products.
//   The factory method allows the client code to be decoupled from the concrete classes, making it easier to change the product family without affecting the client code.

type Transport = {
    drive(): void;
    operation(): void;
};

const Car: Transport = {
    drive: () => console.log("Driving a car."),
    operation: () => {
        console.log("Step1");
        console.log("Step2");
        console.log("Step1");
        console.log("Checking a car.");
    },
};

const Shipt: Transport = {
    drive: () => console.log("Driving a ship."),
    operation: () => {
        console.log("Step1");
        console.log("Checking a ship.");
    },
};

const Airplane: Transport = {
    drive: () => console.log("Driving a airplane."),
    operation: () => {
        console.log("Step1");
        console.log("Step2");
        console.log("Checking a airplane.");
    },
};

const shipping = (transport: Transport) => {
    transport.operation();
    transport.drive();
};


