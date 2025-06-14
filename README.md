# MiniApp CRUD - Angular & Node.js

Un projet pédagogique de gestion de produits (CRUD) avec Angular pour le frontend, Node.js pour le backend et MySQL via WampServer comme base de données.Tout personne ayant à disposition ce projet à l'obligation d'en faire un usage ethique.

##  Objectif pédagogique

Ce projet a été réalisé dans un but purement pédagogique.  
Il vise à illustrer le fonctionnement complet d’une application **full-stack** incluant :

- La communication entre **Angular** et **Node.js** via API REST.
- La gestion d’une base de données **MySQL** hébergée en local avec **WampServer**.
- L’implémentation complète des opérations **CRUD** (Créer, Lire, Mettre à jour, Supprimer)



##  Technologies utilisées

- **Frontend** : Angular
- **Backend** : Node.js (Express)
- **Base de données** : MySQL via WampServer
- **Autres** : HTML/CSS, TypeScript

---

## 🛠️ Installation & utilisation

### 1. Pré-requis

- [Node.js](https://nodejs.org/) installé sur votre machine
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- [WampServer](https://www.wampserver.com/) installé et lancé
- Un client MySQL (comme phpMyAdmin ou MySQL Workbench)

### 2. Mise en place de la base de données

1. Lancez **WampServer**.
2. Accédez à **phpMyAdmin** ou tout autre outil SQL.
3. Créez une base de données, par exemple `crud_db`.
4. Exécutez la requête suivante pour créer la table :

sql
CREATE TABLE produit (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL
);
### 3. Guide d'utilisation
  -Tout d'abord lancer le serveur wampserver
  -ouvrir le terminal naviguer vers le repetoire du projet 
   -cd frontend:ng serve
   -cd backend:npm start
