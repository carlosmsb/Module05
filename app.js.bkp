import express from 'express'
import {} from 'dotenv/config'

const router = express.Router()
const app = express()

app.use(express.static('public'))

// router.get('/', (req, res) => {
//   res.sendFile('index.html', {root: 'public'})
// })

// router.get('/about', (req, res) => {
//   res.sendFile('about.html', {root: 'public'})
// })

router.route('/').get((req, res) => res.sendFile('index.html', {root: 'public'}))
router.route('/about').get((req, res) => res.sendFile('about.html', {root: 'public'}))

app.use(router)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
