const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());

app.use(express.json({ extended: true, limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<a href="https://t.me/stark_n1">My Telegram</a>');
});

app.use('/discord', require('./routes/discord'));

app.listen(PORT, () => {
    console.log(`App has been started on port ${PORT}...`)
});