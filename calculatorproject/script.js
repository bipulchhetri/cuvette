function clearDisplay() {
    document.getElementById('display').value = '';
}

function Value(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function deleteLastDigit() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
