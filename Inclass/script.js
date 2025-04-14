// Set current date and year
document.getElementById('currentDate').textContent = new Date().toLocaleDateString();
document.getElementById('year').textContent = new Date().getFullYear();

// Image rollover effect - using Unsplash images
function changeImage() {
    document.getElementById('rolloverImage').src = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470';
    document.getElementById('rolloverImage').alt = 'Mountain landscape';
}

function restoreImage() {
    document.getElementById('rolloverImage').src = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';
    document.getElementById('rolloverImage').alt = 'Nature landscape';
}

// Color changing button
const colorButton = document.getElementById('colorButton');
const colors = ['#4a6fa5', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6'];
let currentColorIndex = 0;

colorButton.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    this.style.backgroundColor = colors[currentColorIndex];
});

// Text input alert
const textForm = document.getElementById('textForm');
const userInput = document.getElementById('userInput');

textForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (userInput.value.trim() === '') {
        alert('Please enter some text before submitting!');
    } else {
        alert(`You entered: ${userInput.value}`);
        userInput.value = '';
    }
});

// Number checker with loop
const numberInput = document.getElementById('numberInput');
const checkNumber = document.getElementById('checkNumber');
const numberResult = document.getElementById('numberResult');

checkNumber.addEventListener('click', function() {
    const number = parseInt(numberInput.value);
    
    if (isNaN(number)) {
        numberResult.textContent = 'Please enter a valid number';
        numberResult.style.color = 'red';
        return;
    }
    
    let result = '';
    if (number > 0) {
        result = `${number} is positive. `;
        for (let i = 1; i <= Math.min(number, 5); i++) {
            result += `${i}... `;
        }
    } else if (number < 0) {
        result = `${number} is negative. `;
        for (let i = -1; i >= Math.max(number, -5); i--) {
            result += `${i}... `;
        }
    } else {
        result = 'You entered zero.';
    }
    
    numberResult.textContent = result;
    numberResult.style.color = 'green';
    numberInput.value = '';
});