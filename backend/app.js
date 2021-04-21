const express = require(`express`)
const app = express()

const report = require(`./routes/report`)
const errorMiddleware = require('./middlewares/error')
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/api/v1`,report)
app.use(errorMiddleware)

module.exports = app