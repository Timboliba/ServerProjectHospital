//importation ddu module express
const express=require('express')

//importation de la connetion a la base de donnée
const connectDB=require('../mongoDB/MongoConnect')
connectDB()

const App=express()

App.use(express.json())

const Docteur=require('../models/docteur/Docteur')
const Patient=require('../models/patient/Patient')
// const Consultation=require('../models/consultation/Consultation')
// const Planification=require('../models/planification/Planification')
const { error } = require('console')

// Pour eviter les erreur de  CORS
App.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//Récupération de tout les patients
App.get('/api/Patient',(req,res)=>{
  Patient.find({})
    .then(result=>res.status(200).json(result))
    .catch(error=>{
      res.status(404).json({error:error.message})
    })
})

//Ajout d'un nouveau patient
App.post('/api/Patient',async(req,res)=>{
  try {
    
    const NouveauPatient=new Patient({
    
      nom:req.body.nom,
      prenom:req.body.prenom,
      age:req.body.age,
      sexe:req.body.sexe,
      adresse:req.body.adresse,
      tel:req.body.tel,
      email:req.body.email,
      username:req.body.username,
      password:req.body.password
      
    });
    const savePatient=await NouveauPatient.save();
    res.status(201).json(savePatient);
      console.log("Succès");
    
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log("Échec");
  }
})

//Suppresion d'un patient
App.delete('/api/Pateint/:id',(req,res)=>{
  const id = req.params.id;
  Patient.deleteOne({ _id:id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Patient non trouvé" });
      }
      res.status(200).json({ message: "Patient supprimé avec succès" });
    })
    .catch(error => res.status(500).json({ error: "Erreur serveur" }));
})

//Mise à jour d'un patient
App.put('api/Patient/:id',(req,res)=>{
  const Pateintid=id.req.params.id
  const {nom,prenom,age,sexe,adresse,tel,email,username,password}=req.body

  Patient.findByIdAndUpdate(Pateintid,
    {
      //les champs a modifier
      nom,
      prenom,
      age,
      sexe,
      adresse,
      tel,
      email,
      username,
      password
    },{new:true}// {new:true} renvoie la version mise à jour du Patient
    )
      .then(result=>res.status(200).json({message: 'Mise à jour effectuer'}))
      .catch(error=>res.status(400).json({error:error.message}))

})



/*****************************************Route docteur*****************************************/

//Récupération de tout les Docteur 
App.get('/api/Docteur',(req,res)=>{
  Docteur.find({})
    .then(result=>res.status(200).json)
    .catch(error=>res.status(400).json({error:error.message}))
})

//Ajout d'un nouveau Docteur
App.post('/api/Docteur',async (req,res)=>{
  try{
    const newDocteur=new Docteur({
      nom:req.body.nom,
      prenom: req.body.prenom,
      age: req.body.age,
      sexe: req.body.sexe,
      photo: req.body.photo,
      specialite: req.body.specialite,
      titre: req.body.titre,
      adresse: req.body.adresse,
      telephone: req.body.telephone,
      diplome: req.body.diplome,
      username: req.body.username,
      password: req.body.password,
      categorieRDV: req.body.categorieRDV,
    })

    const savDocteur=await newDocteur.save()
      res.status(201).json(savDocteur)
      console.log('Succès')
  }catch(error){
    res.status(401).json({error:error.message})
    console.log('Echec')
  }
})

//Suppression d'un docteur
App.delete('/api/Docteur/:id',(req,res)=>{
  const id = req.params.id;
  Docteur.deleteOne({ _id:id })
    .then(result => {
      if (result.deletedCount === 0) {
        return res.status(404).json({ error: "Docteur non trouvé" });
      }
      res.status(200).json({ message: "Docteur supprimé avec succès" });
    })
    .catch(error => res.status(500).json({ error: "Erreur serveur" }));
})


//Mise a jour d'un Docteur
App.put('api/Docteur/:id',(req,res)=>{
  const Docteurid=id.req.params.id
  const {...body}=req.body

  Docteur.findByIdAndUpdate(Docteurid,
    {
      //les champs a modifier
    },{new:true}// {new:true} renvoie la version mise à jour du Docteur
    )
      .then(result=>res.status(200).json({message: 'Mise à jour effectuer'}))
      .catch(error=>res.status(400).json({error:error.message}))

})

/*****************************************Route docteur*****************************************/


module.exports =App;