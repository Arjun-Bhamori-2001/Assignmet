const app = require(`./app.js`)
const dotenv = require(`dotenv`)
const connectDatabase = require(`./config/database.js`)
dotenv.config({ path: 'backend/config/config.env' })

connectDatabase()

app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
