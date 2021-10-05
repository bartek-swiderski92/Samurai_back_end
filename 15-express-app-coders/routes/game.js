function gameRoutes(app) {
    let goodAnswers = 0;
    let isGameOver = false;
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
        } else if (isGameOver) {
            res.json({
                loser: true,
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

    app.post('/answer/:index', (req, res) => {

        if (isGameOver) {
            res.json({
                loser: true,
            })
        }
        const {
            index
        } = req.params;

        const question = questions[goodAnswers];
        const isGoodAnswer = question.correctAnswer === Number(index)

        if (isGoodAnswer) {
            goodAnswers++
        } else {
            isGameOver = true;
        }

        res.json({
            correct: isGoodAnswer,
            goodAnswers,
        })

    })

    app.get('/help/friend', (req, res) => {
        if (callAFriendUsed) {
            return res.json({
                text: 'To koło ratunkowe było już wykorzystane.'
            });
        }
        callAFriendUsed = true;

        const doesFriendKnowAnswer = Math.random() < 0.5;
        const question = questions[goodAnswers];
        res.json({
            text: doesFriendKnowAnswer ? `Hmm, wydaje mi się, że odpowiedź to ${question.answers[question.correctAnswer]}` : `Hmm, no nie wiem...`
        });
    });

    app.get('/help/half', (req, res) => {
        if (halfOfHalfUsed) {
            return res.json({
                text: 'To koło ratunkowe było już wykorzystane.'
            });
        }
        halfOfHalfUsed = true;
        const question = questions[goodAnswers];
        const answersCopy = question.answers.filter((s, index) => (index !== question.correctAnswer));
        answersCopy.splice(~~(Math.random() * answersCopy.length), 1);

        const doesFriendKnowAnswer = Math.random() < 0.5;
        res.json({
            answersToRemove: answersCopy
        })
    })


    app.get('/help/crowd', (req, res) => {
        if (questionToTheCrowdUsed) {
            return res.json({
                text: 'To koło ratunkowe było już wykorzystane.'
            });
        }
        const chart = [10, 20, 30, 40]

        for (let i = chart.length - 1; i > 0; i--) {
            const change = Math.floor(Math.random() * 20 - 10);

            chart[i] += change
            chart[i - 1] -= change
        }
        questionToTheCrowdUsed = true;
        const question = questions[goodAnswers];
        const {
            correctAnswer
        } = question;

        [chart[3], chart[correctAnswer]] = [chart[correctAnswer], chart[3]]

        res.json({
            chart
        })
    })




}

module.exports = gameRoutes;