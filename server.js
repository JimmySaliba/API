const express = require('express')
var cors = require('cors')
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');


const app = express()
app.use(cors())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/services', function (req, res) {
//   data = ["Service 01","Service 02","Service 03","Service 04","Service 05","Service 06"]
//     res.send(data)
const result = excelToJson({
    source: fs.readFileSync('./data.xlsx') // fs.readFileSync return a Buffer
});
    res.send(result)
})


app.listen(3000)