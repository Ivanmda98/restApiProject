const express = require('express');
const config = require('../config');
const cors = require('cors');
const products = require('../router/product.router.js');

const app = express();
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

app.set('port', config.app.port);

app.get('/', (req, res) => {
    res.send('API Basic')
})
app.use('/api/v1/', products)

module.exports = app;
