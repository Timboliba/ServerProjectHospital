const mongoose = require('mongoose');

const DocteurSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    sexe: { type: String, required: true },
    pic: { type: String, required: true },
    speciality: { type: String, required: true },
    title: { type: String, required: true },
    city: { type: String, required: true },
    cabinetAddress: { type: String, required: true },
    cabinetPhone: { type: String, required: true },
    phone: { type: String, required: true },
    diplome: { type: String, required: true },
    password: { type: String, required: true },
    categorieRDV: { type: String, required: true },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
    // disponibility:"Cabinet" becrypte
});

module.exports = mongoose.model('Docteur', DocteurSchema);
