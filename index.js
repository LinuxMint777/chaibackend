import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT || 3000
// --------------------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.send('HOME Page server running...')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube page server is running.</h2>')
})

app.get('/login', (req, res) => {
    res.send('<h2>Login Page Bro</h2>')
})

app.get('/signup', (req, res) => {
    res.send('<h2>Signup Page</h2>')
})


// ---------------------------------------------------------------------------------------------

app.listen(port, () => {
    console.log(`Server is running => http://localhost:${port}`)
})
