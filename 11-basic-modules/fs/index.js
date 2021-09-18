const fs = require('fs');

// 1. ACCESS

// fs.access('./names.txt', fs.constants.F_OK, (err) => {
//     console.log(err ? "Plik nie istnieje" : "Plik istnieje");
// });

// fs.access('./zablokowany.txt', fs.constants.W_OK, (err) => {
//     console.log(err ? "Pliku nie mozna zapisywac" : "Plik mozna zapisywac");
// });



// 2. RENAME

// try {
//     fs.renameSync('names.txt', 'imiona.txt')
// } catch (err) {
//     console.log(err);
// }

// , (err) => { })
// fs.rename('imiona.txt', 'names.txt', (err) => {
//     if (err) return console.log(err);
//     else console.log('Nazwa zmieniona');
// })



// 3. READDIR 

// console.log(fs.readdirSync('./'));
// fs.readdir('./', (err, files) => {
//     if (err) return console.log("Blad: ", err);
//     console.log("Zawartosc: ", files);
// })

// 4. READFILE

// fs.readFile('names.txt', ('utf8'), (err, data) => {
//     if (err) throw Error(err)
//     console.log(data);
// })

// try {
//     console.log(fs.readFileSync('names.txt', 'utf8'));
// } catch (err) {
//     console.log(err);
// }
// console.log(names);



// 5. WRITEFILE
// fs.readFile('nasmes.txt', 'utf8', (err, data) => {
//     if (err) return console.log('Nie udalo sie');

//     fs.writeFile('users.txt', data, (err) => {
//         if (err) console.log(err);
//         else console.log('Udalo sie zapisac w pliku');
//     })
// })
// const names = "Jan, Jerzy"

fs.readFile('names.txt', (err, data) => {
    console.log(data);
    fs.appendFile('users.txt', data, (err) => {
        if (err) console.log(err);
        else console.log('Udalo sie zapisac w pliku');
    })
})