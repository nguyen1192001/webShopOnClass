const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const window = require('url')
const  methodOverride = require('method-override')


app.use (express.urlencoded())
// connect to DB
db.connect();
// methos POST PUT PATCH...
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, "public"))) ;
//http logger
app.use(morgan('combined'))

// template engine
app.engine('.hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b,
    calc : (c,d)=>c*d
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resource//views'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



route(app)