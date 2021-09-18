// http://numbersapi.com/random/year?json


// ZADANIE 1
const fetch = require('node-fetch');

// JAK USTALIC CO WPISALISMY?

// console.log(process.argv);

const year = process.argv[2] || Math.floor(Math.random() * 2020)
// console.log(year);

fetch(`http://numbersapi.com/${year}/year?json`)
    .then(response => {
        // console.log(response.status);
        // console.log(response.ok);
        return response.json()
    })
    .then(data => console.log(data.text))
    .catch(error => {
        console.log("ERRRRORRR", error);
    })