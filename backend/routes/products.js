const express = require('express');
const router = express.Router();
const db = require('../db');

// Récupérer tous les produits
router.get('/', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Ajouter un nouveau produit
router.post('/', (req, res) => {
  const { name, price } = req.body;
  db.query(
    'INSERT INTO products (name, price) VALUES (?, ?)',
    [name, price],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id: result.insertId, name, price });
    }
  );
});

// Modifier un produit existant
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, price } = req.body;
  db.query(
    'UPDATE products SET name = ?, price = ? WHERE id = ?',
    [name, price, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ id, name, price });
    }
  );
});

// Supprimer un produit
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM products WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Produit supprimé' });
  });
});

module.exports = router;
