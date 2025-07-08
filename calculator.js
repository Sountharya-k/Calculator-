function getvalue(value) {
    document.getElementById('input').value += value;
}

function clearDisplay() {
    document.getElementById('input').value = '';
}

function Result() {
    try {
        document.getElementById('input').value = eval(document.getElementById('input').value);
    } catch (error) {
        alert('Invalid Expression');
    }
}
