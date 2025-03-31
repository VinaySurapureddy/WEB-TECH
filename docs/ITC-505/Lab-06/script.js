document.addEventListener('DOMContentLoaded', function() {
    const numberInput = document.getElementById('numberInput');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const resultsDiv = document.getElementById('results');
    
    // Event listeners
    analyzeBtn.addEventListener('click', analyzeNumber);
    numberInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            analyzeNumber();
        }
    });
    
    function analyzeNumber() {
        const num = parseFloat(numberInput.value);
        const roundedNum = Math.round(num);
        
        if (isNaN(num)) {
            resultsDiv.innerHTML = '<p>Please enter a valid number.</p>';
            return;
        }
        
        let html = `
            <h3>Analysis for ${roundedNum}</h3>
            <ul>
                <li><strong>Even/Odd:</strong> ${isEven(roundedNum) ? 'Even' : 'Odd'}</li>
                <li><strong>Prime Number:</strong> ${isPrime(roundedNum) ? 'Yes' : 'No'}</li>
                <li><strong>Perfect Square:</strong> ${isPerfectSquare(roundedNum) ? 'Yes' : 'No'}</li>
                <li><strong>Fibonacci Number:</strong> ${isFibonacci(roundedNum) ? 'Yes' : 'No'}</li>
                <li><strong>Factorial:</strong> ${roundedNum >= 0 ? calculateFactorial(roundedNum) : 'N/A (negative)'}</li>
            </ul>
        `;
        
        resultsDiv.innerHTML = html;
    }
    
    // Helper functions
    function isEven(num) {
        return num % 2 === 0;
    }
    
    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    function isPerfectSquare(num) {
        if (num < 0) return false;
        const sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
    }
    
    function isFibonacci(num) {
        if (num < 0) return false;
        return isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4);
    }
    
    function calculateFactorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
});