var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(path.join(__dirname, 'public')))

app.listen(80, () => { console.log('Server is running at PORT', 80) })