// const express = require('express');
// const path = require('path');
// const app = express();

// app.listen(3000, () => {
//     console.log('Server is listening at http://localhost:3000');
// });

// app.get('/', (req) => {
// const { name, surname} = req.query
// console.log(`hello ` + name + ' ' + surname);

// console.log(req.get('Referer'));

// console.log('Spis Ludzi');
// });

// app.get('/:1', (req) =>{
//     console.log('Informacja szcegółowa na temat osoby o ID 1');

// });

// app.post('/', (req) =>{
//     console.log('Dodawanie nowej osoby');
// });

// app.patch ('/1', (req) =>{
//     console.log('AKtualizacja osoby o ID 1');
// });

// app.delete ('/1', (req) =>{
//     console.log('Usuwanie osoby o ID 1');
// });


// app.get('/hello/new-user', (req) => {
//     console.log('Dodawanie nowego użytkownika');
// });

// app.get('/hello/:name', (req) => {
//     console.log(`Hello, ${req.params.name}`);
// });

// app.get('/article/:id/:title?', (req) => {
//     console.log(req.params);
// });

// app.get('/', (req) => {
// console.log('Spis Ludzi');
// });

// app.get('/:id', (req) =>{
//     console.log('Informacja szcegółowa na temat osoby o ID ' + req.params.id);

// });

// app.post('/', (req) =>{
//     console.log('Dodawanie nowej osoby');
// });

// app.patch ('/:id', (req) =>{
//     console.log('AKtualizacja osoby o ID ' + req.params.id);
// });

// app.delete ('/:id', (req) =>{
//     console.log('Usuwanie osoby o ID ' + req.params.id);
// });

// app.get('/', (req, res) => {

//     const str = 'Zażółć gęśią jaźń';
//     const ar = str.split(' ')
//     res.send(ar);
//     });

// app.get('/:id', (req, res) => {
//     res.redirect(`/user/${req.params.id}`)
// });

// app.get('/home/about/company', (req, res) => {
//     res.redirect(`.`)
// });

// app.get('/home/about/company', (req, res) => {
//     res.redirect(`back`)
// });

// app.get('/', (req, res) => {
//     const fileName = 'index.html';
//     res.sendFile(fileName, {
//         root: path.join(__dirname, 'static')
//     })
// })
// app.get('/logo', (req, res) => {
//     // const fileName = path.join(__dirname, 'static/logo.jpg');
//     // res.sendFile(fileName);

//     const fileName = 'logo.jpg';
//     res.sendFile(fileName, {
//         root: path.join(__dirname, 'static')
//         // lastModified: false
//     })
// })

// app.get('/', (req, res) => {
//     res.send('Strona Główna')
// })

// app.get('/hi/:name', (req, res) => {

//     const {
//         name
//     } = req.params

//     const dt = new Date();
//     dt.setDate(dt.getDate() + 7);

//     res.cookie('visitor_name', name, {
//         // expires: dt,
//             maxAge: 5 * 60 * 1000,
//     });

//     res.send('Imię zapisano.')
// })

// app.get('/logout', (req, res) => {
//     res.clearCookie('visitor_name');

//     res.redirect('/')
// })


// Middleware

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser')

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});

app.use(express.json());
app.use(express.static(
    path.join(__dirname, 'static')
))
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.end()
// });

// app.post('/hello', (req, res) => {
//     console.log(req.body);
//     const {
//         name,
//         surname
//     } = req.body;

//     res.send(`Witaj ${name} ${surname}`)
// })