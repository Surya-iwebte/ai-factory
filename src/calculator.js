function add(a, b) {
    return a + b;
} 

document.getElementById('addButton').addEventListener('click', function() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    const result = add(input1, input2);
    document.getElementById('result').innerText = 'Result: ' + result;
});