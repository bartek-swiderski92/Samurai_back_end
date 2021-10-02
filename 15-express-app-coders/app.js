const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000/ Let\'s play a game!');
});

app.use(express.static('public'))

let goodAnswers = 0;
let callAFriendUsed = false;
let questionToTheCrowdUsed = false;
let halfOfHalfUsed = false;

const questions = [{
    question: 'Jaki jest najlepszy jezyk programowania na świecie wg mnie?',
    answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
    correctAnswer: 2
}, {
    question: 'Czy ten kurs jest fajny?',
    answers: ['Nie wiem', 'Oczywiście że tak', 'Nie', 'Jest najlepszy'],
    correctAnswer: 3
}, {
    question: 'Czy chcesz zjeść pizzę?',
    answers: ['Nawet Dwie!', 'Jestem na diecie', 'Nie, dziękuje', 'Wolę brokuły'],
    correctAnswer: 0
}, ]

app.get('/question', (req, res) => {
    if (goodAnswers === questions.length) {
        res.json({
            winner: true
        })
    } else {
        const nextQuestion = questions[goodAnswers];
        const {
            question,
            answers
        } = nextQuestion;

        res.json({
            question,
            answers
        })
    }
});