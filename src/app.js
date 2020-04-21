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


app.get('', (req, res) => {
    res.render('index', {
        title: 'Linktoit',
        bodytext:'这个页用来分析服务信息',
        name: 'Robert Wijntjes'
    })
})

app.post('/login',(req,res)=>{

    
    console.log({
        name: req.body.name,
        passwordd: req.body.password
    })

    res.render('index', {
        title: 'Linktoit',
        bodytext:'这个页用来分析服务信息',
        name: 'L Ron H'
    })
})


app.post('/signup',(req,res)=>{
    console.log({
        name: req.body.name,
        email: req.body.email,
        c_email: req.body.c_email,
        password: req.body.password,
        c_password: req.body.c_password
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Linktoit',
        textbody:'这个网站用来展示IoT服务器的接口',
        name: 'Robert Wijntjes'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert Wijntjes',
        errorMessage: '找不到你搜的页'
    })
})


app.listen(port, () => {
    console.log('正在服务在端口 ' + port)
})
