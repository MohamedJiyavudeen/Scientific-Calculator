// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteChar() {
    let currentValue = document.getElementById('display').value;
    document.getElementById('display').value = currentValue.slice(0, -1);
}

// Function to append characters to the display
function appendCharacter(character) {
    document.getElementById('display').value += character;
}

// Function to calculate the result
function calculateResult() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
