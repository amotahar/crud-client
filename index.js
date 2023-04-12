// const express = require('express');
// const cors = require('cors')
// const app = express();
// const port = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('Hello from node crude!')
// })

// app.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello form CRUD')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});