// Import du module mysql2 pour gérer MySQL
const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'miniapp'
});

// Connexion à MySQL(Dans notre cas nous utilisons wampserver comme SGBD local)
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
    return;
  }
  console.log('Connecté à la base MySQL "miniapp" avec succès !');
});

// Export de la connexion pour utilisation dans d'autres fichiers
module.exports = connection;
