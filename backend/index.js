// backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello word!');
});

app.listen(port, () => {
 console.log('Serveur backend lancé sur http://localhost:3000');

});
