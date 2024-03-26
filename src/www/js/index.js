document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('button');
    btn.addEventListener("click", checkPrime);
});

function checkPrime() {
    var number = document.getElementById('number').value;
    var resultElement = document.getElementById('result');
    
    if (isPrime(number)) {
        resultElement.innerHTML = number + ' é um número primo.';
    } else {
        resultElement.innerHTML = number + ' não é um número primo.';
    }
}

function isPrime(number) {
    number = parseInt(number);
    
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}