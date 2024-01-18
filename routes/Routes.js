//importation ddu module express
const express=require('express')

//importation de la connetion a la base de donnée
const connectDB=require('../mongoDB/MongoConnect')
connectDB()

const App=express()

App.use(express.json())

const Docteur=require('../models/docteur/Docteur')
const Patient=require('../models/patient/Patient')
const Consultation=require('../models/consultation/Consultation')
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


//Récupération des information d'un patient
App.get('/api/Patient/:id',(req,res)=>{
  const idPatient=req.body.idPatient
  Patient.findOne({_id:idPatient})
    .then(result=>res.status(200).json(result))
    .catch(error=>{
      res.status(404).json({error:error.message})
    })
})

//Ajout d'un nouveau patient
App.post('/api/Patient',async(req,res)=>{
  try {
    const currentDate = new Date();
    const NouveauPatient=new Patient({
    
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      email:req.body.email,
      password:req.body.password,
      country:req.body.country,
      phone:req.body.phone,
      pic:req.body.pic,
      age:req.body.age,
      sexe:req.body.sexe,
      createAt: req.body.createAt,
      updateAt: req.body.updateAt,
      
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
  const {firstname,lastname,email,password,country,phone,pic,age,sexe,updatedAt}=req.body
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  Patient.findByIdAndUpdate(Pateintid,
    {
      //les champs a modifier
      firstname,
      lastname,
      email,  
      password,
      country,
      phone,
      pic,
      age,
      sexe,
      updatedAt:formattedDate
    },{new:true}// {new:true} renvoie la version mise à jour du Patient
    )
      .then(result=>res.status(200).json({message: 'Mise à jour effectuer'}))
      .catch(error=>res.status(400).json({error:error.message}))

})



/*****************************************Route docteur*****************************************/

// Récupération de tout les Docteur 
App.get('/api/Docteur',(req,res,next)=>{
  Docteur.find({})
    .then(result=>res.status(200).json(result))
    .catch(error=>res.status(400).json({error:error.message}))
    
})


// Recuperation d'un Docteur par son id d'un Docteur
App.get('/api/Docteur/id', (req, res) => {
  const idDoc = req.body.id;
  console.log(idDoc)
  Docteur.findOne({_id:idDoc} )
    .then(docteur => {
      if (!docteur) {
        return res.status(404).json({ error: "Docteur non trouvé" });
      }
      res.status(200).json(docteur);
    })
    .catch(error => res.status(500).json({ error: "Erreur serveur" }));
});


//Ajout d'un nouveau Docteur
App.post('/api/Docteur',async (req,res)=>{
  try{
    const newDocteur=new Docteur({
      firstname:req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      sexe: req.body.sexe,
      pic: req.body.pic,
      speciality: req.body.speciality,
      title: req.body.title,
      city: req.body.city,
      cabinetAddress: req.body.cabinetAddress,
      cabinetPhone: req.body.cabinetPhone,
      phone: req.body.phone,
      diplome: req.body.diplome,
      password: req.body.password,
      categorieRDV: req.body.categorieRDV,
      createAt: req.body.createAt,
      updateAt: req.body.updateAt,
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
App.put('/api/Docteur/:id',(req,res)=>{
  const Docteurid=id.req.params.id
  const {...body}=req.body

  Docteur.findByIdAndUpdate(Docteurid,
    {
      //les champs a modifier
      firstname,
      lastname,
      age,
      sexe,
      pic,
      speciality,
      title,
      city,
      cabinetAddress,
      cabinetPhone,
      phone,
      diplome,
      password,
      categorieRDV,
      updateAt: formattedDate,
    },{new:true}// {new:true} renvoie la version mise à jour du Docteur
    )
      .then(result=>res.status(200).json({message: 'Mise à jour effectuer'}))
      .catch(error=>res.status(400).json({error:error.message}))

})

/*****************************************Route prise de rendez-vous*****************************************/

App.post('/api/Consultation',async (req,res)=>{
  
    const NewConsultation=new Consultation({
      ...req.body
    });
   NewConsultation.save()
   .then(()=>res.json({message:"Objet enregistrer avec succes"}))
   .catch(error=>res.status(400).json({error:"Echec de l'enregistrement"}))
   

})

//Recupération de la liste de consultation
App.get('/api/Consultation',(req,res,next)=>{
  
  Consultation.find({})
    .then(result=>res.status(200).json(result))
    .catch(error=>res.status(400).json({error:error.message})) 
})

App.get('/api/Consultation/Patient/:id_patient',(req,res,next)=>{
  const {id_patient}=req.params.id_patient
  Consultation.find({id_patient:id_patient})
    .then(result=>res.status(200).json(result))
    .catch(error=>res.status(400).json({error:error.message})) 
})

//Modification de l'etat du rendez-vous
// App.put('api/Docteur/:id',(req,res)=>{
//   const Docteurid=id.req.params.id
//   const {...body}=req.body

//   Docteur.findByIdAndUpdate(Docteurid,
//     {
//       id_patient:req.body.id_patient,
//       id_docteur:req.body.id_docteur,
//       date_consultation:req.body.date_consultation,
//       heure_consultation:req.body.heure_consultation,
//       etatConsultation:req.body.etatConsultation
//     },{new:true}// {new:true} renvoie la version mise à jour du Docteur
//     )
//       .then(result=>res.status(200).json({message: 'Mise à jour effectuer'}))
//       .catch(error=>res.status(400).json({error:error.message}))

// })

module.exports =App;
