const express = require('express')

const app = express()
var path = require("path")
const fs = require('fs')
let json = './data/text.json'

// serve files from the public directory
app.use(express.static('public'))

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080')
})

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/getData', (req, res) => {
  res.sendFile(__dirname + '/admin/index.html')
  console.log('read file1')
  let data = 'test data'
  res.send(data)
  // fs.readFile(json, (err, data) => {
  //   console.log('read file')
  //   if (err) throw err
  //   let student = JSON.parse(data)
  //   res.send(student)
  // })
})