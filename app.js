const express = require('express')
const port = 3000
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const randomDialogue = require('./random_dialogue')

const Handlebars = require("handlebars");
Handlebars.registerHelper("checkRadio", function (a, b, options) {
  if (a === b) {
    return options.fn(this)
  } else {
    return options.inverse(this)
  }
})

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body.target
  const dialogue = randomDialogue(req.body)
  res.render('index', { dialogue: dialogue, option: option })

})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})