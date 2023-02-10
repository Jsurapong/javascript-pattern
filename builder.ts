interface CarBuilder {
    setWheels: (wheels: number) => CarBuilder;
    setColor: (color: string) => CarBuilder;
    build: () => Car;
}

interface Car {
    wheels: number;
    color: string;
}

const carBuilder = (): CarBuilder => {
    let wheels = 0;
    let color = '';

    const setWheels = (newWheels: number): CarBuilder => {
        wheels = newWheels;
        return instance;
    };

    const setColor = (newColor: string): CarBuilder => {
        color = newColor;
        return instance;
    };

    const build = (): Car => ({
        wheels,
        color,
    });

    const instance = {
        setWheels,
        setColor,
        build,
    };

    return instance;
};

const myCar = carBuilder()
    .setWheels(4)
    .setColor('red')
    .build();

console.log(myCar); // { wheels: 4, color: 'red' }

// In this example, the carBuilder function returns an object that implements the CarBuilder interface.
// The setWheels and setColor functions allow you to set the desired values for the car, and the build function returns a new instance of the Car object with the specified properties.


interface SandwichBuilder {
    addBread: (bread: string) => SandwichBuilder;
    addMeat: (meat: string) => SandwichBuilder;
    addCheese: (cheese: string) => SandwichBuilder;
    addVeggies: (veggies: string[]) => SandwichBuilder;
    build: () => Sandwich;
}

interface Sandwich {
    bread: string;
    meat: string;
    cheese: string;
    veggies: string[];
}

const sandwichBuilder = (): SandwichBuilder => {
    let bread = '';
    let meat = '';
    let cheese = '';
    let veggies: string[] = [];

    const addBread = (newBread: string): SandwichBuilder => {
        bread = newBread;
        return instance;
    };

    const addMeat = (newMeat: string): SandwichBuilder => {
        meat = newMeat;
        return instance;
    };

    const addCheese = (newCheese: string): SandwichBuilder => {
        cheese = newCheese;
        return instance;
    };

    const addVeggies = (newVeggies: string[]): SandwichBuilder => {
        veggies = newVeggies;
        return instance;
    };

    const build = (): Sandwich => ({
        bread,
        meat,
        cheese,
        veggies,
    });

    const instance = {
        addBread,
        addMeat,
        addCheese,
        addVeggies,
        build,
    };

    return instance;
};

const mySandwich = sandwichBuilder()
    .addBread('whole wheat')
    .addMeat('turkey')
    .addCheese('cheddar')
    .addVeggies(['lettuce', 'tomatoes']).build();
console.log(mySandwich); // { bread: 'whole wheat', meat: 'turkey', cheese: 'cheddar', veggies: [ 'lettuce', 'tomatoes' ] }