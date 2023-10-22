const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const chefDetails = require('./data/chef_details.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello cheif')
})

app.get('/chefDetails', (req, res) => {
  res.send(chefDetails)
})

app.get('/chefDetails/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = chefDetails.find(c => c.id === id)
    res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})