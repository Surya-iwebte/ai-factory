function validateInput(input) {
    return !isNaN(input) && input.trim() !== ''; 
}

// Example usage with input1 and input2
let input1 = document.getElementById('input1').value;
let input2 = document.getElementById('input2').value;
if (validateInput(input1) && validateInput(input2)) {
    // proceed with addition
} else {
    alert('Please enter valid numbers.');
}