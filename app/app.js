const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(morgan('common'));

app.use('/api/v1', routes);

module.exports = app;
