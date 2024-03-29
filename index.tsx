// require('dotenv').config()
// const express = require('express')
// const app = express()
// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use (express.static ('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (_req: any, res: { render: (arg0: string) => void }) => {
    res.render('home')
  })
  
app.use('/places',require('./controllers/places'))

app.get('/', (_req: any, res: { send: (arg0: string) => void }) => {
    res.send('Rest Rant !')
})

app.get('*', (req: any, res: { render: (arg0: string) => void }) => {
    res.render('error404')
})

app.listen(process.env.PORT)
