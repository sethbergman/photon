// const express = require('express')
// const bodyParser = require('body-parser')
// const $ = require('jquery')
// const http = require('http')
// const app = express()
//
// app.engine('html', require('ejs').renderFile)
// app.set('/views', express.static(__dirname + '/views'))
// app.set('view engine', 'html')
// app.use('/assets', express.static(__dirname + '/assets'))
//
// app.use(bodyParser.urlencoded({
// 	extended: false
// }))
//
// app.get('/', function (request, response) {
// 	response.render('index');
// })
//
// const server = app.listen(process.env.PORT || 5000, function () {
// 	console.log('Server running at http://0.0.0.0:' + server.address().port)
// })
//
// module.exports = app;
const express = require('express')
const errorHandler = require('errorhandler')
const path = require('path')
const app = express()

app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')
app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', (req, res) => {
  res.render('index')
})

app.use(errorHandler())

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running at http://localhost:' + server.address().port)
})

module.exports = server
