const mongoose = require('mongoose');

const TitreSchema = mongoose.Schema({
    titre: { type: String, required: true },
});

module.exports = mongoose.model('Titre', TitreSchema);
