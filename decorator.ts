
//EX1
type Component = (data: string) => string;

const withBold: (component: Component) => Component = (component) => (data) =>
    `<b>${component(data)}</b>`;

const withItalic: (component: Component) => Component = (component) => (data) =>
    `<i>${component(data)}</i>`;

const withUnderline: (component: Component) => Component = (component) => (data) =>
    `<u>${component(data)}</u>`;

const plainText: Component = (data) => data;

const decoratedText = withBold(withItalic(withUnderline(plainText)));

console.log(decoratedText('Hello World!'));
// Output: <b><i><u>Hello World!</u></i></b>

// In this example, we define a Component type that represents a function that takes a string and returns a string.
// Then we define three decorator functions, withBold, withItalic, and withUnderline, each of which takes a component and returns a new component that adds HTML formatting to the output of the original component.
// Finally, we create a plain text component plainText and use the decorators to create a decorated text component decoratedText.


//EX2
type Component2 = (price: number) => number;

const withTax: (component: Component2) => Component2 = (component) => (price) =>
    price + price * 0.1;

const withDiscount: (component: Component2) => Component2 = (component) => (price) =>
    price - price * 0.05;

const originalPrice: Component2 = (price) => price;

const finalPrice = withTax(withDiscount(originalPrice));

console.log(finalPrice(100));
// Output: 94.5

// In this example, we define a Component type that represents a function that takes a price and returns a price.
// Then we define two decorator functions, withTax and withDiscount, each of which takes a component and returns a new component that adds or subtracts a certain amount from the output of the original component.
// Finally, we create an original price component originalPrice and use the decorators to create a final price component finalPrice.