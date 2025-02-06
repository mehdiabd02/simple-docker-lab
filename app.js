const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Pour parser le corps des requêtes en JSON

// Connexion à MongoDB
mongoose.connect('mongodb://mongo:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connecté à MongoDB');
}).catch(err => {
    console.log('Erreur de connexion à MongoDB:', err);
});

// Définir un modèle Mongoose pour un "Utilisateur"
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    email: String,
}));

// Route pour obtenir tous les utilisateurs
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).send('Erreur lors de la récupération des utilisateurs');
    }
});

// Route pour ajouter un utilisateur
app.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send('Utilisateur créé');
    } catch (err) {
        res.status(500).send('Erreur lors de l\'ajout de l\'utilisateur');
    }
});

// Route pour supprimer un utilisateur par ID
app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await User.findByIdAndDelete(id);
        res.send('Utilisateur supprimé');
    } catch (err) {
        res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
    }
});

// Démarrer le serveur
const port = 3000;
app.listen(port, () => {
    console.log(`App en cours d'exécution sur http://localhost:${port}`);
});
