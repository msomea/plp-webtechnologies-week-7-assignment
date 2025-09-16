/* JavaScript Functions */

// Global variable
let globalMessage = "This is Global scope message.";

// Function with parameters & return value
function addNumbers(a, b) {
    // Local variable
    let result = a + b;
    return result; // Return value
}

// Function demonstrating scope and DOM manipulation
function showResult(num1, num2) {
    let sum = addNumbers(num1, num2); // Call reusable function
    document.getElementById("calc-result").textContent =
        `The sum of ${num1} and ${num2} is: ${sum}`;
}

// Show use of global variable
console.log(globalMessage); 

/* ===== Part 3: Combining CSS & JS ===== */

const animateBtn = document.getElementById("animateBtn");
const magicBox = document.getElementById("magicBox");

animateBtn.addEventListener("click", function () {
    // Toggle class to trigger CSS transition
    magicBox.classList.toggle("move");
});
