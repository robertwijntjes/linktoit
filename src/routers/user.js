const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/user/login',(req,res)=>{
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


router.post('/user/signup',(req,res)=>{
    console.log({
        name: req.body.name,
        email: req.body.email,
        c_email: req.body.c_email,
        password: req.body.password,
        c_password: req.body.c_password
    })
})

module.exports = router