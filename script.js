// DOM element caching for better performance
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const compoundTimesInput = document.getElementById('compoundTimes');
const yearsInput = document.getElementById('years');
const resultElement = document.getElementById('result');

/**
 * Calculates compound interest based on user inputs
 * Formula: A = P(1 + r/n)^(nt)
 * where:
 * A = final amount
 * P = principal amount
 * r = annual interest rate (decimal)
 * n = number of times interest compounded per year
 * t = time in years
 */
function calculateCompoundInterest() {
    // Get input values and convert to numbers
    const P = parseFloat(principalInput.value);
    const r = parseFloat(rateInput.value);
    const n = parseFloat(compoundTimesInput.value);
    const t = parseFloat(yearsInput.value);

    // Validate inputs
    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t) || P <= 0 || r <= 0 || n <= 0 || t <= 0) {
        // Display error message in red
        resultElement.textContent = "Please enter valid positive numbers for all fields.";
        resultElement.style.color = "red";
        return;
    }

    // Calculate compound interest
    const A = P * Math.pow(1 + (r / n), n * t);
    
    // Display result in green with currency formatting
    resultElement.textContent = `The Final amount: $${A.toFixed(2)}`;
    resultElement.style.color = "green";
}