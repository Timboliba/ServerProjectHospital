const mongoose=require('mongoose')

const DomicileSchema=mongoose.Schema({
    informations:{type:String,required:true},
    tarif:{type:String,required:true},
    date:{type:String,required:true},
    heure:{type:String,required:true},
})

module.exports=mongoose.model('Domicile',DomicileSchema)