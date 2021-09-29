const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});

app.get('/', (req) => {
    console.log('req.protocol', req.protocol);
    console.log('req.secure', req.secure);
});