const express = require('express')
const bodyParser = require('body-parser')
const $ = require('jquery')
const http = require('http')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('/views', express.static(__dirname + '/views'))
app.set('view engine', 'html')
app.use('/assets', express.static(__dirname + '/assets'))

app.use(bodyParser.urlencoded({
	extended: false
}))

app.get('/', function (request, response) {
	response.render('index');
})

const server = app.listen(process.env.PORT || 5000, function () {
	console.log('Server running at http://0.0.0.0:' + server.address().port)
})

module.exports = app;