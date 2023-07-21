const express = require('express');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

dotenv.config({ path: './config.env' });
require('./db/conn.js')
app.use(express.json());
app.use(cors())
app.use(require('./router/auth.js'))

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
})
