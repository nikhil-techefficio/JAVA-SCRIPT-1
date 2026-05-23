//Dynamic input in JS 
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