const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')


const server = express()
.use(express.static(path.join(__dirname, 'public')))
.use(express.json())
.use(routes)
.use(cors())
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))


mongoose.connect('mongodb+srv://hugo:semsenha1@i9-462hz.mongodb.net/estado_cidade?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});
// server.use(express.json());
// server.use(routes);

// server.listen(4001);
