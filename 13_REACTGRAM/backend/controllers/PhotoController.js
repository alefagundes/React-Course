const express = require('express')
const Photo = require('../models/Photo')

const teste = (req, res) => {
    res.send('testando')
}

module.exports = {
    teste,
}
