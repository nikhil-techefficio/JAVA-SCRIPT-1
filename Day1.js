//Dynamic input in JS 
 // Concepts variabul declaration, conditional statements, and user input handling.
let country = prompt("Enter your country:");
let age = Number(prompt("Enter your age:"));

let text = "";

if (country === "USA") {
    if (age >= 16) {
        text = "You can drive!";
    } else {
        text = "You are too young to drive.";
    }
} else {
    text = "Driving rules depend on your country.";
}

console.log(text);

// Now types of functions in JS
// 1. Function Declaration
function greet() {
    console.log("Hello, World!");
}
greet(); // Output: Hello, World!

// 2. Function Expression
const greetExpression = function() {
    console.log("Hello from a function expression!");
};      
greetExpression(); // Output: Hello from a function expression!

// 3. Arrow Function                
const greetArrow = () => {
    console.log("Hello from an arrow function!");
}
greetArrow(); // Output: Hello from an arrow function!

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("Hello from an IIFE!");
})(); // Output: Hello from an IIFE!    

//5. Function With Parameters   
function greetWithName(name) {
    console.log("Hello, " + name + "!");
}
greetWithName("Alice"); // Output: Hello, Alice!

//6. Function With Return Value
function getGreeting(name) {
    return "Hello, " + name + "!";
}
console.log(getGreeting("Bob")); // Output: Hello, Bob!

    //7. Recursive Function
function factorial(n) {
    if (n === 0) {  
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120   

//8. Higher-Order Function
function higherOrderFunction(callback) {
    console.log("This is a higher-order function.");
    callback();
}       




// Example of a callback function
function callbackFunction() {
    console.log("This is a callback function.");
}
higherOrderFunction(callbackFunction);





//in case we call higherOrderFunction(callbackFunction);;
// higherOrderFunction(callbackFunction);
//                 │
//                 ▼
//         callback = callbackFunction
//                 │
//                 ▼
//            callback()
//                 │
//                 ▼
//              callbackFunction()

 // Output:
// This is a higher-order function.
// This is a callback function.


    //9. Generator Function
function* generatorFunction() {
    yield "Hello";
    yield "World";
}       

// Using the generator
const generator = generatorFunction();
console.log(generator.next().value); // Output: Hello
console.log(generator.next().value); // Output: World
console.log(generator.next().value); // Output: undefined (no more values to yield) 

    //10. Async Function
async function asyncFunction() {
    return "Hello from an async function!";
}   
asyncFunction().then(result => console.log(result)); // Output: Hello from an async function!   

 //11. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}       

const person1 = new Person("Alice", 30);
console.log(person1.name); // Output: Alice
console.log(person1.age);  // Output: 30        

//12. Method Function
const person2 = {
    name: "Bob",    
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};      

// Calling the method
person2.greet(); // Output: Hello, my name is Bob   


//13. Callback Function
function fetchData(callback) {
    setTimeout(() => {  
        const data = "Data fetched!";
        callback(data);
    }, 2000); // Simulating an asynchronous operation
}

function handleData(data) {
    console.log(data);
}       

fetchData(handleData); // Output (after 2 seconds): Data fetched!       

//14. Anonymous Function
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 3000); // Output (after 3 seconds): This is an anonymous function!   


//15. Named Function Expression
const namedFunctionExpression = function namedFunc() {
    console.log("This is a named function expression!");
};          

namedFunctionExpression(); // Output: This is a named function expression!  

//16. Generator Function with Parameters
function* generatorWithParams(start) {
    yield start;
    yield start + 1;
    yield start + 2;
}       

// Using the generator with parameters
const generatorParams = generatorWithParams(5);
console.log(generatorParams.next().value); // Output: 5
console.log(generatorParams.next().value); // Output: 6
console.log(generatorParams.next().value); // Output: 7     

//17. Async Function with Await
async function asyncFunctionWithAwait() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello from an async function with await!");
        }, 2000);
    });

    const result = await promise;
    console.log(result);
}       

// Calling the async function with await
asyncFunctionWithAwait(); // Output (after 2 seconds): Hello from an async function with await!         

//7. Anonymous Function
const anonymousFunction = function() {
    console.log("This is an anonymous function!");
};
anonymousFunction(); // Output: This is an anonymous function!      




//Key function types to remember:
   //Generator Function                 // Arrow Function
    // -- With parameters               // Similar stack
    // -- assined to a variable
    // -- used as a callback
   //  -- with return value


   // ==============================
// GENERATOR FUNCTIONS
// ==============================

// 1) Generator Function - with parameters
function* countUp(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const numbers = countUp(1, 3);

console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3


// 2) Generator Function - assigned to a variable
const colorsGenerator = function* () {
  yield "Red";
  yield "Green";
  yield "Blue";
};

const colors = colorsGenerator();

console.log(colors.next().value); // Red
console.log(colors.next().value); // Green


// 3) Generator Function - used as a callback
function processGenerator(generatorFn) {
  const gen = generatorFn();

  console.log(gen.next().value);
  console.log(gen.next().value);
}

processGenerator(function* () {
  yield "Step 1";
  yield "Step 2";
});


// 4) Generator Function - with return value
function* calculator(a, b) {
  yield a + b;
  return a * b;
}

const calc = calculator(2, 3);

console.log(calc.next()); 
// { value: 5, done: false }

console.log(calc.next()); 
// { value: 6, done: true }



// ==============================
// ARROW FUNCTIONS
// ==============================

// 1) Arrow Function - with parameters
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3)); // 8


// 2) Arrow Function - assigned to a variable
const greet = () => {
  console.log("Hello!");
};

greet();


// 3) Arrow Function - used as a callback
const nums = [1, 2, 3, 4];

const doubled = nums.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]


// 4) Arrow Function - with return value
const square = (n) => {
  return n * n;
};

console.log(square(4)); // 16


// Short return syntax
const multiply = (a, b) => a * b;

console.log(multiply(2, 5)); // 10