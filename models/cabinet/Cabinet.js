const mongoose=require('mongoose')

const CabinetSchema=mongoose.Schema({
    nom_cabinet:{type:String,required:true},
    adresse:{type:String,required:true},
    telephone:{type:String,required:true},
    tarif:{type:String,required:true},
    date:{type:String,required:true},
    heure:{type:String,required:true},
})
module.exports=mongoose.model('Cabinet',CabinetSchema)