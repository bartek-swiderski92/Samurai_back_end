const express = require('express');
const gameRoutes = require('./routes/game.js')

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000/ Let\'s play a game!');
});

app.use(express.static('public'))

gameRoutes(app);