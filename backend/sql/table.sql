-- Créer la base de données 'miniapp' si elle n'existe pas
CREATE DATABASE IF NOT EXISTS miniapp;

-- Utiliser la base 'miniapp'
USE miniapp;

-- Créer la table 'products' pour stocker les produits
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY, -- ID auto-incrémenté
  name VARCHAR(100) NOT NULL,         -- Nom du produit, chaîne max 100 caractères
  price DECIMAL(10, 2) NOT NULL      -- Prix du produit, nombre décimal 10 chiffres, 2 décimales
);
