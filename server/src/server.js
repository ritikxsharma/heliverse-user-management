require('../alias')
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const errorHandler = require('@middlewares/errorHandling/errorHandler');
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/users', require('@routers/usersRouter'))
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})