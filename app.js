import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'

const app = express()

//LOAD ROUTES INTO OUR MAIN FILE 

app.use('/api/v1/employees', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
