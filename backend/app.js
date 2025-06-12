// On importe Express, framework minimaliste pour créer des serveurs HTTP
const express = require('express');


const cors = require('cors');


const app = express();
         
const productRoutes = require('./routes/products');

// Autoriser toutes les requêtes cross-origin (depuis Angular par ex.)
app.use(cors());

// Pour que le serveur comprenne les données JSON envoyées par le frontend (ex: POST)
app.use(express.json());

// Utiliser les routes définies dans routes/products.js à partir de l'URL /api/products
app.use('/api/products', productRoutes);

// Lancer le serveur sur le port 3000 (localhost:3000)
app.listen(3000, () => {
  console.log('Serveur backend lancé sur http://localhost:3000');
});
