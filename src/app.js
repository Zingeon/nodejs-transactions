const express = require('express');
const bodyParser = require('body-parser');
const transactionsRouter = require('./routes/transactions');
const accountRouter = require('./routes/account');
const app = express();
const port = 3000


app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/api/transactions', transactionsRouter);
app.use('/api/account', accountRouter);

app.get('/', (req, res) => {
    res.send('');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json(err);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})