const mongoose = require('mongoose');

const URI = 'mongodb+srv://joseamigo:0lg4ch4v3z@cluster0.qvl01.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;