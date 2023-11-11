// function sayHelloTo(firstName) {
//     console.log(`Hello, ${firstName}`);
// }

// sayHelloTo("Guadalupe");
// sayHelloTo("Jane");
// sayHelloTo("R2-D2");
// sayHelloTo(1);

function subtraction(x, y) {
    if (x > y) {
        return x - y
    } else {
        return y - x
    }
}

const difference = subtraction(4, 10)
// console.log(difference)
const message = `The difference between 4 and 10 is ${difference}`
console.log(message)