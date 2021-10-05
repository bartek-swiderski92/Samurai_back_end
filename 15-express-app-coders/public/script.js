const question = document.querySelector('#question')

const gameBoard = document.querySelector('#game-board')
const h2 = document.querySelector('h2')

function fillQuestionElements(data) {
    if (data.winner === true) {
        gameBoard.style.display = 'none';
        h2.innerText = 'Wygrana!!!';
        return
    }
    if (data.loser === true) {
        gameBoard.style.display = 'none';
        h2.innerText = 'Niestety, spróbuj ponownie!';
        return
    }
    question.innerText = data.question;

    for (const i in data.answers) {
        const answerEl = document.querySelector(`#answer${Number(i)+1}`);
        answerEl.innerText = data.answers[i];

    }
}

function showNextQuestion() {
    fetch('/question', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            fillQuestionElements(data);
        });
}

showNextQuestion();
const goodAnswersSpan = document.querySelector('#good-answers')

function handleAnswerFeedback(data) {
    goodAnswersSpan.innerText = data.goodAnswers;
    showNextQuestion();
}

function sendANswer(answerIndex) {
    fetch(`/answer/${answerIndex}`, {
            method: 'POST',
        })
        .then(response => response.json())
        .then(data => {
            handleAnswerFeedback(data)
        });
}

const buttons = document.querySelectorAll('button.answer-btn');
for (const button of buttons) {

    button.addEventListener('click', (event) => {

        const answerIndex = event.target.dataset.answer
        sendANswer(answerIndex)

    })
}

const tipDiv = document.querySelector('#tip')

function handleFriendsAnswer(data) {
    tipDiv.innerText = data.text
}

function callAFriend() {
    fetch('/help/friend', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            handleFriendsAnswer(data);
        });
}

document.querySelector('#callAFriend').addEventListener('click', callAFriend);



function handleHalfOfHalfAnswer(data) {
    if (typeof data.text === 'string') {
        tipDiv.innerText = data.text;
    } else {
        for (const button of buttons) {
            if (data.answersToRemove.indexOf(button.innerText) > -1) {
                button.innerText = '';
            }
        }
    }
}

function halfOfHalf() {
    fetch('/help/half', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            handleHalfOfHalfAnswer(data);
        });
}

document.querySelector('#halfOfHalf').addEventListener('click', halfOfHalf);



function handleCrowdAnswer(data) {
    if (typeof data.text === 'string') {
        tipDiv.innerText = data.text;
    } else {
        data.chart.forEach((percent, index) => {
            buttons[index].innerText = `${buttons[index].innerText}:${percent}%`;
        });
    }
}

function questionToTheCrowd() {
    fetch('/help/crowd', {
            method: 'GET'
        })
        .then(response => response.json())
        .then(data => {
            handleCrowdAnswer(data);
        });
}

document.querySelector('#questionToTheCrowd').addEventListener('click', questionToTheCrowd)