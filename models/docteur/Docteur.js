const mongoose = require('mongoose');

const DocteurSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
    sexe: { type: String, required: true },
    pic: { type: String, required: false },
    speciality: { type: String, required: true },
    email:{type:String,require:true},
    title: { type: String, required: true },
    city: { type: String, required: true },
    cabinetAddress: { type: String, required: true },
    cabinetPhone: { type: String, required: true },
    phone: { type: String, required: true },
    diplome: { type: String, required: true },
    password: { type: String, required: true },
    categorieRDV: { type: String, required: true },
    disponibility: { type: String, required: false },
    createAt: { type: Date, required: true },
    updateAt: { type: Date, required: true },
});

module.exports = mongoose.model('Docteur', DocteurSchema);
