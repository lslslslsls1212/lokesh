'use strict';

let secret = Math.trunc(Math.random() * 20) + 1


console.log(secret);
document.querySelector('.check').addEventListener('click', function () {
    if (document.querySelector('.guess').value == secret) {
        document.querySelector('.message').textContent = 'You won'
        document.querySelector('.number').textContent = secret;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.a').textContent = 'You won'
        if (Number(document.querySelector('.score').textContent) > Number(document.querySelector('.highscore').textContent)) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent

        }
    } else if (document.querySelector('.guess').value !== secret) {

        if (Number(document.querySelector('.score').textContent) > 0)
            document.querySelector('.score').textContent = Number(document.querySelector('.score').textContent) - 1
        if (document.querySelector('.guess').value > secret) { document.querySelector('.message').textContent = 'too high' }
        if (document.querySelector('.guess').value < secret) { document.querySelector('.message').textContent = 'too Low' }

    }
})


document.querySelector('.again').addEventListener('click', function () {
    secret = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.score').textContent = 0
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
})

