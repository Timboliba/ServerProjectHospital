const mongoose = require('mongoose');

const DocteurSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Number, required: true },
    sexe: { type: String, required: true },
    photo: { type: String, required: true },
    specialite: { type: String, required: true },
    titre: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
    diplome: { type: String, required: true },
    password: { type: String, required: true },
    categorieRDV: { type: String, required: true },
});

module.exports = mongoose.model('Docteur', DocteurSchema);
