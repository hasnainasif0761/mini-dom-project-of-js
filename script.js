// Counter App Section Start
function counter(action) {
    var countEl = document.getElementById('count');
    var value = Number(countEl.innerText);

    if (action === 'inc') value++;
    else if (action === 'dec') value--;
    else value = 0;

    countEl.innerText = value;
}

// Show Password Section Start
function showPassword() {
    var input = document.getElementById('password');
    input.type = input.type === 'password' ? 'text' : 'password';
}

// Even Odd Checker Section Start
function checkEvenOdd() {
    var num = document.getElementById('evenOddInput').value;
    var result = document.getElementById('evenOddResult');

    if (num % 2 === 0) {
        result.innerText = 'Even Number';
        result.style.color = 'green';
    } else {
        result.innerText = 'Odd Number';
        result.style.color = 'red';
    }
}

// Prime Checker Section Start
function checkPrime() {
    var num = document.getElementById('primeInput').value;
    var result = document.getElementById('primeResult');

    if (num <= 1) {
        result.innerText = 'Not Prime';
        result.style.color = 'red';
        return;
    }

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            result.innerText = 'Not Prime';
            result.style.color = 'red';
            return;
        }
    }

    result.innerText = 'Prime Number';
    result.style.color = 'green';
}
