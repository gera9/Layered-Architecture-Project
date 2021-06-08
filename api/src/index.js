const express = require('express');
const routes = require('./route/index');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://DB/bookshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes or endpoints
app.use('/', routes());

// Listening
app.listen(5000);