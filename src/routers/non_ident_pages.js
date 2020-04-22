const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.get('', (req, res) => {
    res.render('index', {
        title: 'Linktoit',
        bodytext:'这个页用来分析服务信息',
        name: 'Robert Wijntjes'
    })
})

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'Linktoit',
        textbody:'这个网站用来展示IoT服务器的接口',
        name: 'Robert Wijntjes'
    })
})

router.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Robert Wijntjes',
        errorMessage: '找不到你搜的页'
    })
})

module.exports = router