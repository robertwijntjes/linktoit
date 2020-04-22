const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require("body-parser")
const fetch = require('node-fetch')

const app = express()
const port = process.env.PORT || 3000
// application initilization

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
// Define paths for Express config


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
// Setup handlebars engine and views location

app.use(express.static(publicDirectoryPath))
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended:false})); 

const userrouter = require('./routers/user')
const non_ident_pages = require('./routers/non_ident_pages')
const itemrouter = require('./routers/item')


app.use(userrouter)
app.use(non_ident_pages)
app.use(itemrouter)



app.listen(port, () => {
    console.log('正在服务在端口 ' + port)
})
