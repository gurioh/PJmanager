const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

const port = 3002;

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))