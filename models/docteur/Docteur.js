const mongoose = require('mongoose');

const DocteurSchema = mongoose.Schema({
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    age: { type: Number, required: false },
    sexe: { type: String, required: false },
    pic: { type: String, required: false },
    speciality: { type: String, required: false },
    email:{type:String,require:true},
    title: { type: String, required: false },
    city: { type: String, required: false },
    cabinetAddress: { type: String, required: false },
    cabinetPhone: { type: String, required: false },
    phone: { type: String, required: false },
    diplome: { type: String, required: false },
    password: { type: String, required: false },
    categorieRDV: { type: String, required: false },
    disponibility: { type: String, required: false },
    createAt: { type: Date, required: false },
    updateAt: { type: Date, required: false },
});

module.exports = mongoose.model('Docteur', DocteurSchema);
