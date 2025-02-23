//Function for computing the sum
function addNumbers(a, b) {
    return a + b;
}

// Variables for user input
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Calculate the sum
const result = addNumbers(num1, num2);

// Display the sum in an alert
alert("The sum is: " + result);
