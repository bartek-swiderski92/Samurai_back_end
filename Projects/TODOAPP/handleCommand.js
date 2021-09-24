// const colors = require('colors');
const handleData = require('./handleData');


const handleCommand = ({
    add,
    remove,
    list
}) => {
    // console.log(add, remove, list);
    if (add) {
        if (typeof add !== 'string') {
            return console.log('wpisz nazwe dodawanego zadania (tekst)'.red)
        } else if (add.length < 7) {
            return console.log('Nazwa zadania musi miec wiecej niz 6 znakow.'.red)
        }
        handleData(1, add);
        // console.log('bede dodawac');
    } else if (remove) {
        if (typeof remove !== 'string' || remove.length < 7) {
            return console.log('Wpisz nazwe usuwanego zadania. To musi byc tekst i musi miec wiecej niz 6 znakow'.red)
        }
        handleData(2, remove);
        // console.log('bede usuwac');
    } else if (list || list === "") {
        handleData(3, null);
        // console.log('pokazuje liste');

    } else {
        console.log('Nie rozumiem polecenia. Użyj --add="nazwa zadania", --remove="nazwa zdania" lub opcji --list'.red);
    }
}

module.exports = handleCommand;