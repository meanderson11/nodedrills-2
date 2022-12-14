require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3035
const ctrl = require('./controller')

console.log(port)

app.use(express.json())
app.use(cors())

app.get('/api/info', ctrl.getInputs)
app.post('/api/info', ctrl.createInput)

app.listen(port, () => console.log(`running on ${port}`))