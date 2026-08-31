// Assuming validation.js is included

function validateInput(input) {
    return !isNaN(input) && input.trim() !== ''; 
}

document.getElementById('addButton').addEventListener('click', function() {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    if (validateInput(input1) && validateInput(input2)) {
        const result = add(parseFloat(input1), parseFloat(input2));
        document.getElementById('result').innerText = 'Result: ' + result;
    } else {
        alert('Please enter valid numbers.');
    }
});