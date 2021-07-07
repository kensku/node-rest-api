const express = require('express');
const app = express();

app.get('/services', (req, res) =>
res.send('You are at the guest services'));

app.get('/', (req, res) =>
res.send('beginning'));

app.get('/appointment', (req, res) =>
res.send('making appointmments'));





app.listen(3000, () => console.log('rodando e cantando'));