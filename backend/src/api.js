const express = require('express');

const routermember = require('./routers/memberRouter');

// ...

const app = express();

app.use(express.json());
app.use('/member', routermember);
app.use(express.static('public'));


module.exports = app;