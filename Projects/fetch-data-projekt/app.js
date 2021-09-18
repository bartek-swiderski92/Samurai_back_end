// http://numbersapi.com/random/year?json


// // ZADANIE 1
const fetch = require('node-fetch');

// // JAK USTALIC CO WPISALISMY?

// // console.log(process.argv);

// const year = process.argv[2] || Math.floor(Math.random() * 2020)
// // console.log(year);

// fetch(`http://numbersapi.com/${year}/year?json`)
//     .then(response => {
//         // console.log(response.status);
//         // console.log(response.ok);
//         return response.json()
//     })
//     .then(data => console.log(data.text))
//     .catch(error => {
//         console.log("ERRRRORRR", error);
//     })



//Zadanie 2
// `http://numbersapi.com/${number}/${type}?json`
// console.log(process.argv);
const arg = process.argv[2];
let type = ''

if (arg.indexOf('--year') === 0) {
    console.log('szukamy informacji o roku');
    type = 'year';
} else if (arg.indexOf('--math') === 0) {
    console.log('szukamy informacji o liczbie');
    type = 'math';
} else if (arg.indexOf('--trivia') === 0) {
    console.log('szukamy liczby-ciekawostki');
    type = 'trivia';
}

const equalSign = arg.search('=');
// console.log(equalSign);
if (equalSign === -1) console.log('Nie wpisales liczby!')

const number = arg.slice(equalSign + 1)
// console.log(number);

// if (number === "" || isNaN(Number(number))) {
//     console.log('To nie jest liczba')
//     process.exit();
// };

fetch(`http://numbersapi.com/${number}/${type}?json`)
    .then(response => {
        if (response.ok) {
            response.json()
        } else {
            throw new Error('OOOO cos nie tak: ' + response.status)
        }
        console.log('Cos jest nie tak ', response.status);
    })
    .then(response => console.log(response.text))
    .catch(err => console.log("Error: ", err));