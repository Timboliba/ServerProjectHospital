const mongoose = require('mongoose')

//importation du fichier  de configuration dotenv
require('dotenv/config')

const connectDB = async () => {

  mongoose.set('strictQuery', false);
  mongoose.connect(process.env.Mongo_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  
    .then(() => console.log('Connection to MongoDB successful !'))
    .catch(() => { console.log('Connection to MongoDB failed !'), process.exit() });
}

module.exports = connectDB;