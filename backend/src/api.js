const express = require('express');

const routermember = require('./routers/memberRouter');
const error = require('./middleware/error.middleware');

// ...

const app = express();

app.use(express.json());
app.use('/member', routermember);
app.use(express.static('public'));
app.use(error);

module.exports = app;